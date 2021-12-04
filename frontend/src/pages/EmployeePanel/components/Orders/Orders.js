
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";

import Order from "./Order";
import OrderDetails from "./OrderDetails";

const Orders = () => {
    const [orders, setOrders] = useState(null)
    const [editOrdeId, setEditOrderId] = useState(null)
    const [editOrder, setEditOrder] = useState(null)

    const fetchDate = async () => {
        await axios.get("http://localhost:8888/api/orders").then((response) => {
            setOrders(response.data)
        })
    }

    useEffect(() => {
        fetchDate()
    }, [])

    const fetchOrder = () => {
        const order = orders.filter(order => order.orderId === editOrdeId)
        setEditOrder(order[0])
    }


    useEffect(() => {
        if(editOrdeId)
            fetchOrder()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editOrdeId])

    const countPrice = (products) => {
        let price = 0
        products.map((product) => price = + product.price)
        return price
    }

    const contextOrders = orders ? (
        <Row>
            {orders.map((order) =>
                <Col xs="auto" key={order.orderId}>
                    <Order
                        id={order.orderId}
                        name={order.name}
                        delivery={order.delivery.name}
                        status={order.status}
                        cost={countPrice(order.products)}
                        onSetEditOrderId={setEditOrderId}
                    />
                </Col>
            )}
        </Row>
    ) : null

    return (<div className="m-3">
        <h4>{editOrder ? "Zamówienie" : "Zamówienia"}</h4>
        <hr />
        {editOrder ? <OrderDetails order={editOrder} /> : contextOrders}
    </div>);
}

export default Orders

import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";

import Order from "./Order";

const Orders = () => {
    const [orders, setOrders] = useState(null)

    const fetchDate = async () => {
        await axios.get("http://localhost:8888/api/orders").then((response) => {
            setOrders(response.data)
        })
    }

    useEffect(() => {
        fetchDate()
    }, [])

    const countPrice = (products) => {
        let price = 0
        products.map((product) => price = + product.price)
        return price
    }

    return (<div className="m-3">
        <h4>Zamówienia</h4>
        <hr />
        {orders ? (
            <Row>
                {orders.map((order) =>
                    <Col xs="auto" key={order.orderId}>
                        <Order
                            id={order.orderId}
                            name={order.name}
                            delivery={order.delivery.name}
                            status={order.status}
                            cost={countPrice(order.products)}
                        />
                    </Col>
                )}
            </Row>
        ) : null}
    </div>);
}

export default Orders

import React, { useState, useEffect, useContext } from "react";
import { Col, Row, CloseButton } from "react-bootstrap";
import axios from "axios";

import Order from "./Order";
import OrderDetails from "./OrderDetails";
import LoadingIcon from "../../../../components/LoadingIcon/LoadingIcon";
import AuthContext from "../../../../store/auth-context";

const Orders = (props) => {
    const authCtx = useContext(AuthContext)
    const authJWT = {
        headers: {
            'Authorization': `Bearer ${authCtx.token}`
        }
    }
    const [orders, setOrders] = useState(null)
    const [editOrdeId, setEditOrderId] = useState(null)
    const [editOrder, setEditOrder] = useState(null)

    const fetchDate = async () => {
        await axios.get("http://localhost:8888/api/orders", authJWT).then((response) => {
            setOrders(response.data)
        })
    }

    useEffect(() => {
        fetchDate()
    }, [props.change])

    const fetchOrder = () => {
        const order = orders.filter(order => order.orderId === editOrdeId)
        setEditOrder(order[0])
    }


    useEffect(() => {
        if (editOrdeId)
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
    ) : <LoadingIcon />

    return (<div className="m-3">
        <Row>
            <Col xs={10}>
                <h4>{editOrder ? "Zamówienie" : "Zamówienia"}</h4>
            </Col>
            <Col xs={1} className="d-flex justify-content-md-end" >
                {editOrder && <CloseButton onClick={() => setEditOrder(null)} />}
            </Col>
        </Row>
        <hr />
        {editOrder ? <OrderDetails onChange={props.onChange} order={editOrder} /> : contextOrders}
    </div>);
}

export default Orders
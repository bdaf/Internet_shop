import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Table, Button } from "react-bootstrap";
import Select from 'react-select';

const OrderDetails = (props) => {
    const [status, setStatus] = useState()

    const options = [
        { value: 'NOT ORDERED', label: 'Niezamówiono' },
        { value: 'ORDERED', label: 'Zamówiono' },
        { value: 'PAYED', label: 'Zapłacone' },
        { value: 'SENT', label: 'Wysłano' },
        { value: 'DELIVERED', label: 'Dostarczono' }
    ]

    useEffect(() => {
        const startStatus = options.filter(opt => opt.value === props.order.status)
        setStatus(startStatus[0])
    }, [])

    const changeStatusHandler = async () => {

        const updateOrder =
        {
            status: status.value
        }

        await axios.put(`http://localhost:8888/api/orders/${props.order.orderId}`, updateOrder).then((response) => {
            console.log(response.data)
        })
    }

    return (<>
        <Row className="mb-3">
            <Col xs={10} className="d-flex justify-content-center" style={{ fontSize: "2rem" }}>{props.order.name}</Col>
            <Col xs={2} className="d-flex justify-content-end">ID: {props.order.orderId}</Col>
        </Row>
        <hr className="ms-5 me-5" />
        <Row className="mb-3">
            <h5>Status przesyłki</h5>
            <Col xs={6} md={6}>
                <Select onChange={(e) => setStatus(e)} value={status} options={options} placeholder="Status " />
            </Col>
            <Col xs={5} md={5}>
            <div className="me-3 vr"/>
            <Button variant="primary" onClick={() => changeStatusHandler()}>Zmień status</Button>
            </Col>
        </Row>
        <hr className="ms-5 me-5" />
        <Row>
            <h5>Dostawca: {props.order.delivery.name}</h5>
        </Row>
        <hr className="ms-5 me-5" />
        <Row>
            <h5>Produkty</h5>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nazwa</th>
                        <th>Ilość</th>
                        <th>Cena</th>
                    </tr>
                </thead>
                <tbody>
                    {props.order.products.map((p, index) =>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{p.name}</td>
                            <td>{p.amount}</td>
                            <td>{p.price.toFixed(2)} PLN</td>
                        </tr>
                    )}

                </tbody>
            </Table>
        </Row>



    </>);
}

export default OrderDetails
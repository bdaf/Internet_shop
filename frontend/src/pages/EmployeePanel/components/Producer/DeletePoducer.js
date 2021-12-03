import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row, FloatingLabel, Form, Button } from "react-bootstrap";
import Select from 'react-select';

const DeleteProducer = () => {
    const [name, setName] = useState('')
    const [nip, setNip] = useState('')
    const [producer, setProducer] = useState(null)

    const [optionsProducer, setOptionsProducer] = useState([])

    const fetchDate = async () => {
        await axios.get("http://localhost:8888/api/producers").then((response) => {
            const optionsP = response.data.map((p) => {
                const opt = { value: p.nip, label: p.nameOfCompany, id: p.producerId}
                return opt
            })
            setOptionsProducer(optionsP)

        })
    }

    useEffect(() => {
        fetchDate()
    }, [])

    const addProducerHandler = async (e) => {
        e.preventDefault();

        await axios.delete(`http://localhost:8888/api/producers/${producer.id}`).then((response) => {
            console.log(response.data)
        })
    }

    const setProducerHandler = (e) => {
        setNip(e.value)
        setName(e.label)
        setProducer(e)
    }

    return (
        <div className="m-3">
            <Form onSubmit={(e) => addProducerHandler(e)}>
            <Row className="mb-3">
                    <Col xs={6} md={6}>
                        <Select onChange={(e) => setProducerHandler(e)} options={optionsProducer} placeholder="Producent" />
                    </Col>
                </Row>
                {producer ? (<>
                    <Row className="mb-3">
                        <h6>Producent</h6>
                        <hr/>
                    <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                        <FloatingLabel controlId="floatingPassword" label="Nazwa producenta">
                            <Form.Control onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Nazwa producenta" disabled />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} controlId="formGridNip">
                        <FloatingLabel controlId="floatingNip" label="NIP">
                            <Form.Control onChange={(e) => setNip(e.target.value)} value={nip} type="text" placeholder="NIP" disabled />
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                    </Button>
                </>) : null}
            </Form>
        </div>
    );
}

export default DeleteProducer
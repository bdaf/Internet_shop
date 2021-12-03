import React, { useState } from "react";
import axios from "axios";
import { Col, Row, FloatingLabel, Form, Button } from "react-bootstrap";


const AddProducer = () => {
    const [name, setName] = useState('')
    const [nip, setNip] = useState('')

    const addProducerHandler = async (e) => {
        e.preventDefault();

        const newProducer =
        {
            nameOfCompany: name,
            nip: nip
        }
        console.log(newProducer)

        await axios.post('http://localhost:8888/api/producers/save', newProducer).then((response) => {
            console.log(response.data)
        })
    }

    return (
        <div className="m-3">
            <Form onSubmit={(e) => addProducerHandler(e)}>
                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                        <FloatingLabel controlId="floatingPassword" label="Nazwa producenta">
                            <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Nazwa producenta" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} controlId="formGridNip">
                        <FloatingLabel controlId="floatingNip" label="NIP">
                            <Form.Control onChange={(e) => setNip(e.target.value)} type="text" placeholder="NIP" />
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default AddProducer
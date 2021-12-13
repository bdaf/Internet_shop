import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Col, Row, FloatingLabel, Form, Button, Alert } from "react-bootstrap";
import Select from 'react-select';
import AuthContext from "../../../../store/auth-context";

const EditProducer = (props) => {
    const authCtx = useContext(AuthContext)
    const authJWT = {
        headers: {
            'Authorization': `Bearer ${authCtx.token}`
        }
    }
    const [name, setName] = useState('')
    const [nip, setNip] = useState('')
    const [producer, setProducer] = useState(null)

    const [feedback, setFeedback] = useState(null)
    const [optionsProducer, setOptionsProducer] = useState([])

    const fetchDate = async () => {
        await axios.get("http://localhost:8888/api/producers", authJWT).then((response) => {
            const optionsP = response.data.map((p) => {
                const opt = { value: p.nip, label: p.nameOfCompany, id: p.producerId }
                return opt
            })
            setOptionsProducer(optionsP)

        })
    }

    useEffect(() => {
        fetchDate()
    }, [feedback, props.change])

    useEffect(() => {
        setFeedback(null)
    }, [producer])

    const addProducerHandler = async (e) => {
        e.preventDefault();

        const editProducer =
        {
            nameOfCompany: name,
            nip: nip
        }

        await axios.put(`http://localhost:8888/api/producers/${producer.id}`, editProducer, authJWT).then((response) => {
            props.onChange((prevState) => !prevState)
            if (response.status === 200)
                setFeedback(
                    <Alert variant="success">
                        Producent został zedytowany!
                    </Alert>
                )
            else
                setFeedback(
                    <Alert variant="danger">
                        Nie udało się edytować producenta!
                    </Alert>
                )
        }).catch((e) => {
            console.log(e)
            setFeedback(
                <Alert variant="danger">
                    Nie udało się edytować producenta!
                </Alert>
            )
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
                        <hr />
                        {feedback}
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                            <FloatingLabel controlId="floatingPassword" label="Nazwa producenta">
                                <Form.Control onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Nazwa producenta" required/>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridNip">
                            <FloatingLabel controlId="floatingNip" label="NIP">
                                <Form.Control onChange={(e) => setNip(e.target.value)} value={nip} type="text" placeholder="NIP" required/>
                            </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <div className="d-flex justify-content-end">
                        <Button className="ps-4 pe-4" variant="outline-primary" type="submit">
                            Edytuj producenta
                        </Button>
                    </div>
                </>) : null}
            </Form>
        </div>
    );
}

export default EditProducer
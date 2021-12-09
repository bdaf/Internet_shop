import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Col, Row, FloatingLabel, Form, Button, Alert } from "react-bootstrap";
import Select from 'react-select';
import AuthContext from "../../../../store/auth-context";

const AddSales = (props) => {
    const authCtx = useContext(AuthContext)
    const authJWT = {
        headers: {
            'Authorization': `Bearer ${authCtx.token}`
        }
    }

    const [discount, setDiscount] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState(0)
    const [categoryId, setCategoryId] = useState('')

    const [optionsCategory, setOptionsCategory] = useState([])
    const [feedback, setFeedback] = useState(null)

    const fetchDate = async () => {
        await axios.get("http://localhost:8888/api/categories", authJWT).then((response) => {
            const optionsC = response.data.map((c) => {
                const opt = { value: c.categoryId, label: c.name}
                return opt
            })
            setOptionsCategory(optionsC)
        })
    }

    useEffect(() => {
        fetchDate()
    }, [props.change])

    const addDiscountHandler = async (e) => {
        e.preventDefault();

        const newDiscount =
        {
            percent: discount / 100,
            fromDate: start,
            toDate: end
        }

        await axios.post(`http://localhost:8888/api/discounts/save/category/${categoryId}`, newDiscount, authJWT).then((response) => {
            props.onChange((prevState) => !prevState)
            if (response.status === 200)
                setFeedback(
                    <Alert variant="success">
                        Przecena została dodana!
                    </Alert>
                )
            else
                setFeedback(
                    <Alert variant="danger">
                        Nie udało się dodać przeceny!
                    </Alert>
                )
        }).catch((e) => {
            console.log(e)
            setFeedback(
                <Alert variant="danger">
                    Nie udało się dodać przeceny!
                </Alert>
            )
        })
    }

    return (
        <div className="m-3">
            {feedback}
            <Form onSubmit={(e) => addDiscountHandler(e)}>
                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                        <Select onChange={(e) => setCategoryId(e.value)} options={optionsCategory} placeholder="Kategoria" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group as={Col} xs={12} md={6} controlId="formGridAmount">
                        <FloatingLabel controlId="floatingAmount" label="Przecena (%)">
                            <Form.Control onChange={(e) => setDiscount(e.target.value)} type="number" max="100" placeholder="Przecena (%)" />
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} md={6} controlId="formGridPrice">
                        <FloatingLabel controlId="floatingPassword" label="Data rozpoczęcia">
                            <Form.Control onChange={(e) => setStart(e.target.value)} type="date" placeholder="Data rozpoczęcia" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} controlId="formGridAmount">
                        <FloatingLabel controlId="floatingAmount" label="Data zakończenia">
                            <Form.Control onChange={(e) => setEnd(e.target.value)} type="date" placeholder="Data zakończenia" />
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <div className="d-flex justify-content-end">
                        <Button className="ps-4 pe-4" variant="outline-primary" type="submit">
                            Dodaj przecene
                        </Button>
                    </div>
            </Form>
        </div>
    );
}

export default AddSales
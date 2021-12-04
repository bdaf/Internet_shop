import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row, FloatingLabel, Form, Button, Alert } from "react-bootstrap";
import Select from 'react-select';

const EditCategory = () => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState(null)

    const [optionsCategory, setOptionsCategory] = useState([])
    const [feedback, setFeedback] = useState(null)

    const fetchDate = async () => {
        await axios.get("http://localhost:8888/api/categories").then((response) => {
            const optionsP = response.data.map((p) => {
                const opt = { value: p.categoryId, label: p.name, discounts: p.discounts}
                return opt
            })
            setOptionsCategory(optionsP)

        })
    }

    useEffect(() => {
        fetchDate()
    }, [])

    useEffect(() => {
        setFeedback(null)
    }, [category])

    const updateCategoryHandler = async (e) => {
        e.preventDefault();

        const updateCategory =
        {
            name: name,
            discounts: category.discounts
        }

        await axios.put(`http://localhost:8888/api/categories/${category.value}`, updateCategory).then((response) => {
            console.log(response.data)
            if (response.status === 200)
                setFeedback(
                    <Alert variant="success">
                        Kategria została edytowana!
                    </Alert>
                )
            else
                setFeedback(
                    <Alert variant="danger">
                        Nie udało się zedytować kategorii!
                    </Alert>
                )
        }).catch((e) => {
            console.log(e)
            setFeedback(
                <Alert variant="danger">
                    Nie udało się zedytować kategorii!
                </Alert>
            )
        })
    }

    const setCategoryHandler = (e) => {
        setName(e.label)
        setCategory(e)
    }

    return (
        <div className="m-3">
            <Form onSubmit={(e) => updateCategoryHandler(e)}>
            <Row className="mb-3">
                    <Col xs={6} md={6}>
                        <Select onChange={(e) => setCategoryHandler(e)} options={optionsCategory} placeholder="Producent" />
                    </Col>
                </Row>
                {category ? (<>
                    <Row className="mb-3">
                        <h6>Kategoria</h6>
                        <hr />
                        {feedback}
                    <Form.Group as={Col} xs={12} md={12} controlId="formGridName">
                        <FloatingLabel controlId="floatingPassword" label="Nazwa kategorii">
                            <Form.Control onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Nazwa kategorii" />
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <div className="d-flex justify-content-end">
                        <Button className="ps-4 pe-4" variant="outline-primary" type="submit">
                            Edytuj kategorie
                        </Button>
                    </div>
                </>) : null}
            </Form>
        </div>
    );
}

export default EditCategory
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row, FloatingLabel, Form, Button, Alert } from "react-bootstrap";
import Select from 'react-select';

const DeleteCategory = (props) => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState(null)

    const [feedback, setFeedback] = useState(null)
    const [optionsCategory, setOptionsCategory] = useState([])

    const fetchDate = async () => {
        await axios.get("http://localhost:8888/api/categories").then((response) => {
            const optionsP = response.data.map((p) => {
                const opt = { value: p.categoryId, label: p.name}
                return opt
            })
            setOptionsCategory(optionsP)

        })
    }

    useEffect(() => {
        fetchDate()
    }, [props.change])

    useEffect(() => {
        setFeedback(null)
    }, [category])

    const deleteCategoryHandler = async (e) => {
        e.preventDefault();

        await axios.delete(`http://localhost:8888/api/categories/${category.value}`).then((response) => {
            props.onChange(5)
            if (response.status === 200)
                setFeedback(
                    <Alert variant="success">
                        Kategoria została usunięta!
                    </Alert>
                )
            else
                setFeedback(
                    <Alert variant="danger">
                        Nie udało się usunąć kategorii!
                    </Alert>
                )
        }).catch((e) => {
            console.log(e)
            setFeedback(
                <Alert variant="danger">
                    Nie udało się usunąć kategorii!
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
            <Form onSubmit={(e) => deleteCategoryHandler(e)}>
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
                            <Form.Control onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Nazwa kategorii" disabled />
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <div className="d-flex justify-content-end">
                        <Button className="ps-4 pe-4" variant="outline-danger" type="submit" disabled={feedback == null ? false : true}>
                            Usuń kategorie
                        </Button>
                    </div>
                </>) : null}
            </Form>
        </div>
    );
}

export default DeleteCategory
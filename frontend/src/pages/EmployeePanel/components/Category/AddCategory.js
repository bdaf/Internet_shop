import React, { useState } from "react";
import axios from "axios";
import { Col, Row, FloatingLabel, Form, Button, Alert } from "react-bootstrap";


const AddCategory = (props) => {
    const [name, setName] = useState('')

    const [feedback, setFeedback] = useState(null)

    const addCategoryHandler = async (e) => {
        e.preventDefault();

        const newCategory =
        {
            name: name,
            discounts: []
        }
        console.log(newCategory)

        await axios.post('http://localhost:8888/api/categories/save', newCategory).then((response) => {
            props.onChange(true)
            if (response.status === 200)
                setFeedback(
                    <Alert variant="success">
                        Kategoria została dodana!
                    </Alert>
                )
            else
                setFeedback(
                    <Alert variant="danger">
                        Nie udało się dodać kategorii!
                    </Alert>
                )
        }).catch((e) => {
            console.log(e)
            setFeedback(
                <Alert variant="danger">
                    Nie udało się dodać kategorii!
                </Alert>
            )
        })
    }

    return (
        <div className="m-3">
            <Form onSubmit={(e) => addCategoryHandler(e)}>
                {feedback}
                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                        <FloatingLabel controlId="floatingPassword" label="Nazwa kategorii">
                            <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Nazwa kategorii" />
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <div className="d-flex justify-content-end">
                    <Button className="ps-4 pe-4" variant="outline-primary" type="submit">
                        Dodaj kategorie
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default AddCategory
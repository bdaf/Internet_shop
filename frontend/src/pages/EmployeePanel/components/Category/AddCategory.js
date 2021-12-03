import React, { useState } from "react";
import axios from "axios";
import { Col, Row, FloatingLabel, Form, Button } from "react-bootstrap";


const AddCategory = () => {
    const [name, setName] = useState('')

    const addCategoryHandler = async (e) => {
        e.preventDefault();

        const newCategory =
        {
            name: name,
            discounts: []
        }
        console.log(newCategory)

        await axios.post('http://localhost:8888/api/categories/save', newCategory).then((response) => {
            console.log(response.data)
        })
    }

    return (
        <div className="m-3">
            <Form onSubmit={(e) => addCategoryHandler(e)}>
                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                        <FloatingLabel controlId="floatingPassword" label="Nazwa kategorii">
                            <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Nazwa kategorii" />
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

export default AddCategory
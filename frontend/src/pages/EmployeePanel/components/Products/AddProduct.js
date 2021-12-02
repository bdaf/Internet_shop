import React, { useState } from "react";
import { Col, Row, FloatingLabel, Form, Button } from "react-bootstrap";
import Select from 'react-select';

const AddProduct = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <div className="m-3">
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                        <FloatingLabel controlId="floatingPassword" label="Nazwa produktu">
                            <Form.Control type="password" placeholder="Nazwa produktu" />
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <FloatingLabel className="mb-3" controlId="floatingTextareaDescription" label="Opis produktu">
                    <Form.Control
                        as="textarea"
                        placeholder="Opis produktu"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>
                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} md={6} controlId="formGridPrice">
                        <FloatingLabel controlId="floatingPassword" label="Cena">
                            <Form.Control type="number" placeholder="Cena" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} controlId="formGridAmount">
                        <FloatingLabel controlId="floatingAmount" label="Ilość">
                            <Form.Control type="number" placeholder="Ilość" />
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Col xs={6} md={6}>
                        <Select options={options} placeholder="Kategoria" />
                    </Col>
                    <Col xs={6} md={6}>
                        <Select options={options} placeholder="Producent" />
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default AddProduct
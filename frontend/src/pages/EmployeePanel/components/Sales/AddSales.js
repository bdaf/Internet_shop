import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row, FloatingLabel, Form, Button } from "react-bootstrap";
import Select from 'react-select';

const AddSales = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [producer, setProducer] = useState('')

    const [optionsCategory, setOptionsCategory] = useState([])
    



    const fetchDate = async () => {
        await axios.get("http://localhost:8888/api/categories").then((response) => {
            const optionsC = response.data.map((c) => {
                const opt = { value: c.categoryId, label: c.name}
                return opt
            })
            setOptionsCategory(optionsC)
        })
    }



    useEffect(() => {
        fetchDate()
    }, [])

    const addProductHandler = async (e) => {
        e.preventDefault();

        // const newProduct =
        // {
        //     name: name,
        //     description: description,
        //     price: price,
        //     amount: amount,
        //     category: {
        //          name: category.label,
        //         discounts: []
        //     },
        //     producer: {
        //         nameOfCompany: producer.label,
        //         nip: producer.value
        //     }
        // }

        // await axios.post(`http://localhost:8888/api/products/save`, newProduct).then((response) => {
        //     console.log(response.data)
        // })
    }

    return (
        <div className="m-3">
            <Form onSubmit={(e) => addProductHandler(e)}>
                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                        <Select onChange={(e) => setCategory(e.value)} options={optionsCategory} placeholder="Kategoria" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group as={Col} xs={12} md={6} controlId="formGridAmount">
                        <FloatingLabel controlId="floatingAmount" label="Przecena">
                            <Form.Control onChange={(e) => setAmount(e.target.value)} type="number" placeholder="Przecena" />
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} md={6} controlId="formGridPrice">
                        <FloatingLabel controlId="floatingPassword" label="Data rozpoczęcia">
                            <Form.Control onChange={(e) => setPrice(e.target.value)} type="date" placeholder="Data rozpoczęcia" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} controlId="formGridAmount">
                        <FloatingLabel controlId="floatingAmount" label="Data zakończenia">
                            <Form.Control onChange={(e) => setAmount(e.target.value)} type="date" placeholder="Data zakończenia" />
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

export default AddSales
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row, FloatingLabel, Form, Button } from "react-bootstrap";
import Select from 'react-select';
import Sale from "./Sale";

const DeleteSales = () => {
    const [discount, setDiscount] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState(0)
    const [category, setCategory] = useState('')
    const [categories, setCategories] = useState('')

    const [optionsCategory, setOptionsCategory] = useState([])

    const fetchDate = async () => {
        await axios.get("http://localhost:8888/api/categories").then((response) => {
            setCategories(response.data)
            const optionsC = response.data.map((c) => {
                const opt = { value: c.categoryId, label: c.name, category: c }
                return opt
            })
            setOptionsCategory(optionsC)
        })
    }

    useEffect(() => {
        fetchDate()
    }, [])

    return (
        <div className="m-3">
                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                        <Select onChange={(e) => setCategory(e.category)} options={optionsCategory} placeholder="Kategoria" />
                    </Form.Group>
                </Row>
                {category ? (
                    <Row>
                    <h4>Przeceny na kategorie {category.name}</h4>
                    <hr />
                        {category.discounts.map((discount) =>
                            <Col xs="auto" key={discount.discountId}>
                                <Sale
                                    id={discount.discountId}
                                    discount={discount.percent}
                                    start={discount.fromDate}
                                    end={discount.toDate}
                                />
                            </Col>
                    )}
                    </Row>
                )
                    : null}
        </div>
    );
}

export default DeleteSales
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row, Form, Alert } from "react-bootstrap";
import Select from 'react-select';
import Sale from "./Sale";

const DeleteSales = (props) => {
    const [category, setCategory] = useState('')
    const [discounts, setDiscounts] = useState('')

    const [optionsCategory, setOptionsCategory] = useState([])
    const [feedback, setFeedback] = useState(null)

    const fetchDate = async () => {
        await axios.get("http://localhost:8888/api/categories").then((response) => {
            const optionsC = response.data.map((c) => {
                const opt = { value: c.categoryId, label: c.name, category: c }
                return opt
            })
            setOptionsCategory(optionsC)
        })
    }

    useEffect(() => {
        fetchDate()
    }, [feedback, props.change])

    useEffect(() => {
        setFeedback(null)
    }, [category])

    const deleteSale = async (id) => {
        await axios.delete(`http://localhost:8888/api/discounts/${id}`).then((response) => {
            props.onChange((prevState) => !prevState)
            if (response.status === 200) {
                setFeedback(
                    <Alert variant="success">
                        Przecena z {id} została usunięta!
                    </Alert>
                )

                const actDiscounts = discounts.filter(discount => discount.discountId !== id)
                setDiscounts(actDiscounts)
            }
            else
                setFeedback(
                    <Alert variant="danger">
                        Nie udało się usunąć przeceny z ID {id}!
                    </Alert>
                )
        }).catch((e) => {
            console.log(e)
            setFeedback(
                <Alert variant="danger">
                    Nie udało się usunąć przeceny z ID {id}!
                </Alert>
            )
        })
    }

    const setChangeCategoryHandler = (e) => {
        setCategory(e.category)
        setDiscounts(e.category.discounts)
    }

    return (
        <div className="m-3">
                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                        <Select onChange={(e) => setChangeCategoryHandler(e)} options={optionsCategory} placeholder="Kategoria" />
                    </Form.Group>
                </Row>
                {discounts ? (
                    <Row>
                    <h4>Przeceny na kategorie {category.name}</h4>
                    <hr />
                    {feedback}
                        {discounts.map((discount) =>
                            <Col xs="auto" key={discount.discountId}>
                                <Sale
                                    id={discount.discountId}
                                    discount={discount.percent * 100}
                                    start={discount.fromDate}
                                    end={discount.toDate}
                                    onDelete={deleteSale}
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
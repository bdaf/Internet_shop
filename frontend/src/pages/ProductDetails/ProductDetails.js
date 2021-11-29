import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Col, Row, Stack, Button } from "react-bootstrap";
import axios from 'axios';

import Navbar from "../../components/Navbar/Navbar";
import Carousels from "../../components/UI/Carousel/Carousel";

const ProductDetails = (props) => {
    const params = useParams();

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchProducts = async () => {
        await axios.get(`http://localhost:8888/api/products/${params.id}`).then((response) => {
            setProduct(response.data)
            setLoading(true)
        })
    }

    useEffect(() => {
        fetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!loading)
        return null;

    return (
        <>
            <Navbar />
            <div className="m-4">
                <Row>
                    <Col xs={12} md={5}>
                        <Carousels />
                    </Col>
                    <Col xs={12} md={7}>
                        <h1>{product.name}</h1>
                        <p>Producent: {product.producer.nameOfCompany}</p>
                        <hr />
                        <Row>
                            <Col xs={12} md={6}>
                                <p>Kategoria: {product.category.name}</p>
                                <p>{product.description}</p>
                            </Col>
                            <Col xs={12} md={6}>
                                <Stack gap={3}>
                                    <div className="ms-auto">{product.price.toFixed(2)} PLN</div>
                                    <Button variant="outline-danger">Dodaj do koszyka</Button>
                                </Stack>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default ProductDetails
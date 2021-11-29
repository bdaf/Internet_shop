import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Navbar from "../../components/Navbar/Navbar";
import Offer from "./components/Offer/Offer";
import Product from "./components/Product/Product";

const Home = () => {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchProducts = async () => {
        await axios.get("http://localhost:8888/api/products").then((response) => {
            setProducts(response.data)
        })
        setLoading(true)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const searchHandler = (term) => {
        if (!term)
            fetchProducts()
        else {
            const filterProducts = [...products]
                .filter(product => product.name.toLowerCase()
                    .includes(term.toLowerCase()))
            setProducts(filterProducts);
        }
    }

    const contextProduct = !loading ? <p>loading...</p> : products.map((product) =>
        <Col md="auto">
            <Product
                key={product.productId}
                id={product.productId}
                name={product.name}
                price={product.price}
                description={product.description.substr(0, 90)}
            />
        </Col>
    )

    return (
        <div>
            <Navbar search={true} onSearch={(term) => searchHandler(term)} />
            <div className="">
                <Offer />
            </div>
            <div className="m-4">
                <h1 className=" justify-content-md-center">Produkty</h1>
                <hr />
                <Row className="justify-content-md-center">
                    {contextProduct}
                </Row>
            </div>
        </div>
    );
}

export default Home
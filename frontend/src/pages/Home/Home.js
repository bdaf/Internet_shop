import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Navbar from "../../components/Navbar/Navbar";
import Offer from "./components/Offer/Offer";
import Product from "./components/Product/Product";
import Footer from "../../components/Footer/Footer";
import Filter from '../../components/Filter/Filter';

import styles from './Home.module.css'
import LoadingIcon from '../../components/LoadingIcon/LoadingIcon';

const Home = () => {
    const [allProducts, setAllProducts] = useState(null)
    const [filterProducts, setFilterProducts] = useState(null)
    const [loading, setLoading] = useState(false)

    const [isFiler, setIsFiler] = useState(false)
    const [name, setName] = useState('')
    const [fromPrice, setFromPrice] = useState('')
    const [toPrice, setToPrice] = useState('')

    const fetchProducts = async () => {
        await axios.get("http://localhost:8888/api/products").then((response) => {
            setAllProducts(response.data)
            setFilterProducts(response.data)
        })
        setLoading(true)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const actProduct = () => {
        let newActualyProduct = allProducts;
        if (newActualyProduct) {
            if (fromPrice) {
                newActualyProduct = [...newActualyProduct]
                    .filter(product => product.price >= (+fromPrice))
            }
            if (fromPrice || toPrice) {
                newActualyProduct = [...newActualyProduct]
                    .filter(product => product.price <= (+toPrice))
            }
            if (name.trim()) {
                newActualyProduct = [...newActualyProduct]
                    .filter(product => product.name.toLowerCase()
                        .includes(name.trim().toLowerCase()))
            }
        }
        return newActualyProduct
    }

    useEffect(() => {
        setFilterProducts(actProduct())
    }, [name, allProducts, fromPrice, toPrice])

    const contextProduct = !loading ? <LoadingIcon /> : filterProducts.map((product) =>
        <Col md="auto">
            <Product
                key={product.productId}
                id={product.productId}
                name={product.name}
                price={product.price}
                description={product.description.substr(0, 90)}
                gallery={product.gallery.photos}
            />
        </Col>
    )

    return (
        <>
            <Navbar search={true} name={name} onSetName={setName} />
            <div className={`${styles.bodyContainer}`}>
                <Offer />
                <div className="m-4">
                    <Row>
                        <Col xs={11}><h1>Produkty</h1></Col>
                        <Col className="d-flex justify-content-end" xs={1}>
                            <i onClick={() => setIsFiler((prev) => !prev)} className={`bi bi-filter ${isFiler ? styles.filterActive : styles.filter}`}></i>
                        </Col>
                    </Row>
                    <hr />
                    {isFiler &&
                        <Filter
                            name={name}
                            fromPrice={fromPrice}
                            toPrice={toPrice}
                            onSetName={setName}
                            onSetFromPirice={setFromPrice}
                            onSetToPirice={setToPrice}
                        />}
                    <Row className="justify-content-md-center">
                        {contextProduct}
                    </Row>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home
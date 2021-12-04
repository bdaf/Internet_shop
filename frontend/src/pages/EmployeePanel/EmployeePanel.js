import React, { useState } from "react";
import { Col, Row, Tab, Nav, Tabs, FloatingLabel, Form, Button } from "react-bootstrap";
import Select from 'react-select';
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import AddCategory from "./components/Category/AddCategory";
import DeleteCategory from "./components/Category/DeleteCategory";
import EditCategory from "./components/Category/EditCategory";
import Orders from "./components/Orders/Orders";
import AddProducer from "./components/Producer/AddProducer";
import DeleteProducer from "./components/Producer/DeletePoducer";
import EditProducer from "./components/Producer/EditProducer";
import AddProduct from "./components/Products/AddProduct";
import DeleteProduct from "./components/Products/DeleteProduct";
import EditProduct from "./components/Products/EditProduct";
import AddSales from "./components/Sales/AddSales";
import DeleteSales from "./components/Sales/DeleteSales";

import './EmployeePanel.css'

const EmployeePanel = () => {
    return (
        <>
            <Navbar />
            <div className="m-4">
                <Tab.Container id="left-tabs-example" defaultActiveKey="product">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="product">Produkty</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="categories">Kategorie</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="order">Zamówienia</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="producers">Producenci</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="sales">Przeceny</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="employee">Pracownicy</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="client">Klienci</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="product">
                                    <Tabs defaultActiveKey="add" id="uncontrolled-tab-example" className="mb-3">
                                        <Tab eventKey="add" title="Dodaj produkt">
                                            <AddProduct />
                                        </Tab>
                                        <Tab eventKey="edit" title="Edytuj produkt">
                                            <EditProduct />
                                        </Tab>
                                        <Tab eventKey="delate" title="Usuń produkt" >
                                            <DeleteProduct />
                                        </Tab>
                                    </Tabs>
                                </Tab.Pane>
                                <Tab.Pane eventKey="categories">
                                    <Tabs defaultActiveKey="add" id="uncontrolled-tab-example" className="mb-3">
                                        <Tab eventKey="add" title="Dodaj kategorie">
                                            <AddCategory />
                                        </Tab>
                                        <Tab eventKey="edit" title="Edytuj kategorie">
                                            <EditCategory />
                                        </Tab>
                                        <Tab eventKey="delate" title="Usuń kategorie" >
                                            <DeleteCategory />
                                        </Tab>
                                    </Tabs>
                                </Tab.Pane>
                                <Tab.Pane eventKey="order">
                                    <Orders />
                                </Tab.Pane>
                                <Tab.Pane eventKey="producers">
                                    <Tabs defaultActiveKey="add" id="uncontrolled-tab-example" className="mb-3">
                                        <Tab eventKey="add" title="Dodaj producenta">
                                            <AddProducer />
                                        </Tab>
                                        <Tab eventKey="edit" title="Edytuj producenta">
                                            <EditProducer />
                                        </Tab>
                                        <Tab eventKey="delate" title="Usuń producenta" >
                                            <DeleteProducer />
                                        </Tab>
                                    </Tabs>
                                </Tab.Pane>
                                <Tab.Pane eventKey="sales">
                                    <Tabs defaultActiveKey="add" id="uncontrolled-tab-example" className="mb-3">
                                        <Tab eventKey="add" title="Dodaj przecene">
                                            <AddSales />
                                        </Tab>
                                        <Tab eventKey="delate" title="Usuń przecene" >
                                            <DeleteSales />
                                        </Tab>
                                    </Tabs>
                                </Tab.Pane>
                                <Tab.Pane eventKey="employee">
                                    <Tabs defaultActiveKey="add" id="uncontrolled-tab-example" className="mb-3">
                                        <Tab eventKey="add" title="Dodaj pracownika">
                                            sdasd
                                        </Tab>
                                        <Tab eventKey="delate" title="Usuń pracownika" >
                                            fadfdsfdsgwethwtegefadfdsfdsgwethwtegefadfdsfdsgwethwtege
                                        </Tab>
                                    </Tabs>
                                </Tab.Pane>
                                <Tab.Pane eventKey="client">
                                    asdasdasds\
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </>
    );
}

export default EmployeePanel
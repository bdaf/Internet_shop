import React, { useState } from "react";
import { Col, Row, Tab, Nav, Tabs, FloatingLabel, Form, Button } from "react-bootstrap";
import Select from 'react-select';
import Navbar from "../../components/Navbar/Navbar";
import AddProduct from "./components/Products/AddProduct";

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
                                            fadfdsfdsgwethwtegefadfdsfdsgwethwtege
                                        </Tab>
                                        <Tab eventKey="delate" title="Usuń produkt" >
                                            fadfdsfdsgwethwtegefadfdsfdsgwethwtegefadfdsfdsgwethwtege
                                        </Tab>
                                    </Tabs>
                                </Tab.Pane>
                                <Tab.Pane eventKey="categories">
                                    asdasdasds\
                                </Tab.Pane>
                                <Tab.Pane eventKey="order">
                                    asdasdasds\
                                </Tab.Pane>
                                <Tab.Pane eventKey="producers">
                                    asdasdasds\
                                </Tab.Pane>
                                <Tab.Pane eventKey="sales">
                                    asdasdasds\
                                </Tab.Pane>
                                <Tab.Pane eventKey="employee">
                                    asdasdasds\
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
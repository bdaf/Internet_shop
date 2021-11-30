import React, { useState } from 'react';
import { Navbar, Container, Button, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { NavLink, Link } from "react-router-dom";
import cart from './cart4.svg'
import login from './box-arrow-in-right.svg'
import account from './person-circle.svg'
import logout from './box-arrow-left.svg'

const Navbars = (props) => {
    const [term, setTerm] = useState('')

    const searchHandler = () => {
        props.onSearch(term.trim())
    }

    const searchKeyHandler = (e) => {
        e.preventDefault();
        props.onSearch(term.trim())
    }

    const searchOnChangeHandler = (e) => {
        props.onSearch(e.target.value.trim())
        setTerm(e.target.value)
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">NUIT</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Strona główna</Nav.Link>
                        <Nav.Link>O nas</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/about">
                            O nas
                        </Nav.Link>
                        <Nav.Link href="/contact">
                            Kontakt
                        </Nav.Link>
                        <Nav.Link href="/faq">
                            FAQ
                        </Nav.Link>
                    </Nav>
                    {props.search ? (<>
                        <Form className="d-flex">
                            <FormControl
                                onKeyDown={e => e.key === 'Enter' && searchKeyHandler(e)}
                                onChange={e => searchOnChangeHandler(e)}
                                value={term}
                                type="Search"
                                placeholder="Nazwa produktu"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button onClick={searchHandler} variant="outline-success">Szukaj</Button>
                        </Form>
                        <div className="ms-3 vr" /> </>
                    ) : null}

                    <div className="ms-3">
                        <img src={cart} alt="cart" />
                    </div>

                    <div className="ms-3">
                        <Link to="/login"><img src={login} alt="login" /></Link>
                    </div>
                    <div className="ms-3">
                        <img src={account} alt="account" />
                    </div>

                    <div className="ms-3">
                        <img src={logout} alt="logout" />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default Navbars;
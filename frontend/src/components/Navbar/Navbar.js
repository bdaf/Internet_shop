import React, { useContext, useState } from 'react';
import { Navbar, Container, Button, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { NavLink, Link } from "react-router-dom";
import cart from './cart4.svg'
import login from './box-arrow-in-right.svg'
import account from './person-circle.svg'
import logout from './box-arrow-left.svg'
import AuthContext from '../../store/auth-context';

import styles from './Navbar.module.css'

const Navbars = (props) => {
    const authCtx = useContext(AuthContext)

    let productList = []
    if (localStorage.cartList) {
        productList = JSON.parse(localStorage.cartList);
    }

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

    const logoutHandler = () => {
        authCtx.logout()
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand> <h2>NU<span style={{ color: "red" }} >IT</span></h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link><NavLink className={({ isActive }) => (isActive ? `${styles.menuItemActive}` : `${styles.menuItem}`)} to="/">Strona główna</NavLink></Nav.Link>
                        {(authCtx.role === "WORKER" || authCtx.role === "ADMIN") &&
                            <Nav.Link >
                                <NavLink className={({ isActive }) => (isActive ? `${styles.menuItemActive}` : `${styles.menuItem}`)} to="/panel">Panel</NavLink>
                            </Nav.Link>}
                        <Nav.Link>
                            <NavLink className={({ isActive }) => (isActive ? `${styles.menuItemActive}` : `${styles.menuItem}`)} to="/about">O nas</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink className={({ isActive }) => (isActive ? `${styles.menuItemActive}` : `${styles.menuItem}`)} to="/contact">Kontakt</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink className={({ isActive }) => (isActive ? `${styles.menuItemActive}` : `${styles.menuItem}`)} to="/faq">FAQ</NavLink>
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
                        <Link to="/cart"><img src={cart} alt="cart" /></Link>
                        ({productList.length})
                    </div>

                    {!authCtx.isLoggedIn && <>
                        <div className="ms-3">
                            <Link to="/login"><img src={login} alt="login" /></Link>
                        </div>
                    </>}
                    {authCtx.isLoggedIn && <>
                        <div className="ms-3">
                            <img src={account} alt="account" />
                        </div>

                        <div className="ms-3">
                            <img onClick={() => logoutHandler()} src={logout} alt="logout" />
                        </div>
                    </>}
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default Navbars;
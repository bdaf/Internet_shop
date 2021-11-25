import { Navbar, Container, Button, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
import cart from './cart4.svg'
import login from './box-arrow-in-right.svg'
import account from './person-circle.svg'
import logout from './box-arrow-left.svg'

const Navbars = (props) => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
                    </Nav>
                    {props.search ? (
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    ) : null}

                    <div className="ms-3">
                        <img src={cart} alt="cart" />
                    </div>

                    <div className="ms-3">
                        <Link to="/login"><img src={login} alt="login" /></Link>
                        <Outlet />
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
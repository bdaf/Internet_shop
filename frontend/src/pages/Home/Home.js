import { Row, Col } from 'react-bootstrap';

import Navbar from "../../components/Navbar/Navbar";
import Offer from "./components/Offer/Offer";
import Product from "./components/Product/Product";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Offer />
            <div className="">
                <Row className="justify-content-md-center">
                    <Col md="auto"><Product /></Col>
                    <Col md="auto"><Product /></Col>
                    <Col md="auto"><Product /></Col>
                    <Col md="auto"><Product /></Col>
                    <Col md="auto"><Product /></Col>
                    <Col md="auto"><Product /></Col>
                    <Col md="auto"><Product /></Col>
                    <Col md="auto"><Product /></Col>
                    <Col md="auto"><Product /></Col>
                    <Col md="auto"><Product /></Col>
                    <Col md="auto"><Product /></Col>
                    <Col md="auto"><Product /></Col>
                    <Col md="auto"><Product /></Col>
                    <Col md="auto"><Product /></Col>
                </Row>
            </div>
        </div>
    );
}

export default Home
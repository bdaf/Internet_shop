import Navbars from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import { Row, Col, Stack, Form, FloatingLabel, Button, Alert, CloseButton } from 'react-bootstrap';

import styles from './Orders..module.css';
import AlertAboutFunctions from "../AlertAboutFunctions";
import OrderExample from "../OrderExample";

const Orders = (props) => {
    let columnsList = [1,2,3,4,5,6,7,8,9,10,11,12];

    return (
        <>
            <Navbars />
            <div className={`${styles.orderContainer} text-center`}>
                <Row><AlertAboutFunctions /></Row>
                <hr /><h2>Twoje zamówienia</h2><hr />
                <Row>
                    {columnsList.map(function(obj){
                        return <Col key={obj} className="text-center colOrder"><OrderExample id={obj} /></Col>;
                    })}
                </Row>
            </div>
            <Footer />
        </>
    );
}

export default Orders
import { Card, Button, Col, Row } from 'react-bootstrap';
import axios from 'axios';

import styles from './Order.module.css'

const Order = (props) => {
    return (<>
        <Card className={`${styles.order} mt-3 mb-3`} style={{ width: '20rem' }}>
            <Card.Body>
                <Card.Title>
                    <div className={`d-flex justify-content-end ${styles.sizeID}`}>{props.id}</div>
                    <div className="d-flex justify-content-center" style={{fontSize: "2rem"}} >{props.name}</div>
                </Card.Title>
                <Card.Text>
                    <p>Dostawca: {props.delivery}</p>
                    <p>Status: <span>{props.status}</span></p>
                    <p>Kwota: {props.cost} PLN</p>
                </Card.Text>
                <div className="d-flex justify-content-center" >
                    <Button variant="outline-danger" className="ps-5 pe-5">Szczegóły zamówienia</Button>
                </div>
            </Card.Body>
        </Card>
    </>);
}

export default Order
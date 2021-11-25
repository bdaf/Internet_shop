import { Card, Button } from 'react-bootstrap';

import monitor from './Monitor.jpg'

import styles from './Product.module.css'


const Product = (props) => {

    const showDetailsHandler = () => {
        console.log("show")
    }

    return (
        <Card onClick={showDetailsHandler} className={`${styles.product} mt-3 mb-3`} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={monitor} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Dodaj do koszyka</Button>
            </Card.Body>
        </Card>
    );
}

export default Product;
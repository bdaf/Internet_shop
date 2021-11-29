import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import monitor from './Monitor.jpg'

import styles from './Product.module.css'

const Product = (props) => {
    const navigate = useNavigate();

    const showDetailsHandler = () => {
        navigate(`/detail/${props.id}`);
    }

    return (
        <Card onClick={showDetailsHandler} className={`${styles.product} mt-3 mb-3`} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={monitor} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    <p>Cena: {props.price.toFixed(2)} PLN</p>
                    {props.description}...
                    <div className="d-flex justify-content-md-center mt-2">Zobacz więcej</div>
                </Card.Text>
                <Button variant="outline-danger">Dodaj do koszyka</Button>
            </Card.Body>
        </Card>
    );
}

export default Product;
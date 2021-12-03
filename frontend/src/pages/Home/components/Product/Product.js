import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import monitor from './Monitor.jpg'

import styles from './Product.module.css'
import { useDispatchCart } from "../../../../components/Cart";

const Product = (props) => {

  const dispatch = useDispatchCart();

  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
  };
    const navigate = useNavigate();

    const showDetailsHandler = () => {
        if (props.panel)
        props.onId(props.id)
        else
        navigate(`/detail/${props.id}`);
    }

    return (
        <Card className={`${styles.product} mt-3 mb-3`} style={{ width: '18rem' }}>
            <Card.Img onClick={showDetailsHandler} variant="top" src={monitor} />
            <Card.Body>
                <Card.Title onClick={showDetailsHandler}>{props.name}</Card.Title>
                <Card.Text onClick={showDetailsHandler}>
                    <p>Cena: {props.price.toFixed(2)} PLN</p>
                    {props.description}...
                    <div className="d-flex justify-content-center mt-2">Zobacz więcej</div>
                </Card.Text>
                <div className="d-flex justify-content-end" >
                    {props.panel ? <Button variant="outline-danger" onClick={showDetailsHandler} >{props.action}</Button> : (<Button variant="outline-danger" onClick={() => addToCart(props)}>Dodaj do koszyka</Button>)}
                </div>
            </Card.Body>
        </Card>
    );
}

export default Product;
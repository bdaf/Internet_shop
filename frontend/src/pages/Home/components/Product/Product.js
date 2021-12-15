import { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import CartContext from '../../../../store/cart-context';
import absencePhoto from './absencePhoto.svg'

import styles from './Product.module.css'

const Product = (props) => {
    const cartCtx = useContext(CartContext)

    const addToCartHandler = (item) => {
        cartCtx.addItem(item)
    }

    const navigate = useNavigate();

    const showDetailsHandler = () => {
        if (props.panel)
        props.onId(props.id)
        else
        navigate(`/detail/${props.id}`);
    }

    return (
        <Card className={`${styles.product} mt-3 mb-3`} style={{ width: '18rem', height: '38rem'}}>
            <Card.Img onClick={showDetailsHandler} style={{ height: '18rem' }} variant="top" src={props.gallery.length > 0 ? props.gallery[0].url : absencePhoto} />
            <Card.Body>
                <Card.Title onClick={showDetailsHandler}>{props.name}</Card.Title>
                <Card.Text onClick={showDetailsHandler}>
                    <p>Cena: {props.price.toFixed(2)} PLN</p>
                    {props.description}...
                    <div className="d-flex justify-content-center mt-2">Zobacz więcej</div>
                </Card.Text>
                <div className="d-flex justify-content-end" >
                    {props.panel ? <Button variant="outline-danger" onClick={showDetailsHandler} >{props.action}</Button> : (<Button variant="outline-danger" onClick={() => addToCartHandler(props.item)}>Dodaj do koszyka</Button>)}
                </div>
            </Card.Body>
        </Card>
    );
}

export default Product;
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import styles from './Sales.module.css'



const Sale = (props) => {

    return (<>
        <Card className={`${styles.sales} mt-3 mb-3`} style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title className="d-flex justify-content-center" >Przecena {props.discount}%</Card.Title>
                <Card.Text>
                    <p>Data rozpoczęcia: {props.start}</p>
                    <p>Data zakończenia: {props.end}</p>
                </Card.Text>
                <div className="d-flex justify-content-end" >
                    <Button variant="outline-danger" onClick={() => props.onDelete(props.id)}>Usuń</Button>
                </div>
            </Card.Body>
        </Card>
    </>);
}

export default Sale
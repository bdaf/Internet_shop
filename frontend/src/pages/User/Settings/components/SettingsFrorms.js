import { Row, Col, Container, ButtonGroup, ButtonToolbar, Stack, Form, FloatingLabel, Button, Alert, CloseButton } from 'react-bootstrap';
import styles from './SettingsForms.module.css';

const SettingsForms = () => {

    return (
        <>
            <Container fluid style={{"width": "60%"}}>
            <Row className={`${styles.scol}`}>
                <Col  ><span className={`${styles.slabel}`}>Motyw na stronie: </span> </Col>
                <Col>
                    <Button className={`${styles.sbutton}`} variant="outline-secondary">Light</Button>
                    <Button className={`${styles.sbutton}`} variant="outline-dark">Dark</Button>
                </Col>
            </Row>
            <Row className={`${styles.scol}`}>
                <Col  ><span className={`${styles.slabel}`}>Automatycznie porównuj ceny: </span> </Col>
                <Col>
                <Button className={`${styles.sbutton}`} variant="outline-success">Tak</Button>
                    <Button className={`${styles.sbutton}`} variant="outline-danger">Nie</Button>
                </Col>
            </Row>
            <Row className={`${styles.scol}`}>
                <Col><span className={`${styles.slabel}`}>Wysyłaj e-mail'e o nowościach: </span> </Col>
                <Col>
                    <Button className={`${styles.sbutton}`} variant="outline-success">Tak</Button>
                    <Button className={`${styles.sbutton}`} variant="outline-danger">Nie</Button>
                </Col>
            </Row>
            <Row className={`${styles.scol}`}>
                <Col  ><span className={`${styles.slabel}`}>Język na stronie: </span> </Col>
                <Col>
                    <Button className={`${styles.sbutton}`} variant="outline-danger">Polski</Button>
                    <Button className={`${styles.sbutton}`} variant="outline-warning">English</Button>
                    <Button className={`${styles.sbutton}`} variant="outline-success">Español</Button>
                </Col>
            </Row>
            <Row className={`${styles.scol}`}>
                <Col  ><span className={`${styles.slabel}`}>Podpowiadaj produkty na podstawie historii zamówień: </span> </Col>
                <Col>
                    <Button className={`${styles.sbutton}`} variant="outline-success">Tak</Button>
                    <Button className={`${styles.sbutton}`} variant="outline-danger">Nie</Button>
                </Col>
            </Row>
            <Row  className={`${styles.scol}`}>
                <Col ><span className={`${styles.slabel}`}>Automatycznie pobieraj pieniądze z mojego konta bankowego co miesiąc jako darowiznę: </span> </Col>
                <Col><Button className={`${styles.sbutton}`} variant="outline-success">Tak</Button></Col>
            </Row>
            <Row><Col><Button className={`${styles.sbutton} ps-4 pe-4`} variant="outline-primary" type="submit" style={{"margin-top": "20px"}}>
                                Zapisz
            </Button></Col></Row>
            </Container>
        </>
    );
}

export default SettingsForms
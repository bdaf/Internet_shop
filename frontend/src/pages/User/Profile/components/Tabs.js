
import { useEffect } from 'react';
import { Card, ListGroup, Image, Button, Col, Row, FloatingLabel, Form } from 'react-bootstrap';
import styles from './Tabs.module.scss'

const Tabs = () => {

    useEffect(() => {
        console.log("open")
    }, [])

    return (
        <>
            <div className={styles.tabs} style={{ height: "100%" }}>
                <input type="radio" id="tab1" name="tab-control" />
                <input type="radio" id="tab2" name="tab-control" />
                <input type="radio" id="tab3" name="tab-control" />
                <input type="radio" id="tab4" name="tab-control" />
                <ul>
                    <li title="Returns"><label for="tab1" role="button"><svg viewBox="0 0 24 24">
                        <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
                    </svg><br /><span>Profil</span></label></li>

                    <li title="Delivery Contents"><label for="tab2" role="button"><svg viewBox="0 0 24 24"><path d="M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z" />
                    </svg><br /><span>Lista zakupów</span></label></li>
                    <li title="Features"><label for="tab3" role="button"><svg viewBox="0 0 24 24"><path d="M14,2A8,8 0 0,0 6,10A8,8 0 0,0 14,18A8,8 0 0,0 22,10H20C20,13.32 17.32,16 14,16A6,6 0 0,1 8,10A6,6 0 0,1 14,4C14.43,4 14.86,4.05 15.27,4.14L16.88,2.54C15.96,2.18 15,2 14,2M20.59,3.58L14,10.17L11.62,7.79L10.21,9.21L14,13L22,5M4.93,5.82C3.08,7.34 2,9.61 2,12A8,8 0 0,0 10,20C10.64,20 11.27,19.92 11.88,19.77C10.12,19.38 8.5,18.5 7.17,17.29C5.22,16.25 4,14.21 4,12C4,11.7 4.03,11.41 4.07,11.11C4.03,10.74 4,10.37 4,10C4,8.56 4.32,7.13 4.93,5.82Z" />
                    </svg><br /><span>Opinie</span></label></li>
                    <li title="Shipping"><label for="tab4" role="button"><svg viewBox="0 0 24 24">
                        <path d="M3,4A2,2 0 0,0 1,6V17H3A3,3 0 0,0 6,20A3,3 0 0,0 9,17H15A3,3 0 0,0 18,20A3,3 0 0,0 21,17H23V12L20,8H17V4M10,6L14,10L10,14V11H4V9H10M17,9.5H19.5L21.47,12H17M6,15.5A1.5,1.5 0 0,1 7.5,17A1.5,1.5 0 0,1 6,18.5A1.5,1.5 0 0,1 4.5,17A1.5,1.5 0 0,1 6,15.5M18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5Z" />
                    </svg><br /><span>Adres</span></label></li>
                </ul>

                <div className={styles.slider}><div className={styles.indicator}></div></div>
                <div className={styles.content}>
                    <section>
                        <h2>Profil</h2>
                        <Row className="mb-2">
                            <h5>Twoje dane</h5>
                            <Col xs={12} md={6}>
                                <FloatingLabel className="mb-1" controlId="floatingPassword" label="Imię">
                                    <Form.Control type="text" placeholder="Imię" required />
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} md={6}>
                                <FloatingLabel className="mb-1" controlId="floatingPassword" label="Nazwisko">
                                    <Form.Control type="text" placeholder="Nazwisko" required />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <FloatingLabel className="mb-1" controlId="floatingPassword" label="Telefon">
                                    <Form.Control type="text" placeholder="Telefon" required />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <div className="d-flex justify-content-end">
                            <Button className="ps-4 pe-4" variant="outline-primary" type="submit">
                                Zapisz
                            </Button>
                        </div>
                        <hr />
                        <h5>Zdjęcie</h5>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Control type="file" />
                        </Form.Group>
                        <div className="d-flex justify-content-end">
                            <Button className="ps-4 pe-4" variant="outline-primary" type="submit">
                                Zapisz
                            </Button>
                        </div>
                        <hr />
                        <Row className="mb-2">
                            <h5>Zmień hasło</h5>
                            <Col xs={12} md={6}>
                                <FloatingLabel className="mb-1" controlId="floatingPassword" label="Nowe hasło">
                                    <Form.Control type="password" placeholder="Nowe hasło" required />
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} md={6}>
                                <FloatingLabel className="mb-1" controlId="floatingPassword" label="Potwierdź hasło">
                                    <Form.Control type="password" placeholder="Potwierdź hasło" required />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <FloatingLabel className="mb-1" controlId="floatingPassword" label="Stare hasło">
                                    <Form.Control type="password" placeholder="Stare hasło" required />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <div className="d-flex justify-content-end">
                            <Button className="ps-4 pe-4" variant="outline-primary" type="submit">
                                Zapisz
                            </Button>
                        </div>
                    </section>
                    <section>
                        <h2>Lista zakupów</h2>
                        <Card >
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <div className='d-flex justify-content-around'>
                                        <Image width={'10%'} src="https://www.techinn.com/f/13823/138239099/logitech-mx-palm-rest-podk%C5%82adka-pod-mysz.jpg" rounded />
                                        <span className='align-self-center'>MX PALM REST</span>
                                        <div className='align-self-center'>
                                            <p>Cena</p>
                                            <span>109.99 PLN</span>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className='d-flex justify-content-around'>
                                        <Image width={'10%'} src="https://satysfakcja.stati.pl/allegro_new//RTV/audio/JBL//T220TWSPNK/f1-sluchawki-bezprzewodowe-JBL-Tune-T220TWS-rozowe.jpg" rounded />
                                        <span className='align-self-center'>JBL Tune T220</span>
                                        <div className='align-self-center'>
                                            <p>Cena</p>
                                            <span>149.99 PLN</span>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className='d-flex justify-content-around'>
                                        <Image width={'10%'} src="https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/31/3126108/Mysz-APPLE-Magic-Mouse-bok-skos.jpg" rounded />
                                        <span className='align-self-center'>Mysz Apple</span>
                                        <div className='align-self-center'>
                                            <p>Cena</p>
                                            <span>109.99 PLN</span>
                                        </div>
                                    </div></ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </section>
                    <section>
                        <h2>Opinie</h2>
                        <Card >
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <div className='d-flex justify-content-around'>
                                        <Image width={'10%'} src="https://www.techinn.com/f/13823/138239099/logitech-mx-palm-rest-podk%C5%82adka-pod-mysz.jpg" rounded />
                                        <span className='align-self-center'>MX PALM REST</span>
                                        <div className='align-self-center'>
                                            <Button variant='outline-success' className='ps-4 pe-4'>Oceń</Button>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className='d-flex justify-content-around'>
                                        <Image width={'10%'} src="https://satysfakcja.stati.pl/allegro_new//RTV/audio/JBL//T220TWSPNK/f1-sluchawki-bezprzewodowe-JBL-Tune-T220TWS-rozowe.jpg" rounded />
                                        <span className='align-self-center'>JBL Tune T220</span>
                                        <div className='align-self-center'>
                                            <Button variant='outline-success' className='ps-4 pe-4'>Oceń</Button>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className='d-flex justify-content-around'>
                                        <Image width={'10%'} src="https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/31/3126108/Mysz-APPLE-Magic-Mouse-bok-skos.jpg" rounded />
                                        <span className='align-self-center'>Mysz Apple</span>
                                        <div className='align-self-center'>
                                            <Button variant='outline-success' className='ps-4 pe-4'>Oceń</Button>
                                        </div>
                                    </div></ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </section>
                    <section>
                        <h2>Adres</h2>
                        <Row className="mb-2">
                            <Col xs={12} md={6}>
                                <FloatingLabel className="mb-1" controlId="floatingPassword" label="Kraj">
                                    <Form.Control type="text" placeholder="Kraj" required />
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} md={6}>
                                <FloatingLabel className="mb-1" controlId="floatingPassword" label="Miasto">
                                    <Form.Control type="text" placeholder="Miasto" required />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col xs={12} md={4}>
                                <FloatingLabel className="mb-1" controlId="floatingPassword" label="Ulica">
                                    <Form.Control type="text" placeholder="Ulica" required />
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} md={4}>
                                <FloatingLabel className="mb-1" controlId="floatingPassword" label="Numer mieszkania">
                                    <Form.Control type="text" placeholder="Numer mieszkania" required />
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} md={4}>
                                <FloatingLabel controlId="floatingPassword" label="Kod pocztowy">
                                    <Form.Control type="text" placeholder="Kod pocztowy" required />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <div className="d-flex justify-content-end">
                            <Button className="ps-4 pe-4" variant="outline-primary" type="submit">
                                Zmień adres
                            </Button>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Tabs;
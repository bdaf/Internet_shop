import { Row, Col, FloatingLabel, Form, InputGroup, FormControl } from "react-bootstrap";

const Filter = (props) => {
    return (
        <div className="m-3">
            <h4>Filtry</h4>
            <hr />
            <Form>
                <Row className="mb-2">
                    <Col xs={12} md={6}>
                        <FloatingLabel className="mb-1" controlId="floatingPassword" label="Nazwa">
                            <Form.Control type="text" placeholder="Nazwa" onChange={(e) => props.onSetName(e.target.value)} value={props.name}/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="mb-2">
                    <h5>Cena</h5>
                    <Col xs={4}>
                        <InputGroup>
                            <FormControl
                                placeholder="Od"
                                aria-describedby="basic-addon2"
                                type="number"
                                onChange={(e) => props.onSetFromPirice(e.target.value)}
                                value={props.fromPrice}
                                min="0"
                            />
                            <InputGroup.Text id="basic-addon2">PLN</InputGroup.Text>
                        </InputGroup>
                    </Col>
                    ---
                    <Col xs={4}>
                        <InputGroup>
                            <FormControl
                                placeholder="Do"
                                aria-describedby="basic-addon2"
                                type="number"
                                onChange={(e) => props.onSetToPirice(e.target.value)}
                                value={props.toPrice}
                                min="0"
                            />
                            <InputGroup.Text id="basic-addon2">PLN</InputGroup.Text>
                        </InputGroup>
                    </Col>
                </Row>
            </Form>
            <hr />
        </div>
    );
}

export default Filter
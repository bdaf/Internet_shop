import React, { useContext, useState } from "react";
import axios from "axios";
import { Col, Row, FloatingLabel, Form, Button, Alert } from "react-bootstrap";
import AuthContext from "../../../../store/auth-context";


const AddProducer = (props) => {
    const authCtx = useContext(AuthContext)
    const authJWT = {
        headers: {
            'Authorization': `Bearer ${authCtx.token}`
        }
    }
    const [name, setName] = useState('')
    const [nip, setNip] = useState('')

    const [feedback, setFeedback] = useState(null)

    const addProducerHandler = async (e) => {
        e.preventDefault();

        const newProducer =
        {
            nameOfCompany: name,
            nip: nip
        }
        console.log(newProducer)

        await axios.post('http://localhost:8888/api/producers/save', newProducer,authJWT).then((response) => {
            props.onChange((prevState) => !prevState)
            if (response.status === 200)
                setFeedback(
                    <Alert variant="success">
                        Producent został dodany!
                    </Alert>
                )
            else
                setFeedback(
                    <Alert variant="danger">
                        Nie udało się dodać producenta!
                    </Alert>
                )
        }).catch((e) => {
            console.log(e)
            setFeedback(
                <Alert variant="danger">
                    Nie udało się dodać producenta!
                </Alert>
            )
        })
    }

    return (
        <div className="m-3">
            {feedback}
            <Form onSubmit={(e) => addProducerHandler(e)}>
                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
                        <FloatingLabel controlId="floatingPassword" label="Nazwa producenta">
                            <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Nazwa producenta" required/>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} controlId="formGridNip">
                        <FloatingLabel controlId="floatingNip" label="NIP">
                            <Form.Control onChange={(e) => setNip(e.target.value)} type="text" placeholder="NIP" required/>
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <div className="d-flex justify-content-end">
                        <Button className="ps-4 pe-4" variant="outline-primary" type="submit">
                            Dodaj producenta
                        </Button>
                    </div>
            </Form>
        </div>
    );
}

export default AddProducer
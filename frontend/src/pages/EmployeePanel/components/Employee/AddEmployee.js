import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Row, Col, Form, FloatingLabel, Button, Alert } from "react-bootstrap";
import AuthContext from '../../../../store/auth-context';

const AddEmployee = (props) => {
    // Costumer
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')

    // Address
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [postCode, setPostCode] = useState('');

    const [feedback, setFeedback] = useState(null)

    const authCtx = useContext(AuthContext)
    const authJWT = {
        headers: {
            'Authorization': `Bearer ${authCtx.token}`
        }
    }

    const hideFeedback = () => {
        setFeedback(null)
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        console.log('Email: ' + email);
        console.log('Password: ' + password);
        console.log('Confirm Password: ' + confirmPassword);
        const newEmployee = {
            userName: email,
                name: name,
            surname: surname,
            email: email,
            password: password,
            phoneNumber: phone,
            houseNumber: houseNumber,
            street: street,
            country: country,
            townName: city,
            postCode: postCode,
            role: "WORKER"
        }
        await axios.post("http://localhost:8888/worker/registration", newEmployee, authJWT).then((response) => {
            props.onChange((prev) => !prev)
            if (response.status === 200)
                setFeedback(
                    <Alert variant="success">
                        Konto dla pracownika {newEmployee.name} zostało utworzone!
                        <p>Na E-mail'u: {newEmployee.email} wysłano link z aktywacją konta.</p>
                    </Alert>
                )
            else
                setFeedback(
                    <Alert variant="danger">
                        Nie udało się stworzyć konta dla pracownika {newEmployee.name}!
                    </Alert>
                )
        }).catch(() => {
            setFeedback(
                <Alert variant="danger">
                    Nie udało się stworzyć konta dla pracownika {newEmployee.name}!
                </Alert>
            )
            })
        setName('')
        setSurname('')
        setPhone('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setCountry('')
        setCity('')
        setStreet('')
        setHouseNumber('')
        setPostCode('')

        setTimeout(hideFeedback, 1000 * 60)

    };

    return (
        <>
            <Form onSubmit={(e) => submitHandler(e)}>
                {feedback}
                <h4>Dane pracownika</h4>
                <hr />
                <Row className="mb-2">
                    <Col xs={12} md={6}>
                        <FloatingLabel className="mb-1" controlId="floatingPassword" label="Imię">
                            <Form.Control type="text" placeholder="Imię" onChange={(e) => setName(e.target.value)} value={name} required/>
                        </FloatingLabel>
                    </Col>
                    <Col xs={12} md={6}>
                        <FloatingLabel className="mb-1" controlId="floatingPassword" label="Nazwisko">
                            <Form.Control type="text" placeholder="Nazwisko" onChange={(e) => setSurname(e.target.value)} value={surname} required/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col xs={12} md={4}>
                        <FloatingLabel controlId="floatingPassword" label="Numer telefonu">
                            <Form.Control type="text" placeholder="Numer telefonu" onChange={(e) => setPhone(e.target.value)} value={phone} required/>
                        </FloatingLabel>
                    </Col>
                    <Col xs={12} md={4}>
                        <FloatingLabel className="mb-1" controlId="floatingPassword" label="E-mail">
                            <Form.Control type="text" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} value={email} required/>
                        </FloatingLabel>
                    </Col>
                    <Col xs={12} md={4}>
                        <FloatingLabel className="mb-1" controlId="floatingPassword" label="Hasło">
                            <Form.Control type="text" placeholder="Hasło" onChange={(e) => setPassword(e.target.value)} value={password} required/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="mb-3">

                    <Col xs={12} md={6}>
                        <FloatingLabel className="mb-1" controlId="floatingPassword" label="Potwiedź hasło">
                            <Form.Control type="text" placeholder="Potwiedź hasło" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} required/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <h4>Adres</h4>
                <hr />
                <Row className="mb-2">
                    <Col xs={12} md={6}>
                        <FloatingLabel className="mb-1" controlId="floatingPassword" label="Kraj">
                            <Form.Control type="text" placeholder="Kraj" onChange={(e) => setCountry(e.target.value)} value={country} required/>
                        </FloatingLabel>
                    </Col>
                    <Col xs={12} md={6}>
                        <FloatingLabel className="mb-1" controlId="floatingPassword" label="Miasto">
                            <Form.Control type="text" placeholder="Miasto" onChange={(e) => setCity(e.target.value)} value={city} required/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col xs={12} md={4}>
                        <FloatingLabel className="mb-1" controlId="floatingPassword" label="Ulica">
                            <Form.Control type="text" placeholder="Ulica" onChange={(e) => setStreet(e.target.value)} value={street} required/>
                        </FloatingLabel>
                    </Col>
                    <Col xs={12} md={4}>
                        <FloatingLabel className="mb-1" controlId="floatingPassword" label="Numer mieszkania">
                            <Form.Control type="text" placeholder="Numer mieszkania" onChange={(e) => setHouseNumber(e.target.value)} value={houseNumber} required/>
                        </FloatingLabel>
                    </Col>
                    <Col xs={12} md={4}>
                        <FloatingLabel controlId="floatingPassword" label="Kod pocztowy">
                            <Form.Control type="text" placeholder="Kod pocztowy" onChange={(e) => setPostCode(e.target.value)} value={postCode} required/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <div className="d-flex justify-content-end">
                    <Button className="ps-4 pe-4" variant="outline-primary" type="submit">
                        Dodaj pracownika
                    </Button>
                </div>
            </Form>
        </>
    );
}

export default AddEmployee
import React, { useState } from 'react';

import styles from './Register.module.scss';

const Register = () => {

    // Costumer
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')

    const [isStep2, setIsStep2] = useState(false);

    // Address
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [postCode, setPostCode] = useState('');

    // TODO: add input company
    const [hasCompony, setHasCompony] = useState(false);

    const nameHandler = (event) => {
        setName(event.target.value);
    };

    const surnameHandler = (event) => {
        setSurname(event.target.value);
    };

    const phoneHandler = (event) => {
        setPhone(event.target.value);
    };
    const emailHandler = (event) => {
        setEmail(event.target.value);
    };

    const confirmPasswordHandler = (event) => {
        setConfirmPassword(event.target.value);
    };

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    };

    const countryHandler = (event) => {
        setCountry(event.target.value);
    };

    const cityHandler = (event) => {
        setCity(event.target.value);
    };

    const streetHandler = (event) => {
        setStreet(event.target.value);
    };

    const houseNumberHandler = (event) => {
        setHouseNumber(event.target.value);
    };

    const postCodeHandler = (event) => {
        setPostCode(event.target.value);
    };



    const submitHandler = (event) => {
        event.preventDefault();

        console.log('Email: ' + email);
        console.log('Password: ' + password);
        console.log('Confirm Password: ' + confirmPassword);

        setName('');
        setSurname('');
        setPhone('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    const registerContext = !isStep2 ? (
        <>
            <div className={styles.floatingLabel}>
                <input placeholder="Imię" type="login" id="login" value={name} onChange={nameHandler} autoComplete="off" />
                <label htmlFor="login">Imię </label>
                <div className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
            </div>
            <div className={styles.floatingLabel}>
                <input placeholder="Nazwisko" type="login" id="login" value={surname} onChange={surnameHandler} autoComplete="off" />
                <label htmlFor="login">Nazwisko </label>
                <div className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
            </div>
            <div className={styles.floatingLabel}>
                <input placeholder="Numer telefonu" type="login" id="login" value={phone} onChange={phoneHandler} autoComplete="off" />
                <label htmlFor="login">Numer telefonu </label>
                <div className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
            </div>

            <div className={styles.floatingLabel}>
                <input placeholder="E-mail" type="email" id="email" value={email} onChange={emailHandler} autoComplete="off" />
                <label htmlFor="email">E-mail: </label>
                <div className={styles.icon}>
                    <svg enableBackground="new 0 0 100 100" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(0 -952.36)">
                            <path d="m17.5 977c-1.3 0-2.4 1.1-2.4 2.4v45.9c0 1.3 1.1 2.4 2.4 2.4h64.9c1.3 0 2.4-1.1 2.4-2.4v-45.9c0-1.3-1.1-2.4-2.4-2.4h-64.9zm2.4 4.8h60.2v1.2l-30.1 22-30.1-22v-1.2zm0 7l28.7 21c0.8 0.6 2 0.6 2.8 0l28.7-21v34.1h-60.2v-34.1z" />
                        </g>
                        <rect className={styles.st0} style={{ fill: 'none' }} width="100" height="100" />
                    </svg>
                </div>
            </div>
            <div className={styles.floatingLabel}>
                <input placeholder="Hasło" type="password" id="password" value={password} onChange={passwordHandler} autoComplete="off" />
                <label htmlFor="password">Hasło: </label>
                <div className={styles.icon}>
                    <svg enableBackground="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect className={styles.st0} style={{ fill: 'none' }} width="24" height="24" />
                        <path className={styles.st1} style={{ fill: '#010101' }} d="M19,21H5V9h14V21z M6,20h12V10H6V20z" />
                        <path className={styles.st1} style={{ fill: '#010101' }} d="M16.5,10h-1V7c0-1.9-1.6-3.5-3.5-3.5S8.5,5.1,8.5,7v3h-1V7c0-2.5,2-4.5,4.5-4.5s4.5,2,4.5,4.5V10z" />
                        <path className={styles.st1} style={{ fill: '#010101' }} d="m12 16.5c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5zm0-2c-0.3 0-0.5 0.2-0.5 0.5s0.2 0.5 0.5 0.5 0.5-0.2 0.5-0.5-0.2-0.5-0.5-0.5z" />
                    </svg>
                </div>
            </div>
            <div className={styles.floatingLabel}>
                <input placeholder="Potwierdź hasło" type="password" id="confirmPassword" value={confirmPassword} onChange={confirmPasswordHandler} autoComplete="off" />
                <label htmlFor="confirmPassword">Potwierdź hasło: </label>
                <div className={styles.icon}>
                    <svg enableBackground="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect className={styles.st0} style={{ fill: 'none' }} width="24" height="24" />
                        <path className={styles.st1} style={{ fill: '#010101' }} d="M19,21H5V9h14V21z M6,20h12V10H6V20z" />
                        <path className={styles.st1} style={{ fill: '#010101' }} d="M16.5,10h-1V7c0-1.9-1.6-3.5-3.5-3.5S8.5,5.1,8.5,7v3h-1V7c0-2.5,2-4.5,4.5-4.5s4.5,2,4.5,4.5V10z" />
                        <path className={styles.st1} style={{ fill: '#010101' }} d="m12 16.5c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5zm0-2c-0.3 0-0.5 0.2-0.5 0.5s0.2 0.5 0.5 0.5 0.5-0.2 0.5-0.5-0.2-0.5-0.5-0.5z" />
                    </svg>
                </div>
            </div>
            <button className={styles.action} type="button" onClick={() => { setIsStep2((prevState) => !prevState) }}>Dalej</button>
        </>
    ) : (
        <>
            <div className={styles.floatingLabel}>
                <input placeholder="Kraj" type="country" id="country" value={country} onChange={countryHandler} autoComplete="off" />
                <label htmlFor="country">Kraj </label>
                <div className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
            </div>
            <div className={styles.floatingLabel}>
                <input placeholder="Miasto" type="city" id="city" value={city} onChange={cityHandler} autoComplete="off" />
                <label htmlFor="city">Miasto </label>
                <div className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
            </div>
            <div className={styles.floatingLabel}>
                <input placeholder="Ulica" type="street" id="street" value={street} onChange={streetHandler} autoComplete="off" />
                <label htmlFor="street">Ulica </label>
                <div className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
            </div>
            <div className={styles.floatingLabel}>
                <input placeholder="Numer mieszkania" type="houseNumber" id="houseNumber" value={houseNumber} onChange={houseNumberHandler} autoComplete="off" />
                <label htmlFor="houseNumber">Numer mieszkania </label>
                <div className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
            </div>
            <div className={styles.floatingLabel}>
                <input placeholder="Kod pocztowy" type="postCode" id="postCode" value={postCode} onChange={postCodeHandler} autoComplete="off" />
                <label htmlFor="postCode">Kod pocztowy </label>
                <div className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
            </div>
            <div>
                <button className="ms-5 me-2" type="button" onClick={() => { setIsStep2((prevState) => !prevState) }}>Wróć</button>
                <button className={styles.action} type="submit">Zarejestruj się</button>
            </div>
        </>
    );


    return (
        <div className={styles.login}>
            <div className={styles.session}>
                <div className={styles.left}>
                </div>
                <form onSubmit={submitHandler}>
                    <h4>We are <span>NUVA</span></h4>
                    <p>Załóż nowe konto</p>
                    {registerContext}
                </form>
            </div>
        </div>
    );
}

export default Register;
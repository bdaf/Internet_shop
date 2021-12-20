import { Row, Col, Stack, Form, FloatingLabel, Button, Alert, CloseButton } from 'react-bootstrap';

import Footer from "../../../components/Footer/Footer";
import Navbars from "../../../components/Navbar/Navbar";
import AlertAboutFunctions from "../AlertAboutFunctions";
import SettingsForms from "./components/SettingsFrorms";

import styles from './Settings.module.css';
const Settings = () => {

    return (
        <>
            <Navbars />
            <div className={`${styles.settingsContainer} text-center`}>
                <Row><AlertAboutFunctions /></Row>
                <hr /> <h2>Ustawienia</h2> <hr />
                <SettingsForms  style={{"max-width": "450px"}} />
            </div>
            <Footer />
        </>
    );
}

export default Settings
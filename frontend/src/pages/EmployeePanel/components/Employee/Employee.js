import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import styles from './Employee.module.css'
import { useContext } from 'react';
import AuthContext from '../../../../store/auth-context';

const Employee = (props) => {
    const authCtx = useContext(AuthContext)

    const authJWT = {
        headers: {
            'Authorization': `Bearer ${authCtx.token}`
        }
    }

    const removeEmployee = async (id) => {
        await axios.delete(`http://localhost:8888/api/workers/${id}`, authJWT).then((response) => {
            props.onChange((prevState) => !prevState)
        })
    }

    return (
        <>
            <Card className={`${styles.employee} mt-3 mb-3`} style={{ width: '18rem' }}>
                <Card.Img style={{ height: '18rem' }} variant="top" src="https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper-thumbnail.png" alt="User" />
                <Card.Body>
                    <Card.Title >{props.name} {props.surname}</Card.Title>
                    <Card.Text >
                        <p>Email: {props.email}</p>
                        <p>Numer telefonu: {props.phoneNumber}</p>
                    </Card.Text>
                    <div className="d-flex justify-content-end" >
                         <Button onClick={() => removeEmployee(props.id)} variant="outline-danger">Usuń konto</Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}

export default Employee
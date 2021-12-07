import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import styles from './User.module.css'

const User = (props) => {

    const blockUser = async (id) => {
        await axios.get(`http://localhost:8888/api/users/${id}`).then((response) => {
            props.onChange((prevState) => !prevState)
        })
    }

    return (
        <>
            <Card className={`${styles.user} mt-3 mb-3`} style={{ width: '18rem' }}>
                <Card.Img style={{ height: '18rem' }} variant="top" src="https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper-thumbnail.png" alt="User" />
                <Card.Body>
                    <Card.Title >{props.name} {props.surname}</Card.Title>
                    <Card.Text >
                        <p>Email: {props.email}</p>
                        <p>Numer telefonu: {props.phoneNumber}</p>
                    </Card.Text>
                    <div className="d-flex justify-content-end" >
                         <Button onClick={() => blockUser(props.id)} disabled={props.blocked ? true : false} variant="outline-danger">Blokuj konto</Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}

export default User
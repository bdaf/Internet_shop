import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import LoadingIcon from "../../../../components/LoadingIcon/LoadingIcon";
import User from "./User";

const Users = (props) => {
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchUsers = async () => {
        await axios.get("http://localhost:8888/api/users").then((response) => {
            setUsers(response.data)
        })
        setLoading(true)
    }

    useEffect(() => {
        fetchUsers()
    }, [props.change])

    const contextUser = !loading ? <LoadingIcon /> : users.map((user) =>
        <Col xs="auto" key={user.userId}>
            <User
                id={user.userId}
                name={user.name}
                surname={user.surname}
                phoneNumber={user.phoneNumber}
                email={user.email}
                onChange={props.onChange}
                blocked={user.blocked}
            />
        </Col>
    )

    return (
        <div className='m-4'>
            <h1>Użytkownicy</h1>
            <hr />
            <Row>
                {contextUser}
            </Row>
        </div>
    );
}

export default Users
import { useState, useEffect, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import LoadingIcon from "../../../../components/LoadingIcon/LoadingIcon";
import Employee from "./Employee";
import AuthContext from "../../../../store/auth-context";

const RemoveEmployee = (props) => {

    const [employeies, setEmployeies] = useState(null)
    const [loading, setLoading] = useState(false)

    const authCtx = useContext(AuthContext)
    const authJWT = {
        headers: {
            'Authorization': `Bearer ${authCtx.token}`
        }
    }

    const fetchEmployee = async () => {
        await axios.get("http://localhost:8888/api/workers", authJWT).then((response) => {
            setEmployeies(response.data)
        })
        setLoading(true)
    }

    useEffect(() => {
        fetchEmployee()
    }, [props.change])

    const contextEmployee = !loading ? <LoadingIcon /> : employeies.map((employee) =>
        <Col xs="auto" key={employee.userId}>
            <Employee
                id={employee.userId}
                name={employee.name}
                surname={employee.surname}
                phoneNumber={employee.phoneNumber}
                email={employee.email}
                onChange={props.onChange}
            />
        </Col>
    )

    return (
        <div className='m-4'>
            <h1>Pracownicy</h1>
            <hr />
            <Row>
                {contextEmployee}
            </Row>
        </div>
    );
}

export default RemoveEmployee
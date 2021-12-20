import { useContext } from "react";
import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import Footer from "../../../components/Footer/Footer";
import Navbars from "../../../components/Navbar/Navbar";
import AuthContext from "../../../store/auth-context";
import Tabs from "./components/Tabs";

import styles from "./Profile.module.css"

const Profile = () => {
    const authCtx = useContext(AuthContext)

    return (
        <>
            <Navbars />
            <div className={styles.bodyContainer}>

                <Stack className="mt-3" >
                    <div className="d-flex justify-content-center">
                        <Image width={'15%'} src="https://vitalia.pl/gfx/user_space/2/1/7/3/8/2173895/avg_1f44b1d8d518b588937d82c56fb0a248.jpg" roundedCircle />
                        <h1 style={{ color: "black" }} className="ms-3 align-self-center">{authCtx.user.name} {authCtx.user.surname}</h1>
                    </div>
                    <div className="mt-3 mb-3">
                        <Tabs />
                    </div>
                </Stack>

            </div>
            <Footer />
        </>
    );
}

export default Profile
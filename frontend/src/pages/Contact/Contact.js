import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Row, Col } from 'react-bootstrap';


function Contact() {
    return (
        <>
            <Navbar />
            <Row className="ms-5 mt-3">
                <Col xs={4} className="d-flex">
                    <div className="d-flex justify-content-start align-items-center">
                        <img src="https://img.icons8.com/office/40/000000/iphone.png" alt="telefon" />
                        <>
                            <div>
                                Telefon 
                            </div> 
                            <div >
                                34 377 00 00
                            </div>
                        </>
                    </div>
                </Col>
                <Col xs={4} className="d-flex">
                    <div className="d-flex justify-content-center align-items-center">
                        <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-email-multimedia-kiranshastry-lineal-color-kiranshastry-1.png" alt="Email" />
                        <>
                            <div >
                                Email
                            </div>
                            <div >
                                biuro@NUIT.pl
                            </div>
                        </>
                    </div>
                </Col>

                <Col xs={3} className="d-flex">
                    <div className="contact_info_item d-flex justify-content-start align-items-center">
                        <img src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/50/000000/external-address-removals-company-inipagistudio-mixed-inipagistudio.png" alt="Adres" />
                        <div className="contact_info_content">
                            <div className="contact_info_title">
                                Adres
                            </div>
                            <div className="contact_info_text">
                                Kaspra Drużbickiego 2 C.H.Plaza, 61-693 Poznań

                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="mt-3">
                <div className="text-center">
                    <h1 className="">Odwiedź nas</h1>
                    <div className="">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77911.23049776697!2d16.79827259257196!3d52.3935181044626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47044351a495f72b%3A0xa4966ec50fd8c3fe!2sKomputronik!5e0!3m2!1spl!2spl!4v1638222418036!5m2!1spl!2spl" width="70%" height="500px"  loading="lazy" title="Google"></iframe>
                    </div>
                </div>
            </Row>
            <Footer />
        </>

    )
}

export default Contact

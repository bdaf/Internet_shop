import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


function Contact() {
    return (
        <div>
        <Navbar search={true} />
    
        <div className="contact_info mt-4">
            <div className="conatiner-fluid">
                <div className="row">
                <div className="col-lg-10 offset-lg-1 d-flex">
                    <div className="contact_info_item d-flex justify-content-start align-items-center">
                    <img src="https://img.icons8.com/office/40/000000/iphone.png"/>
                        <div className="contact_info_content">
                            <div className="contact_info_title">
                                Telefon
                            </div>
                            <div className="contact_info_text">
                            34 377 00 00
                                </div>
                            </div>
                        </div>

                        <div className="contact_info_item d-flex justify-content-start align-items-center">
                        <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-email-multimedia-kiranshastry-lineal-color-kiranshastry-1.png"/>
                        <div className="contact_info_content">
                            <div className="contact_info_title">
                                Email
                            </div>
                            <div className="contact_info_text">
                            sentino@gmail.com
                                </div>
                            </div>
                        </div>

                    
                    <div className="contact_info_item d-flex justify-content-start align-items-center">
                    <img src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/50/000000/external-address-removals-company-inipagistudio-mixed-inipagistudio.png"/>
                        <div className="contact_info_content">
                            <div className="contact_info_title">
                                Adres
                            </div>
                            <div className="contact_info_text">
                            Kaspra Drużbickiego 2 C.H.Plaza, 61-693 Poznań

                                </div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </div>


    <section className="section sp bg-c-light">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                        <h1 className="main-heading">Odwiedź nas</h1>
                        <div className="underline mx-auto"></div>
                        <div className="google-map-code">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77911.23049776697!2d16.79827259257196!3d52.3935181044626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47044351a495f72b%3A0xa4966ec50fd8c3fe!2sKomputronik!5e0!3m2!1spl!2spl!4v1638222418036!5m2!1spl!2spl" width="800" height="600" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>

        <Footer/>
        </div>

    )
}

export default Contact

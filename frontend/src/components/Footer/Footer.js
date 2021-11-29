import React from 'react'
import { NavLink, Link } from "react-router-dom";

function Footer() {
    return (
            <section className="section footer bg-dark text-white">
                <div className="container>">
                    <div className="row">
                        <div className="col-md-4 mt-4">
                            <h6>O firmie</h6>
                            <hr/>
                            <p>Zajebista firma raz dwa trzy
                                Sento Kozak
                            </p>
                        </div>
                        <div className="col-md-4 mt-4">
                            <h6>Na skróty</h6>
                            <hr/>
                            <div><Link to="/">Strona główna</Link></div>
                            <div><Link to="/about">O nas</Link></div>
                            <div><Link to="/Contact">Kontakt</Link></div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <h6>Kontakt</h6>
                            <hr/>
                            <div><p className="text-white mb-1">34 377 00 00</p></div>
                            <div><p><small>pon.-pt. 8:00-21:00<br/>
                            sob.-ndz. 9:00-19:00</small></p></div>
                            <div><p className="text-white mb-1">sentino@gmail.com</p></div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Footer

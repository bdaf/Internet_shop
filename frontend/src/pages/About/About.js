import React from 'react'
import Navbar from "../../components/Navbar/Navbar";

function About() {
    return (
        <div>
        <Navbar search={true} />

        <div className="container">
            <div className="card mt-4">
                <div className="card-body">
                    <h2>About us</h2>
                </div>
            </div>
            
        </div>
        </div>
    )
}

export default About

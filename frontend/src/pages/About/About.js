import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function About() {
    return (
        <div>
        <Navbar search={true} />
    <section className="section sp">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                        <h1 className="main-heading">O firmie</h1>
                        <div className="underline mx-auto"></div>
                        <p style={{ textAlign: 'left' }}>
                        Nasza historia rozpoczęła się w 2002 roku z chwilą otwarcia pierwszego salonu stacjonarnego. Od tej pory nieustannie się rozwijamy, dzięki czemu staliśmy się ekspertami w branży komputerowej. Łączymy empatię i technologię, co pozwala nam lepiej rozumieć potrzeby Klientów. Jesteśmy otwarci na sugestie i oferujemy rozwiązania, zapewniające 100% satysfakcji.
                        </p>
                        <br/>
                        <br/>
                        <p style={{ textAlign: 'left' }}>
                        Obecnie posiadamy 27 nowoczesnych salonów stacjonarnych w całej Polsce, jeden z najczęściej wybieranych Sklepów Internetowych w kraju i największy sprzedawca na Allegro. Wysoką jakość naszych usług potwierdzają pozytywne komentarze oraz liczne nagrody przyznawane przez Konsumentów.
                        </p>

                </div>
            </div>
        </div>
    </section>

    <section className="section sp bg-c-light">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                        <h1 className="main-heading">Dlaczego my?</h1>
                        <div className="underline mx-auto"></div>
                        <p style={{ textAlign: 'left' }}>Od 18 lat doradzamy w wyborze najlepszych rozwiązań. Do tej pory zapracowaliśmy na zaufanie setek tysięcy Klientów, a ich liczba ciągle rośnie. Zobacz, dlaczego wybrali właśnie nas.</p>
                        <br/>
                        <h6 style={{ textAlign: 'left' }}>-Twoja satysfakcja jest najważniejsza</h6><br/>
                        <h6 style={{ textAlign: 'left' }}>-Stawiamy na wiedzę i pasję</h6><br/>
                        <h6 style={{ textAlign: 'left' }}>-Oferujemy szeroki wybór i najlepsze ceny</h6><br/>
                </div>

            </div>
        </div>
    </section>

        <Footer/>
        </div>

    )
}

export default About

import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import styles from './About.module.scss'
import { Row } from 'react-bootstrap';
function About() {
    return (
        <>
            <Navbar />
            <div className={styles.bodyContainer}>
                <Row className="m-3">
                    <h1 className="text-center mb-4" >O firmie</h1>
                    <div className="ps-5 pe-5">
                        <p>
                            Nasza historia rozpoczęła się w 2002 roku z chwilą otwarcia pierwszego salonu stacjonarnego. Od tej pory nieustannie się rozwijamy, dzięki czemu staliśmy się ekspertami w branży komputerowej. Łączymy empatię i technologię, co pozwala nam lepiej rozumieć potrzeby Klientów. Jesteśmy otwarci na sugestie i oferujemy rozwiązania, zapewniające 100% satysfakcji.
                        </p>
                        <img src="https://i.ibb.co/yf5tHC7/Praca.png" alt="obraz" width="90%" />
                        <p>
                            Obecnie NUIT to 28 nowoczesnych salonów stacjonarnych w całej Polsce, jeden z najczęściej wybieranych Sklepów Internetowych w kraju i największy sprzedawca na Allegro. Wysoką jakość naszych usług potwierdzają pozytywne komentarze oraz liczne nagrody przyznawane przez Konsumentów.
                        </p>
                        <p>
                            Naszą największą siłą są ludzie, skupieni w 28 działach firmy. Profesjonalni, zaangażowani i otwarci na potrzeby Klientów. Nasz zespół liczy już ponad 4 osób i stale się powiększa. Specjalistów i pasjonatów, którzy chcą do nas dołączyć zapraszamy do napisania e-maila praca@NUIT.pl.
                        </p>
                    </div>
                </Row>
                <Row className="m-3">
                    <h1 className="text-center mb-4" >Dlaczego my?</h1>
                    <div className="ps-5 pe-5">
                        <p>
                            Od 18 lat doradzamy w wyborze najlepszych rozwiązań. Do tej pory zapracowaliśmy na zaufanie setek tysięcy Klientów, a ich liczba ciągle rośnie. Zobacz, dlaczego wybrali właśnie nas.
                        </p>
                        <p>
                            Pamiętaj twoja satysfakcja jest najważniejsza dlatego oferujemy szeroki wybór i najlepsze ceny, a także stawiamy na wiedzę i pasję!

                        </p>
                        <h2>Zobacz, jak oceniają nas Klienci</h2>
                        <img src="https://i.ibb.co/Db91946/Kli.png" alt="obraz2" width="90%" />
                    </div>
                </Row>
            </div>
            <Footer />
        </>

    )
}

export default About

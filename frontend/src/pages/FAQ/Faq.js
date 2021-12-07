
import { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import styles from './Faq.module.scss';

const Faq = () => {
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    return (
        <>
            <Navbar />
            <div className={`${styles.bodyContainer}`}>
                <div className={styles.container}>
                    <h2>Często Zadawane Pytania</h2>
                    <div className={styles.accordion}>
                        <div className={styles.accordionItem}>
                            <button onClick={() => setShow1((prev) => !prev)} aria-expanded={show1}><span className={styles.accordionTitle}>Co jest niezbędne do reklamacji?</span><span className={styles.icon} aria-hidden="true"></span></button>
                            <div className={styles.accordionContent}>
                                <p>Aby skutecznie zareklamować towar przygotuj dowód zakupu oraz kartę gwarancyjną jeżeli otrzymałeś ją wraz z produktem (ponieważ może być wymagana przez gwaranta).</p>
                            </div>
                        </div>
                        <div className={styles.accordionItem}>
                            <button onClick={() => setShow2((prev) => !prev)} aria-expanded={show2}><span className={styles.accordionTitle}>Do której czynny jest wybrany sklep NUIT?</span><span className={styles.icon} aria-hidden="true"></span></button>
                            <div className={styles.accordionContent}>
                                <p>Sklep NUIT jest nowoczesnym sklepem czynny 24/7!</p>
                            </div>
                        </div>
                        <div className={styles.accordionItem}>
                            <button onClick={() => setShow3((prev) => !prev)} aria-expanded={show3}><span className={styles.accordionTitle}>W jaki sposób mogę zgłosić awarię sprzętu?</span><span className={styles.icon} aria-hidden="true"></span></button>
                            <div className={styles.accordionContent}>
                                <p>Jeżeli produkt, który otrzymałeś jest niesprawny, a nie upłynął jeszcze okres 15 dni od zakupu, skontaktuj się z nami na poniższy adres mailowy serwis@NUIT.pl</p>
                            </div>
                        </div>
                        <div className={styles.accordionItem}>
                            <button onClick={() => setShow4((prev) => !prev)} aria-expanded={show4}><span className={styles.accordionTitle}>Jak mogę ubezpieczyć towar?</span><span className={styles.icon} aria-hidden="true"></span></button>
                            <div className={styles.accordionContent}>
                                <p>W przypadku zainteresowania zapraszamy do kontaktu telefonicznego od poniedziałku do piątku, w godzinach 8:00 – 18:00, pod numerem telefonu: 34 377 00 00 oraz adresem mailowym: extraochrona@NUIT.pl</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
}

export default Faq
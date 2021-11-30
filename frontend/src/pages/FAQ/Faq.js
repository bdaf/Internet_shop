
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import styles from './Faq.module.scss';

const Faq = () => {
    return (
        <>
            <Navbar />
            <div className={styles.bodyContainer}>
                <div className={styles.container}>
                    <h2>Często Zadawane Pytania</h2>
                    <div className={styles.accordion}>
                        <div className={styles.accordionItem}>
                            <button aria-expanded="true"><span className={styles.accordionTitle}>Why is the moon sometimes out during the day?</span><span className={styles.icon} aria-hidden="true"></span></button>
                            <div className={styles.accordionContent}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                            </div>
                        </div>
                        <div className={styles.accordionItem}>
                            <button aria-expanded="false"><span className={styles.accordionTitle}>Why is the sky blue?</span><span className={styles.icon} aria-hidden="true"></span></button>
                            <div className={styles.accordionContent}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
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
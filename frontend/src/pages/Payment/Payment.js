import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from './Payment.module.scss';
function Payment() {
    return (
        <>
            <Navbar />

<h1 style={{textAlign: 'center'}}>Płatność</h1>

<h4 className={`${styles.greenCenter}`}>
    Nie interesuje Cie wsparcie tylko jednego zwierzęcia, ale chcesz wesprzeć całą ich masę? Nie masz czasu pomagać jako wolontariusz, ale chcesz dać od siebie bardzo znaczącą pomoc?
    Bezpośrednia niecykliczna (mamy nadzieję że również wysoka) wpłata w pełni jest dla Ciebie!
</h4>
<hr />
<h4 style={{textAlign: 'center'}}>Z całego zwierzęcio-ludzkiego serca polecamy bankowość naszego sponsora - MBanku w którym bankujesz, jak chcesz!</h4>
<br />
<div className="jumper  col-12" style={{padding: '0px'}}>
    <a href="https://online.mbank.pl/pl/Login"><img src="/Images/mBank.png" alt="mBank" class="img-thumbnail"/></a>
</div>
<br />
<br />
<h2>Dane do wpłaty:</h2>
<h5><b>Numer konta:</b> 4234 8900 0001 2139 4356 67</h5>
<h5><b>Bank:</b> Mbank</h5>
<h5><b>Tytuł przelewu: </b>Darowizna</h5>
<h5 style={{paddingTop: '5px'}}>Jeżeli nie korzystasz z MBanku, wybierz poniżej kafelek swojego banku, zostaniesz przekierowany do strony logowania:</h5>
<div className="container">
    <div className="row">
        <div className="jumper  col-3 noPadding" style={{padding: '0px'},{height: '100px'}}>
            <a href="https://online.mbank.pl/pl/Login "><img src="https://i.ibb.co/yNwXjH7/mBank.png" alt="mBank" class="img-thumbnail"/></a>
        </div>
        <div className="jumper  col-3 noPadding" style={{padding: '0px'},{height: '100px'}}>
            <a href="https://system.aliorbank.pl/sign-in "><img src="https://i.ibb.co/kqc2CnY/alior-Bank.png" alt="aliorBank" class="img-thumbnail "/></a>
        </div>
        <div className="jumper  col-3 noPadding" style={{padding: '0px'},{height: '100px'}}>
            <a href="https://goonline.bnpparibas.pl/#!/login "><img src="/Images/bnpParibas.png" alt="bnpParibas" class="img-thumbnail "/></a>
        </div>
        <div className="jumper  col-3 noPadding" style={{padding: '0px'},{height: '100px'}}>
            <a href="https://www.e25.pl/ "><img src="/Images/bpsBank.png" alt="bpsBank" class="img-thumbnail "/></a>
        </div>
    </div>
    <div className="row">
        <div className="jumper  col-3 noPadding" style={{padding: '0px'},{height: '100px'}}>
            <a href="https://bosbank24.pl/frontend-web/app/auth.html#/content/login "><img src="/Images/bosBank.png" alt="bosBank" class="img-thumbnail"/></a>
        </div>
        <div className="jumper  col-3 noPadding" style={{padding: '0px'},{height: '100px'}}>
            <a href="https://www.citibankonline.pl/apps/auth/signin/ "><img src="/Images/cityHandlowyBank.png" alt="cityHandlowyBank" class="img-thumbnail "/></a>
        </div>
        <div className="jumper  col-3 noPadding" style={{padding: '0px'},{height: '100px'}}>
            <a href="https://ca24.credit-agricole.pl/web-ca24/login/login "><img src="/Images/creditAdricoleBank.jpg" alt="creditAdricoleBank" class="img-thumbnail "/></a>
        </div>
        <div className="jumper  col-3 noPadding" style={{padding: '0px'},{height: '100px'}}>
            <a href="https://secure.getinbank.pl/?_ga=2.49138022.1304353360.1622544936-1599684307.1622544936#index/index "><img src="/Images/getinBank.jpg" alt="getinBank" class="img-thumbnail "/></a>
        </div>
    </div>
    <div className="row">
        <div className="jumper  col-3 noPadding" style={{padding: '0px'},{height: '100px'}}>
            <a href="https://www.ideabank.pl/logowanie "><img src="/Images/ideaBank.jpg" alt="ideaBank" class="img-thumbnail"/></a>
        </div>
        <div className="jumper  col-3 noPadding" style={{padding: '0px'},{height: '100px'}}>
            <a href="https://login.ingbank.pl/mojeing/app/#login "><img src="/Images/ingBank.jpg" alt="ingBank" class="img-thumbnail "/></a>
        </div>
        <div className="jumper  col-3 noPadding" style={{padding: '0px'},{height: '100px'}}>
            <a href="https://inteligo.pl/secure "><img src="/Images/inteligoBank.jpg" alt="inteligoBank" class="img-thumbnail "/></a>
        </div>
        <div className="jumper  col-3 noPadding" style={{padding: '0px'},{height: '100px'}}>
            <a href="https://www.bankmillennium.pl/logowanie "><img src="/Images/millenniumBank.jpg" alt="millenniumBank" class="img-thumbnail "/></a>
        </div>
    </div>
    <div className="row">
        <div className="jumper  col-3 noPadding" style={{padding: '0px'},{height: '100px'}}>
            <a href="https://login.nestbank.pl/ "><img src="/Images/nestBank.png" alt="nestBank" class="img-thumbnail"/></a>
        </div>
        <div className="jumper  col-3 noPadding" style={{padding: '0px'},{height: '100px'}}>
            <a href="https://www.ipko.pl/ "><img src="/Images/pkoBank.jpg" alt="pkoBank" class="img-thumbnail "/></a>
        </div>
        <div className="jumper  col-3 noPadding" style={{padding: '0px'},{height: '100px'}}>
            <a href="https://plusbank24.pl/web-client/login!input.action?token=8cc75cd4-32a0-433c-ae60-75b90c165d88 "><img src="/Images/plusBank.jpg" alt="plusBank" class="img-thumbnail "/></a>
        </div>
        <div clclassNameass="jumper  col-3 noPadding" style={{padding: '0px'},{height: '100px'}}>
            <a href="https://www.pocztowy24.pl/cbp-webapp/login "><img src="/Images/pocztowyBank.png" alt="pocztowyBank" class="img-thumbnail "/></a>
        </div>
    </div>
    <div className="row">
        <div className="jumper  col-3 noPadding" style={{padding: '0px'},{height: '100px'}}>
            <a href="https://www.centrum24.pl/centrum24-web/login?x=nqTFTMjGmxo&_ga=2.178864868.1549523130.1622545199-716326694.1622545199 "><img src="/Images/santanderBank.png" alt="santanderBank" class="img-thumbnail"/></a>
        </div>
        <div className="jumper  col-3 noPadding" style={{padding: '0px'},{height: '100px'}}>
            <a href="https://konto.toyotabank.pl/frontend-web/app/auth.html#/content/login "><img src="/Images/toyotaBank.jpg" alt="toyotaBank" class="img-thumbnail "/></a>
        </div>
        <div className="jumper  col-3 noPadding" style={{padding: '0px'},{height: '100px'}}>
            <a href="https://przeniesienie-system.aliorbank.pl/"><img src="/Images/tmobileBank.jpg" alt="tmobileBank" class="img-thumbnail "/></a>
        </div>
        <div className="jumper  col-3 noPadding" style={{padding: '0px'},{height: '100px'}}>
            <a href="https://dbhiponet.deutschebank.pl/simple-web/app/simpleauth.html#/de/authentication/login"><img src="/Images/deutscheBank.jpg" alt="deutscheBank" class="img-thumbnail "/></a>
        </div>
    </div>
</div>
<br />
<h3>Dziękujemy ogromnie za Wasze wsparcie!</h3>
<h5>Dzięki Wam i Waszej hojności w pomocy finansowej i fizycznej, duża ilość schronisk może działać więcej, lepiej i szybciej, dbając o zwierzęta za które jako istoty silniejsze i bardziej inteligentne jesteśmy odpowiedzialni, dziękujemy! </h5>

            <Footer />
        </>

    )
}

export default Payment

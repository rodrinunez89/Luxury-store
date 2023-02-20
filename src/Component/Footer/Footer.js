import "./Footer.scss";



const Footer = () => {
    return (
        <div className="footercontainer">
            <div className="footercontainer_socialmedia">
                <img alt="logotwiter" src="/img/instagram.png"/>
                <img alt="logofacebook" src="/img/facebook.png"/>
                <img alt="logoinstagram" src="/img/twitter.png"/>
            </div>
            <div className="footercontainer_text">
                <p>Direccion: Charcas 4550 , CABA</p>
                <p>Teléfono: +52 123456789</p>
                <p>Email: charcas@gmail.com</p>
                <p>Horario: 8 a 17 Hs.</p>
                <p>Dia: Lunes a Sabado</p>
                <p>© 2023 All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer;
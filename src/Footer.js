import React from "react"
import "./Footer.css"
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';

function Footer() {
    return (
        <nav className="footer">
            <div className="footer__emailLink">
            <a href="mailto:alozie4God@mail.com" className="footer__link">chinenye@gmail.com</a>
            </div>
            <div className="footer__socialList">
                <div className="footer__option">
                    <a href="https://codepen.io">
                        <FacebookIcon fontSize="small" />
                    </a>
                </div>
                <div className="footer__option">
                    <a href="https://twitter.com">
                        <TwitterIcon fontSize="small" />
                    </a>
                </div>
                <div className="footer__option">
                    <a href="https://dribble.com">
                        <WhatsAppIcon fontSize="small" />
                    </a>
                </div>
                <div className="footer__option">
                    <a href="https://github.com">
                        <InstagramIcon fontSize="small" />
                    </a>
                </div>
            </div>
        
        </nav>
    )
}

export default Footer
import './Footer.css';
import logo from '../assets/logo.png';

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Kasa" className="footer__logo"/>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;

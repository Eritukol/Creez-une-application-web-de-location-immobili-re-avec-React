import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png'; 

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Kasa" className="header__logo"/>
            <nav>
                <ul className="header__nav">
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/a-propos">A propos</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
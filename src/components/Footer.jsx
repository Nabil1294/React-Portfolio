import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
    return (
    <footer className="footer text-white text-center p-3">
        <a href="https://github.com/Nabil1294" target="_blank" rel="noopener noreferrer" className="footer-icon">
        <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://linkedin.com/in/mahmoud-nabil-5819b7283" target="_blank" rel="noopener noreferrer" className="footer-icon">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.facebook.com/mmnabil" target="_blank" rel="noopener noreferrer" className="footer-icon">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
    </footer>
    );
};

export default Footer;

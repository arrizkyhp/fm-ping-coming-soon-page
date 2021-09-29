import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
      <div className="bottom">
        <div className="icon-group">
          <a className="fa" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <span class="visually-hidden">Facebook</span>
            <FaFacebookF />
          </a>
          <a className="fa" href="https://twitter.com/home" target="_blank" rel="noreferrer">
            <span class="visually-hidden">Twitter</span>
            <FaTwitter />
          </a>
          <a className="fa" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <span class="visually-hidden">Instagram</span>
            <FaInstagram />
          </a>
        </div>
        <p className="copyright text-gray">© Copyright Ping. All rights reserved.</p>
      </div>
    );
}

export default Footer;
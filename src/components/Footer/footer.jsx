import { StyledFooter } from "./FooterStyled";
import logo from "../../assets/yannal-logo.png";
import facebook from "../../assets/social-icon/facebook-icon.png";
import twitter from "../../assets/social-icon/twitter-icon.png";
import instagram from "../../assets/social-icon/instagram-icon.png";
import linkedin from "../../assets/social-icon/linkedIn-icon.png";
import gps from "../../assets/contact-icon/location.png";
import phone from "../../assets/contact-icon/call.png";
import messenge from "../../assets/contact-icon/sms.png";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="capsule">
        <div className="container-1">
          <img className="logo" src={logo} alt="logo-yannal" />
          <figure>
            <a href="https://www.facebook.com/">
              <img className="social-icon" src={facebook} alt="facebook-icon" />
            </a>
            <a href="https://twitter.com/">
              <img className="social-icon" src={twitter} alt="twitter-icon" />
            </a>
            <a href="https://www.instagram.com/">
              <img
                className="social-icon"
                src={instagram}
                alt="instagram-icon"
              />
            </a>
            <a href="https://ar.linkedin.com/">
              <img className="social-icon" src={linkedin} alt="linkedin-icon" />
            </a>
          </figure>
        </div>
        <div className="container-2">
          <h2>Contact</h2>
          <div className="contact">
            <img className="icon-contact gps" src={gps} alt="icon-location" />
            <a href="#" className="text">
              F1 - 320 Jeff Heights, Main Blvd, Gulberg, Lahore, Pakistan
            </a>
          </div>
          <div className="contact">
            <img className="icon-contact phone" src={phone} alt="icon-phone" />
            <a href="#" className="text">
              +92 - 300 - 115 - 222 -444
            </a>
          </div>
          <div className="contact">
            <img
              className="icon-contact messenge"
              src={messenge}
              alt="icon-sms"
            />
            <a href="#" className="text">
              support@yannal.com
            </a>
          </div>
        </div>

        <div className="container-3">
          <h2>Support</h2>
          <ul>
            <a href="#">
              <li>Faq</li>
            </a>
            <a href="#">
              <li>Shipping & Returns</li>
            </a>
            <a href="#">
              <li>Contact Us</li>
            </a>
            <a href="#">
              <li>Our Partners</li>
            </a>
          </ul>
        </div>
        <div className="container-4">
          <h2>Info</h2>
          <ul>
            <a href="#">
              <li>Dates</li>
            </a>
            <a href="#">
              <li>Parties</li>
            </a>
            <a href="#">
              <li>Brithdays</li>
            </a>
            <a href="#">
              <li>Menu</li>
            </a>
          </ul>
        </div>
      </div>
      <span>&copy;2023 Yannal Supemarket </span>
    </StyledFooter>
  );
};

export default Footer;

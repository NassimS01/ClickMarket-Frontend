import styled from "styled-components";
import logo from "../assets/yannal-logo.png";
import facebook from "../assets/social-icon/facebook-icon.png";
import twitter from "../assets/social-icon/twitter-icon.png";
import instagram from "../assets/social-icon/instagram-icon.png";
import linkedin from "../assets/social-icon/linkedIn-icon.png";
import gps from "../assets/contact-icon/location.png";
import phone from "../assets/contact-icon/call.png";
import messenge from "../assets/contact-icon/sms.png";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 450px;
  background-color: #2a333e;
  position: relative;

  & .capsule {
    display: flex;
    flex-direction: row;
    width: 80%;
    height: 260px;

    & .container-1 {
      width: 35%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      row-gap: 1.5em;

      & .logo {
        width: 115px;
        height: 35px;
      }

      & figure {
        width: 125px;
        height: 25px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-left: 0px;

        & .social-icon {
          width: 18px;
          height: 18px;
        }
      }
    }

    & .container-2 {
      & h2 {
        font-size: 22px;
        color: white;
      }

      & .contact {
        display: flex;
        flex-direction: row;
        color: white;
        margin-top: 1.8em;

        & .icon-contact {
          margin: 0px;
          margin-right: 1em;
        }

        & .gps {
          width: 13px;
          height: 17px;
        }

        & .phone {
          width: 15px;
          height: 16px;
        }

        & .messenge {
          width: 16px;
          height: 12px;
        }

        & .text {
          width: 270px;
          margin: 0px;
          text-decoration: none;
          color: white;
        }
      }
    }

    & .container-3 {
      width: 20%;
    }

    & .container-3,
    .container-4 {
      & h2 {
        color: white;
      }

      & ul {
        list-style-type: none;
        padding-inline-start: 0px;

        & a {
          display: block;
          margin-top: 1.6em;
          text-decoration: none;
          color: white;
        }
      }
    }
  }

  & span {
    position: absolute;
    bottom: 1em;
    color: #ffffff;
  }
`;

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
      <span>&copy;2023 Yannal SuperMarket </span>
    </StyledFooter>
  );
};

export default Footer;

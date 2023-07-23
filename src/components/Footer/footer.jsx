import { StyledFooter } from "./FooterStyled";
import { AiFillFacebook, AiFillGithub, AiFillTwitterSquare, AiFillLinkedin, AiFillPhone, AiFillMail } from "react-icons/ai";
import { FaLocationDot} from "react-icons/fa6";
import logo from "../../assets/logoClickMarket.png";


const Footer = () => {
  return (
    <StyledFooter>
      <div className="container-footer">
      <div className="container-1">
          <img className="logo" src={logo} alt="Logo Click Market" />
          <div className="social-icons-container-1">
            <a href="https://www.facebook.com/" className="logo-facebook">
              <AiFillFacebook/>
            </a>
            <a href="https://github.com/NassimS01/Supermarket/" className="logo-github">
              <AiFillGithub/>
            </a>
            <a href="https://twitter.com/" className="logo-twitter">
              <AiFillTwitterSquare/>
            </a>
            <a href="https://ar.linkedin.com/" className="logo-linkedin">
              <AiFillLinkedin/>
            </a>
          </div>
        </div>

        <div className="container-2">
          <h3>Contacto</h3>
            <a href="#" className="text">
              <FaLocationDot/> San Miguel de Tucumán, Tucumán
            </a>
            <a href="#" className="text">
              <AiFillPhone/> +54 381-5367724
            </a>
            <a href="#" className="text">
              <AiFillMail/> clickmarket@support.com
            </a>
        </div>

        <div className="container-3">
          <h3>Support</h3>
            <a href="#">
              FQA
            </a>
            <a href="#">
              Shipping & Returns
            </a>
            <a href="#">
              Contact Us
            </a>
            <a href="#">
              Our Partners
            </a>
        </div>

        <div className="container-4">
          <h3>Info</h3>
            <a href="#">
              Dates
            </a>
            <a href="#">
              Parties
            </a>
            <a href="#">
              Brithdays
            </a>
            <a href="#">
              Menu
            </a>
        </div>
      </div>
        
      <p>&copy; Click Market </p>
    </StyledFooter>
  );
};

export default Footer;

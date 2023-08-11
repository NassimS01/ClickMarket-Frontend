import React from "react";
import { StyledFooter } from "./FooterStyled";
import { AiFillFacebook, AiFillGithub, AiFillTwitterSquare, AiFillLinkedin, AiFillPhone, AiFillMail } from "react-icons/ai";
import { FaLocationDot} from "react-icons/fa6";
import logo from "../../assets/CLICK.png";
import qr from "../../assets/ClickMarketQR.png";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BsPeopleFill, BsFillPersonLinesFill } from "react-icons/bs";


const Footer = () => {
  return (
    <StyledFooter>
      <div className="container-footer">
        <div className="container-1">
          <img className="logo" src={logo} alt="Logo Click Market" />
          <div className="social-icons-container-1">
            <a href="https://www.facebook.com/" className="logo-facebook">
              <AiFillFacebook color="var(--colorPrimary)" />
            </a>
            <a
              href="https://github.com/NassimS01/Supermarket/"
              className="logo-github"
            >
              <AiFillGithub color="var(--colorPrimary)" />
            </a>
            <a href="https://twitter.com/" className="logo-twitter">
              <AiFillTwitterSquare color="var(--colorPrimary)" />
            </a>
            <a href="https://ar.linkedin.com/" className="logo-linkedin">
              <AiFillLinkedin />
            </a>
          </div>
        </div>

        <div className="container-2">
          <h3>Contacto</h3>
          <p href="#" className="text">
            <FaLocationDot color="var(--colorPrimary)" /> San Miguel de Tucumán,
            Tucumán
          </p>
          <p href="#" className="text">
            <AiFillPhone color="var(--colorPrimary)" /> +54 381-5367724
          </p>
          <a href="#" className="text">
            <AiFillMail color="var(--colorPrimary)" /> clickmarket@support.com
          </a>
        </div>

        <div className="container-3">
          <h3>Soporte</h3>
          <a href="#">
            <LiaShippingFastSolid color="var(--colorPrimary)" size="20px" />
            Envíos y devoluciones
          </a>
          <a href="#">
            <BsPeopleFill color="var(--colorPrimary)" size="20px" />
            Acerca de nosotros
          </a>
          <a href="#">
            <BsFillPersonLinesFill color="var(--colorPrimary)" size="20px" />
            Patrocinios
          </a>
        </div>

        <div className="container-4">
          <img src={qr} alt="" className="qr" />
        </div>
      </div>

    </StyledFooter>
  );
};

export default Footer;

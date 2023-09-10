import React from "react";
import { StyledFooter } from "./FooterStyled";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../../assets/CLICK.png";
import qr from "../../assets/ClickMarketQR.png";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BsPeopleFill, BsFillPersonLinesFill } from "react-icons/bs";
import { useLocation } from "react-router";

const Footer = ({ isLoading }) => {
  const routesNone = [
    "/login",
    "/signup",
    "/panel-admin",
    "/panel-admin/products",
    "/panel-admin/users",
    "/panel-admin/orders", 
  ];
  const location = useLocation();


  return (
    <StyledFooter
      isLoading={isLoading}
      footernone={
        routesNone.includes(location.pathname) ? true : false
      }
    >
      <div className="container-footer">
        <div className="container-1">
          <img className="logo" src={logo} alt="Logo Click Market" />
          <div className="social-icons-container-1">
            <a href="https://www.facebook.com/" className="logo-facebook link">
              <AiFillFacebook color="var(--colorPrimary)" />
            </a>
            <a
              href="https://github.com/NassimS01/Supermarket/"
              className="logo-github link"
            >
              <AiFillGithub color="var(--colorPrimary)" />
            </a>
            <a href="https://twitter.com/" className="logo-twitter link">
              <AiFillTwitterSquare color="var(--colorPrimary)" />
            </a>
            <a href="https://ar.linkedin.com/" className="logo-linkedin link">
              <AiFillLinkedin color="var(--colorPrimary)" />
            </a>
          </div>
        </div>

        <div className="container-2">
          <h3 className="container-title">Contacto</h3>
          <p href="#" className="text link">
            <FaLocationDot color="var(--colorPrimary)" /> San Miguel de Tucumán,
            Tucumán
          </p>
          <p href="#" className="text link">
            <AiFillPhone color="var(--colorPrimary)" /> +54 381-5367724
          </p>
          <a href="#" className="text link">
            <AiFillMail color="var(--colorPrimary)" /> clickmarket@support.com
          </a>
        </div>

        <div className="container-3">
          <h3 className="container-title">Soporte</h3>
          <a href="#" className="link">
            <LiaShippingFastSolid color="var(--colorPrimary)" size="20px" />
            Envíos y devoluciones
          </a>
          <a href="#" className="link">
            <BsPeopleFill color="var(--colorPrimary)" size="20px" />
            Acerca de nosotros
          </a>
          <a href="#" className="link">
            <BsFillPersonLinesFill color="var(--colorPrimary)" size="20px" />
            Patrocinios
          </a>
        </div>

        <div className="container-4">
        <h3 className="container-title">Data Fiscal</h3>
          <img src={qr} alt="" className="qr" />
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;

import { useState } from "react";
import HamburguerButton from "../HamburguerButton/HamburguerButton";
import NavBar from "../NavBar/NavBar";
import { HeaderWrapper } from "./HeaderStyled";
import logoClickMarket from "../../assets/logoClickMarketNoEslogan.png";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <HeaderWrapper>
      <Link to="/">
        <img src={logoClickMarket} alt="" />
      </Link>
      <NavBar open={open} />
      <HamburguerButton open={open} handleClick={handleClick} />
    </HeaderWrapper>
  );
}

export default Header;

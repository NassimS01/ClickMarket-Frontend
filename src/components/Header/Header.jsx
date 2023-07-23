import { useState } from "react";
import HamburguerButton from "../HamburguerButton/HamburguerButton";
import NavBar from "../NavBar/NavBar";
import { HeaderWrapper } from "./HeaderStyled";
import logoClickMarket from '../../assets/logoClickMarketNoEslogan.png';

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <HeaderWrapper>
      <img src={logoClickMarket} alt="" />
      <NavBar open={open} />
      <HamburguerButton open={open} handleClick={handleClick} />
    </HeaderWrapper>
  );
}

export default Header;

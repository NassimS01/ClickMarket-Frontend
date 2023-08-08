import { FiSearch } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { ContainerNavBar } from "./NavBarStyled";
import { useState } from "react";


const NavBar = ({ open }) => {
    const [search, setSearch] = useState(false);

    const handleSearch = () => {
        setSearch(!search);
    };

    return (
        <>
            <ContainerNavBar open={open}>
                <div className="navbar-links">
                    <a href="/" className="button-nav1">Inicio</a>
                    <a href="/" className="button-nav1">Ofertas</a>
                    <a href="/" className="button-nav1">Categorías</a>
                    <a href="/" className="button-nav1">Contacto</a>
                </div>

                <div className="navbar-icons">
                    <button className="button-nav2"><FiSearch /></button>
                    <button className="button-nav2"><BsCart2 /></button>
                    <button className="button-nav2"><RxPerson /></button>
                </div>
            </ContainerNavBar>
        </>
    )
};

export default NavBar;
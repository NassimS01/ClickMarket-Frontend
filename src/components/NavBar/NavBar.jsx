import {FiSearch} from "react-icons/fi";
import {BsCart2} from "react-icons/bs";
import {RxPerson} from "react-icons/rx";
import {ContainerNavBar, ContainerLeftNavBar ,ContainerRightNavBar} from "./NavBarStyled";
import { useState } from "react";

const NavBar = () => {
    const [search, setSearch] = useState(false);

    const handleSearch = () => {
        setSearch(!search);
    };
    
    return (
        <>
            <ContainerNavBar>
                <ContainerLeftNavBar>
                    <div className="container-logo">
                        <p className="logo2">logo</p>
                    </div>
                    <div className="container-button-nav">
                        <a href="" className="button-nav1">menu</a>
                        <a href="" className="button-nav1">about us</a>
                        <a href="" className="button-nav1">our specials</a>
                        <a href="" className="button-nav1">our location</a>
                        <a href="" className="button-nav1">our cheffs</a>
                    </div>
                </ContainerLeftNavBar>

                <ContainerRightNavBar>
                    <button className="button-nav2"><FiSearch/></button>
                    <button className="button-nav2"><BsCart2/></button>
                    <button className="button-nav2"><RxPerson/></button>
                </ContainerRightNavBar>
            </ContainerNavBar>
        </>
    )
};

export default NavBar;
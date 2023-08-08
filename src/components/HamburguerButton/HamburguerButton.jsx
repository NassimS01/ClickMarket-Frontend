// import { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { styled } from "styled-components";

export const Button = styled.button`
    font-size: 3rem;
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    margin: .5rem;

    @media only screen and (min-width: 576px) {
    display: none;
  }
`;


const HamburguerButton = ({open, handleClick}) => {

    return !open ? (
        <>
            <Button onClick={handleClick}>
                <RxHamburgerMenu />
            </Button>
            
        </>
    ):
    (
        <>
        <Button onClick={handleClick}>
                <RxCross1 />
            </Button>
        </>
    )
}

export default HamburguerButton;
import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: black;
    min-height: 100vh;

    & p{
        margin: 1rem auto;
    }

    & .home-btn{
        width: 200px;
        height: 50px;
        border: none;
        background-color: red;
        border-radius: 10px;
        color: white;
        font-weight: 400;
        cursor: pointer;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & .home-btn:hover{
        background-color: #ff2727;
        transition: 0.5s ease;
    }

`;


export const Title = styled.h1`
    color: gray;
    font-size: 3rem;
`;

export const Subtitle = styled.h2`
    color: gray;
    font-size: 2rem;
`;

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
`;


export const Title = styled.h1`
    color: gray;
    font-size: 3rem;
`;

export const Subtitle = styled.h2`
    color: gray;
    font-size: 2rem;
`;
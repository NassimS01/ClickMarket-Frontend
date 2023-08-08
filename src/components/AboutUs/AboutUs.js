import { styled } from "styled-components";

export const ContainerAboutUs = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
flex-wrap: wrap;
`;

export const CardAboutUs = styled.div`
    background-color: white; 
    margin: 0px 0px 0px 70px;
    position: relative;
    padding: 5px;
    width: 240px;
    height: 270px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.14);
    border-radius: 20px;
    border: 1px solid #efefef;
    color: black;

& img {
    margin: 0 auto;
    width: 150px;
    height: 150px;
    border-radius: 10px;
}

& h2 {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
}

& p {
    font-size: 14px;
    font-weight: 400;
}
`;


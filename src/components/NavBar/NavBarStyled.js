import { styled } from "styled-components";

export const ContainerNavBar = styled.nav`
margin: 0;
color: #da3434;
display:flex;
justify-content: center;
width: 100vw;
height: 70px;
border-bottom: 1px solid darkgray;
`;

export const ContainerLeftNavBar = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
align-content: center;
width: 900px;

& .logo2{
    color: darkgrey;
}

& .container-logo{
}

& .container-button-nav{
    display: flex;
    align-items: center;
    justify-content: center;
}

& .button-nav1{
    margin: 0px 20px;
    color: black;
    background-color: transparent;
    font-size: 16px; 
    transition: border-bottom 0.3s ease;
    border-bottom: 2px solid transparent;
    text-decoration: none;
} 

& .button-nav1:hover{
border-bottom-color: red;
}  
`;

export const ContainerRightNavBar = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
width: 400px;
margin-right:60px;

& .button-nav2{
    display: flex;
    align-items:center;
    justify-content: space-around;
    border: none;
    background-color: transparent;
    cursor: pointer;
    width: 40px;
    height: 40px;
}

& .button-nav2:hover{
    text-shadow: black;
    }
`;

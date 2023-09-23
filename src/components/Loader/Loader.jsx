import Lottie from "lottie-react";
import loaderAnimation from "../../assets/animation/loaderAnimation.json";
import { styled } from "styled-components";

const Container = styled.div`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5); /* Fondo oscuro al 50% de opacidad */
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    overflow: hidden;
`;

const Loader = () => {
    return (
        <Container>
            <Lottie animationData={loaderAnimation}/>
        </Container>
    );
};

export default Loader;
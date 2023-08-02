import notFound from '../../assets/images/404/404-not-found.png';
import { ButtonGlobal } from '../../components/GlobalButton/GlobalButton';
import { Container, Subtitle, Title } from './NotFoundStyled';
// import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container>
            <img draggable="false" className="" src={notFound} alt="Page Not Found" />
            <Title>404 Error</Title>
            <Subtitle>Ops! Página no encontrada</Subtitle>
            <p><i>La página que estas buscando no existe o ha ocurrido un error...</i></p>
            <ButtonGlobal>Ir al Inicio</ButtonGlobal>
            {/* <Link to="">Volver al inicio</Link> */}
        </Container>
    );
};

export default NotFound;
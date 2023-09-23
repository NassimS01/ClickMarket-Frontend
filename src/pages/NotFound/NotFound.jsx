import { useNavigate } from 'react-router-dom';
import notFound from '../../assets/images/404/404-not-found.png';
import { ButtonGlobal } from '../../components/ButtonGlobal/ButtonGlobal';
import { Container, Subtitle, Title } from './NotFoundStyled';

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <img draggable="false" className="" src={notFound} alt="Page Not Found" />
            <Title>404 Error</Title>
            <Subtitle>Ops! Página no encontrada</Subtitle>
            <p><i>La página que estas buscando no existe o ha ocurrido un error...</i></p>
            <ButtonGlobal onClick={() => navigate("/")}>Ir al Inicio</ButtonGlobal>
        </Container>
    );
};

export default NotFound;
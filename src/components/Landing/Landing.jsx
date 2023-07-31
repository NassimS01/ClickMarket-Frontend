import falseDb from '../../products/dataProducts.json';
import CardComponent from '../Card/Card';
import { getRandomProducts } from '../../utils/functions';
import { Container } from './LandingStyle';
import ExtraInfo from './ExtraInfo';

const Landing = () => {

    const randomProducts = getRandomProducts(falseDb.productos, 3);
    return (
        <>
                <h2>Productos que pueden interesarte</h2>
            <Container>
                {randomProducts.map(el => <CardComponent key={el.id} name={el.name} price={el.price} img={el.img} descrip={el.descrip} />)}
            </Container>
            <ExtraInfo/>
        </>
    )
}

export default Landing;
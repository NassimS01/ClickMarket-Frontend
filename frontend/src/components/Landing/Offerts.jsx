import { styled } from "styled-components";
import MediosPago from "../../assets/banners/bannerMediosPago.png"
import RollingCode from "../../assets/banners/RollingCode.gif"
import OfertasBebidas from "../../assets/banners/bannerOfertasBebidas.png"
import Uala from "../../assets/images/Landing/uala.png"
import MercadoPago from "../../assets/images/Landing/mercadopago.png"
import PersonalPay from "../../assets/images/Landing/personalpay.png"
import Galicia from "../../assets/images/Landing/galicia.png"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useSelector } from "react-redux";
import CardComponent from "../Card/Card";
import Loader from "../Loader/Loader";

const Offerts = () => {
    const { allProducts } = useSelector((state) => state.product);

    if (!allProducts) {
        return <Loader />;
    }

    const bebidas = allProducts.filter((product) => product.category === "bebidas")

    console.log(allProducts)
    return (
        <>
            <Container>
                <img src={MediosPago} alt="banner medios de pago" className="banner" />
                <section className="section">
                    <div className="section-cards">
                        <img src={Uala} alt="" />
                        <img src={MercadoPago} alt="" />
                        <img src={PersonalPay} alt="" />
                        <img src={Galicia} alt="" />
                    </div>
                    <div>
                        <a href="https://campus.rollingcodeschool.com/" target={"_blank"}><img src={RollingCode} alt="banner rolling code" className="banner-rolling" /></a>
                    </div>
                </section>
                <img src={OfertasBebidas} alt="banner ofertas bebidas" className="banner" />
                <Carousel 
                    showArrows={true}
                    autoPlay={true}
                    infiniteLoop={true}
                    showIndicators={false}
                    showThumbs={false}
                    showStatus={false}>
                    <div className="carousel">
                        <CardComponent key={bebidas[0]._id}
                            id={bebidas[0]._id}
                            name={bebidas[0].name}
                            description={bebidas[0].description}
                            category={bebidas[0].category}
                            price={bebidas[0].price}
                            discount={bebidas[0].discount}
                            stock={bebidas[0].stock}
                            img={bebidas[0].images.url} />
                        <CardComponent key={bebidas[1]._id}
                            id={bebidas[1]._id}
                            name={bebidas[1].name}
                            description={bebidas[1].description}
                            category={bebidas[1].category}
                            price={bebidas[1].price}
                            discount={bebidas[1].discount}
                            stock={bebidas[1].stock}
                            img={bebidas[1].images.url} />
                        <CardComponent key={bebidas[2]._id}
                            id={bebidas[2]._id}
                            name={bebidas[2].name}
                            description={bebidas[2].description}
                            category={bebidas[2].category}
                            price={bebidas[2].price}
                            discount={bebidas[2].discount}
                            stock={bebidas[2].stock}
                            img={bebidas[2].images.url} />
                    </div>
                    <div className="carousel">
                        <CardComponent key={bebidas[3]._id}
                            id={bebidas[3]._id}
                            name={bebidas[3].name}
                            description={bebidas[3].description}
                            category={bebidas[3].category}
                            price={bebidas[3].price}
                            discount={bebidas[3].discount}
                            stock={bebidas[3].stock}
                            img={bebidas[3].images.url} />
                        <CardComponent key={bebidas[4]._id}
                            id={bebidas[4]._id}
                            name={bebidas[4].name}
                            description={bebidas[4].description}
                            category={bebidas[4].category}
                            price={bebidas[4].price}
                            discount={bebidas[4].discount}
                            stock={bebidas[4].stock}
                            img={bebidas[4].images.url} />
                        <CardComponent key={bebidas[5]._id}
                            id={bebidas[5]._id}
                            name={bebidas[5].name}
                            description={bebidas[5].description}
                            category={bebidas[5].category}
                            price={bebidas[5].price}
                            discount={bebidas[5].discount}
                            stock={bebidas[5].stock}
                            img={bebidas[5].images.url} />
                    </div>
                </Carousel>
            </Container>
        </>
    )
}

export default Offerts;


export const Container = styled.div`
    .banner{
        width: 100vw;
        margin: 2rem 0;
    }

    .carousel{
        display: flex;
        justify-content: center;
        align-items: center;
        height: auto;
        width: 100%;
    }

    .section{
        display: flex;
        justify-content: space-between;

        .section-cards{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            & img{
                margin: .5rem;
                width: 40%;
                height: auto;
                border: 1px solid #efefef;
                border-radius: 20px;
                box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.14);
                -webkit-box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.14);
                -moz-box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.14);
            }
        }

        .banner-rolling{
            width: 100%;
            height: auto;
        }
    }

    @media (min-width: 320px) and (max-width: 576px){
        .banner-rolling{
            display: none;
        }
    }
    
    

`;
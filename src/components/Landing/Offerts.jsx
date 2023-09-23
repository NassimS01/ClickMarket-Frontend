import { styled } from "styled-components";
import MediosPago from "../../assets/banners/bannerMediosPago.png"
import RollingCode from "../../assets/banners/RollingCode.gif"
import OfertasBebidas from "../../assets/banners/bannerOfertasBebidas.png"
import Uala from "../../assets/images/Landing/uala.png"
import MercadoPago from "../../assets/images/Landing/mercadopago.png"
import PersonalPay from "../../assets/images/Landing/personalpay.png"
import Galicia from "../../assets/images/Landing/galicia.png"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSelector } from "react-redux";
import CardComponent from "../Card/Card";
import Loader from "../Loader/Loader";

const Offerts = () => {
    const { allProducts } = useSelector((state) => state.product);

    if (!allProducts) {
        return <Loader />;
    }

    const bebidas = allProducts.filter((product) => product.category === "bebidas");

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
                        <a href="https://campus.rollingcodeschool.com/" target={"_blank"} rel="noreferrer"><img src={RollingCode} alt="banner rolling code" className="banner-rolling" /></a>
                    </div>
                </section>
                <img src={OfertasBebidas} alt="banner ofertas bebidas" className="banner" />
                <div className="render-cards">
                    {
                        bebidas && bebidas.map((bebida) => (
                            <CardComponent key={bebida._id}
                                id={bebida._id}
                                name={bebida.name}
                                description={bebida.description}
                                category={bebida.category}
                                price={bebida.price}
                                discount={bebida.discount}
                                stock={bebida.stock}
                                img={bebida.images.url} />
                        )
                        )
                    }
                </div>

            </Container>
        </>
    )
}

export default Offerts;


export const Container = styled.div`
    .banner{
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

    .render-cards{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 320px) and (max-width: 576px){
        .banner-rolling{
            display: none;
        }
    }
    

`;
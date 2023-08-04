import React from "react";
import { styled } from "styled-components";
import { CiDeliveryTruck, CiCreditCard1 } from "react-icons/ci";
import { BsShieldCheck } from "react-icons/bs";

const ExtraInfo = () => {
    return (
        <>
            <Container className="container">
                <div className="container-info">
                    <CiDeliveryTruck className="container-info-icon" />
                    <p><strong>Entregas en el día!</strong> Comprá todo lo que necesitas en nuestra tienda Online y recibílo gratis en el mismo día que lo pedís.</p>
                </div>
                <div className="container-info">
                    <CiCreditCard1 className="container-info-icon" />
                    <p><strong>Pagá comodo desde tu casa!</strong> Hácelo con tu tarjeta de débito o crédito favorita, en 12 cuotas y dale un descanso a tu bolsillo.</p>
                </div>
                <div className="container-info">
                    <BsShieldCheck className="container-info-icon" />
                    <p><strong>Click Market te protege!</strong> Si por algún error no recibiste tu compra o queres cancelar tu pedido, te devolvemos tu dinero.</p>
                </div>
            </Container>
        </>
    );
}

export default ExtraInfo;

const Container = styled.div`
    width: 100%;
    display: flex;
    margin: 1rem auto;

    .container-info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: thin solid gray;
        border-radius: 10px;
        margin: auto .5rem;
        padding: 1rem; 
        width: 100%;
        text-align: center;
        box-shadow: gray 5px 5px 15px;
    }

    .container-info-icon{
        font-size: 5rem;
    }

    p{
        border-top: thin solid black;
        flex-grow: 1;
    }

    @media screen and (max-width: 576px){
        flex-wrap: wrap;

        .container-info{
            margin: .5rem;
        }

        .container-info-icon{
            font-size: 4rem;
        }

        p{
            font-size:.8rem;
        }
    }
`;
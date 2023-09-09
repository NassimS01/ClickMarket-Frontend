import React from "react";
import { CiDeliveryTruck, CiCreditCard1 } from "react-icons/ci";
import { BsShieldCheck } from "react-icons/bs";
import { Container } from "./ExtraInfoStyles";

const ExtraInfo = () => {
  return (
    <>
      <Container className="container">
        <div className="container-info">
          <CiDeliveryTruck className="container-info-icon" />
          <p className="title-extraInfo">Envíos</p>
          <p>
            Comprá todo lo que necesitas en nuestra tienda Online y recibílo
            gratis en el mismo día que lo pedís.
          </p>
        </div>
        <div className="container-info">
          <CiCreditCard1 className="container-info-icon" />
          <p className="title-extraInfo">Pagá comodo desde tu casa!</p>
          <p>
            Hácelo con tu tarjeta de débito o crédito favorita, en 12 cuotas y
            dale un descanso a tu bolsillo.
          </p>
        </div>
        <div className="container-info">
          <BsShieldCheck className="container-info-icon" />
          <p className="title-extraInfo">Click Market te protege!</p>
          <p>
            Si por algún error no recibiste tu compra o queres cancelar tu
            pedido, te devolvemos tu dinero.
          </p>
        </div>
      </Container>
    </>
  );
};

export default ExtraInfo;
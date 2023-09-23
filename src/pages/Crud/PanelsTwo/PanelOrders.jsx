import { server } from "../../../server";
import { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { formatPrice } from "../../../utils/functions";

const PanelOrders = () => {
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const openModalWithOrder = (order) => {
    setSelectedOrder(order);
    setModalVisible(true);
  };

  useEffect(() => {
    axios
      .get(`${server}/stripe/get-all-orders`, {
        withCredentials: true,
      })
      .then((res) => {
        setData(res.data.order);
        console.log(data)
      });
  }, []);


  return (<>
    <Container>
      <h2>Pedidos</h2>
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1">Usuario</div>
          <div className="col col-2">Estado</div>
          <div className="col col-3">Envío</div>
          <div className="col col-4">Subtotal</div>
          <div className="col col-5">Total</div>
          <div className="col col-6">Detalles</div>
        </li>
        {data.lenght == 0 ? (<h3 className="title">Todavía no hay pedidos pendientes de entrega</h3>) : (
          data.map((order) => (
            <li key={order._id} className="table-row">
              <div className="col col-1" data-label="Usuario">{order.shipping.email}</div>
              <div className="col col-2" data-label="Estado">{order.payment_status === "paid" ? "Pagado" : "Pendiente de Pago"}</div>
              <div className="col col-3" data-label="Envío">{order.delivery_status}</div>
              <div className="col col-4" data-label="Subtotal">{formatPrice(order.subtotal)}</div>
              <div className="col col-5" data-label="Total">{formatPrice(order.total)}</div>
              <div className="col col-6" data-label="Detalles"><button className="modal-btn" onClick={() => openModalWithOrder(order)}>...</button></div>
            </li>
          ))
        )}
      </ul>
    </Container>
    {modalVisible && selectedOrder && (
      <Modal>
        <ModalContent>
          <h2>Detalles de la Orden</h2>
          <hr />
          {selectedOrder && (
            <>
              <p><b>Orden N°:</b> {selectedOrder._id}</p>
              <p><b>Nombre:</b> {selectedOrder.shipping.name}</p>
              <p><b>Día de Compra:</b> {selectedOrder.purchaseDate.slice(0, 10)}</p>
              <p><b>Dirección:</b> {selectedOrder.shipping.address.city} - {selectedOrder.shipping.address.line1}</p>
              <p><b>CP:</b> {selectedOrder.shipping.address.postal_code}</p>
              <p><b>Provincia:</b> {selectedOrder.shipping.address.state}</p>
              <p><b>Productos:</b>{selectedOrder.products.map((prod) => (<p key={prod._id}>{prod.name} - <i>{prod.quantity} unidad(es)</i></p>))}</p>
            </>
          )}
          <button onClick={() => setModalVisible(false)} className="close-modal">Cerrar</button>
        </ModalContent>
      </Modal>
    )}



  </>
  )
}

export default PanelOrders;

const Container = styled.div`
  padding: 0 10px;
  margin-left: auto;
  margin-right: auto;

h2 {
  font-size: 26px;
  margin: 20px 0;
  text-align: center;
}

.responsive-table {
  display: flex;
  flex-direction: column;
  align-items: space-between;
  width: 90vw;
  li {
    font-size: 14px;
    border-radius: 3px;
    padding: 25px 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .table-header {
    font-weight: bold;
    color: gray;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }
  .table-row {
    background-color: #ffffff;
    box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);

    .modal-btn{
      border: none;
      border-radius: 12px;
      background-color: var(--colorPrimary);
      color: #fff;
      cursor: pointer;
      font-weight: 400;
      font-size: 16px;
      width: 50px;
    }

    .col-1{
      font-weight: bold;
    }

    .col-2{
      color: green;
      font-weight: bold;
    }

    .col-3{
      color: red;
      font-weight: bold;
    }

    .col-4{
      font-weight: bold;
      font-style: italic;
    }

    .col-5{
      font-weight: bold;
    }
  }

  .col-1 {
    flex-basis: 25%;
  }
  .col-2 {
    flex-basis: 10%;
  }
  .col-3 {
    flex-basis: 10%;
  }
  .col-4 {
    flex-basis: 10%;
  }
  .col-5 {
    flex-basis: 10%;
  }
  .col-6 {
    flex-basis: 10%;
  }
  
  @media all and (max-width: 767px) {
    .table-row{
      .col-2{
        color: green;
        font-weight: bold;
      }
    }
    .table-header {
      display: none;
    }
    li {
      display: block;
    }
    .col {
      font-size: 12px;
      flex-basis: 100%;
    }
    .col {
      display: flex;
      padding: 10px 0;
      &:before {
        color: #6C7A89;
        padding-right: 10px;
        content: attr(data-label);
        flex-basis: 50%;
        text-align: left;
      }
    }
  }
}
`;

const Modal = styled.div`
  transition: all ease-in-out 1s;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; 
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 2rem 4rem;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  h2{
    text-align: center;
  }

  hr{
    margin: 1rem 0;
  }

  .close-modal{
    padding: 10px;
    border: none;
    border-radius: 12px;
    background-color: var(--colorPrimary);
    color: #fff;
    cursor: pointer;
    font-weight: 400;
    font-size: 16px;
    width: 50%;
    margin: 1rem auto;
  }
`;
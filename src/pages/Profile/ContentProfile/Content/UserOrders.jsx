import { useDispatch, useSelector } from "react-redux";
import { getUserOrder } from "../../../../redux/actions/user";
import { useEffect } from "react";
import { Order, OrderProduct } from "./userOrderStyles";
import { formatPrice } from "../../../../utils/functions";

const UserOrders = () => {
  const dispatch = useDispatch();
  const { userOrder } = useSelector((state) => state.user);

  const idProducts = userOrder.reduce((acc, cur) => {
    if (!acc[cur.customerId]) {
      acc[cur.customerId] = [];
    }

    acc[cur.customerId].push(cur);

    return acc;
  }, {});

  const arrayOfArrays = Object.values(idProducts);

  const arrayOfObjects = [];

  arrayOfArrays.forEach((subArray) => {
    const obj = {};
    subArray.forEach((item) => {
      Object.assign(obj, item);
    });
    arrayOfObjects.push(obj);
  });


  useEffect(() => {
    dispatch(getUserOrder());
  }, [dispatch]);
  return (
    <>
      <h2 className="title">
        {userOrder.length == 0 ? "Todavía no tenés ningun pedido" : "Mis Pedidos"}
      </h2>
    <Order>
      {arrayOfObjects.map((customer) => (
        <OrderProduct key={customer.customerId}>
          <div className="customer-info" key={customer.customerId}>
            <h2>Datos del pedido:</h2>
            <p>
              Código de envío: <span>{customer.customerId}</span>
            </p>
            <p>
              Provincia: <span>{customer.shipping.address.state}</span>
            </p>
            <p>
              Ciudad: <span>{customer.shipping.address.city}</span>
            </p>
            <p>
              Código postal:{" "}
              <span>{customer.shipping.address.postal_code}</span>
            </p>
            <p>
              Domicilio: <span>{customer.shipping.address.line1}</span>
            </p>
            <p>
              Email: <span>{customer.shipping.email}</span>
            </p>
            <p>
              Nombre y Apellido: <span>{customer.shipping.name}</span>
            </p>
          <h2>Pedido:</h2>
          </div>
          {customer.products.map((product) => (
            <div className="infoProductCart" key={product.productId}>
              <div className="imgProductOrder">
                <img src={product.images} alt={product.name} />
              </div>
              <div>
                <div className="product-name">
                  <p className="product">Producto:</p>
                  <p>{product.name}</p>
                </div>
                <div className="quantity">
                  <p>Cantidad: {product.quantity}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="subTotal">
            <p>Total:</p>
            <span>{formatPrice(customer.total / 100)}</span>
          </div>
        </OrderProduct>
      ))}
    </Order>
  </>);
};

export default UserOrders;

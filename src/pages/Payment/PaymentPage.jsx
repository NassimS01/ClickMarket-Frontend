import { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiLogoMastercard, BiLogoVisa } from "react-icons/bi";
import { BsBuildingAdd, BsCreditCard2Front, BsHouseDoor } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { getUserCart } from "../../redux/actions/user";
import { alertTime } from "../../utils/alerts";
import { addOrder } from "../../redux/actions/order";
import { useNavigate } from "react-router";
import axios from "axios";
import { server } from "../../server";

const PaymentPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userCart, isAuthenticated, user } = useSelector(
    (state) => state.user
  );
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState(0);
  const [cardName, setCardName] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState(0);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState(0);
  const [cvv, setCvv] = useState(0);

  let totalPrice = 0;

  if (userCart.length === 0) {
    navigate("/");
  }

  const clearUserCart = async () => {
    try {
      await axios.delete(`${server}/user/clear-user-cart`, {
        withCredentials: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const visaRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  const zipCode = /^\d{5}(?:[-\s]\d{4})?$/;
  const userAddress = /^[a-zA-Z0-9\s\-\#]{5,}$/;
  const userCardName = /^.{8,}$/;

  useEffect(() => {
    dispatch(getUserCart());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userAddress.test(address)) {
      return alertTime(
        "Verifica la direccion ingresada",
        "error",
        "red",
        "white"
      );
    }

    if (!userAddress.test(city)) {
      return alertTime("Verifica la ciudad ingresada", "error", "red", "white");
    }

    if (!userCardName.test(cardName)) {
      return alertTime(
        "Verifica el nombre de tarjeta ingresado",
        "error",
        "red",
        "white"
      );
    }

    if (!isNaN(address) || !isNaN(city) || !isNaN(cardName)) {
      return alertTime(
        "Estas ingresando datos incorrectos",
        "error",
        "red",
        "white"
      );
    }

    if (!zipCode.test(zip)) {
      return alertTime("Código Postal incorrecto", "error", "red", "white");
    }

    if (!visaRegex.test(creditCardNumber)) {
      return alertTime(
        "El número de tarjeta VISA es incorrecto",
        "error",
        "red",
        "white"
      );
    }

    if (year < 2022) {
      return alertTime("Tu tarjeta está vencida", "error", "red", "white");
    } else if (year > 2035) {
      return alertTime(
        "Verifica el año de vencimiento de tu tarjeta",
        "error",
        "red",
        "white"
      );
    }

    const currentDate = new Date();
    const orderId = `ORDER-${currentDate.getTime()}`;
    const userEmail = user.email;
    const cartProducts = userCart.map((product) => ({
      productId: product._id,
      quantity: 1,
    }));

    try {
      await dispatch(
        addOrder(userEmail, address, city, zip, orderId, cartProducts)
      );
      alertTime(
        "Gracias por comprar en Click Market!",
        "success",
        "green",
        "white"
      );

      clearUserCart();
      window.location.reload();
    } catch (error) {
      alertTime("Error al crear orden de compra", "error", "red", "white");
    }
  };

  return (
    <>
      <Container>
        <div className="col-25">
          <div className="container-left">
            <div className="info-orden">
              <h3>Carrito</h3>
              <span className="price">
                <AiOutlineShoppingCart size="20px" /> <b>{userCart.length}</b>
              </span>
            </div>
            <div className="info-products">
              {userCart.map((product) => (
                <p key={product._id}>
                  {product.name} <span className="price">${product.price}</span>
                </p>
              ))}
            </div>
            <p>
              Costo de envio<span className="price">$3000</span>
            </p>
            <hr />
            <p>
              Total{" "}
              <span className="price">
                <b>{totalPrice + 3000}</b>
              </span>
            </p>
          </div>
        </div>
        <div className="col-75">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <Container>
                <div className="col-50">
                  <h3>Dirección de Entrega</h3>
                  <label htmlFor="adr">
                    <BsHouseDoor /> Dirección
                  </label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    value={address}
                    placeholder="Piso, Calle, Número"
                    required
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <label htmlFor="city">
                    <BsBuildingAdd /> Ciudad
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={city}
                    placeholder="Ciudad/Localidad"
                    required
                    onChange={(e) => setCity(e.target.value)}
                  />

                  <Container>
                    <div className="col-50">
                      <label htmlFor="zip">Código Postal</label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        value={zip}
                        placeholder="XXXX"
                        required
                        onChange={(e) => setZip(e.target.value)}
                      />
                    </div>
                  </Container>
                </div>

                <div className="col-50">
                  <h3>Métodos de Pago</h3>
                  <label htmlFor="fname">Tarjetas Aceptadas</label>
                  <div className="icon-container">
                    <BiLogoVisa />
                    <BiLogoMastercard />
                    <BsCreditCard2Front />
                  </div>
                  <label htmlFor="cname">Nombre en la Tarjeta</label>
                  <input
                    type="text"
                    id="cname"
                    name="cardname"
                    value={cardName}
                    placeholder="NOMBRE TARJETA"
                    required
                    onChange={(e) => setCardName(e.target.value)}
                  />
                  <label htmlFor="ccnum">16 dígitos de la Tarjeta</label>
                  <input
                    type="number"
                    id="ccnum"
                    name="cardnumber"
                    value={creditCardNumber}
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    maxLength="16"
                    required
                    onChange={(e) => setCreditCardNumber(e.target.value)}
                  />
                  <select
                    id="expmonth"
                    name="expmonth"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                  >
                    <option value="01">Enero</option>
                    <option value="02">Febrero</option>
                    <option value="03">Marzo</option>
                    <option value="04">Abril</option>
                    <option value="05">Mayo</option>
                    <option value="06">Junio</option>
                    <option value="07">Julio</option>
                    <option value="08">Agosto</option>
                    <option value="09">Septiembre</option>
                    <option value="10">Octubre</option>
                    <option value="11">Noviembre</option>
                    <option value="12">Diciembre</option>
                  </select>
                  <Container>
                    <div className="col-50">
                      <label htmlFor="expyear">Año de Exp</label>
                      <input
                        type="number"
                        id="expyear"
                        name="expyear"
                        value={year}
                        placeholder="YYYY"
                        required
                        onChange={(e) => setYear(e.target.value)}
                      />
                    </div>
                    <div className="col-50">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        type="number"
                        id="cvv"
                        name="cvv"
                        value={cvv}
                        placeholder="XXX"
                        required
                        onChange={(e) => setCvv(e.target.value)}
                      />
                    </div>
                  </Container>
                </div>
              </Container>
              <input type="submit" value="Confirmar Compra" className="btn" />
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PaymentPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 -16px;
  padding: 1rem;

  h1 {
    text-align: center;
  }

  .col-25 {
    flex: 25%;
  }

  .col-50 {
    flex: 50%;
  }

  .col-75 {
    flex: 75%;
  }

  .col-25,
  .col-50,
  .col-75 {
    padding: 0 16px;
  }

  .container-left {
    width: 450px;
    height: 400px;
    background-color: #fff;
    padding: 15px 20px;
    box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.14);
    border-radius: 20px;
  }

  .info-orden {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  } 

  .info-products {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10px;

    p {
      font-weight: 500;
    }
  }
  
  input[type="text"] {
    width: 100%;
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  label {
    margin-bottom: 10px;
    display: block;
  }

  .icon-container {
    margin-bottom: 20px;
    padding: 7px 0;
    font-size: 24px;
  }

  .btn {
    background-color: #4caf50;
    color: white;
    padding: 12px;
    margin: 10px 0;
    border: none;
    width: 100%;
    border-radius: 3px;
    cursor: pointer;
    font-size: 17px;
  }

  .btn:hover {
    background-color: #45a049;
  }

  a {
    color: #2196f3;
  }

  hr {
    border: 1px solid lightgrey;
  }

  span.price {
    float: right;
    color: grey;
  }

  @media screen and (min-width: 768px) {
    .row {
      flex-direction: column;
    }
    .col-25 {
      margin-bottom: 20px;
    }
  }
`;

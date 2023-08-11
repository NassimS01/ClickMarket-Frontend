import React, { useEffect, useState } from "react";
import { CartContainer } from "./CartStyles";
import { ButtonGlobal } from "../../components/ButtonGlobal/ButtonGlobal";
import { ButtonLink } from "../../components/Header/Wrapper";

import ProductCart from "../../components/ProductCart/ProductCart";
import { formatPrice } from "../../../../backend/utils/functions";

const Cart = () => {
    // const [data, setData] = useState([
    //     { id: 1, name: "Item 1" },
    //     { id: 2, name: "Item 2" },
    //     { id: 3, name: "Item 3" },
    // ]);

    // useEffect(() => {
    //     const localStorageData = localStorage.getItem("cart");

    //     setData(JSON.parse(localStorageData));
    // }, []);

    // const productsData = data.map((products) => products.img);
    // const title = data.map((products) => products.name);
    // const price = data.map((products) => products.price);

    const item = 1;
    return (
        <CartContainer>
            <h2 className="title">
                {item == 0 ? "El carrito está vacío" : "Mi carrito"}
            </h2>
            {item == 0 ? (
                ""
            ) : (
                <div className="cart">
                    <div className="cartSectionLeft">
                        {/* {data.map((product) => (
                            <ProductCart key={product.id} {...product}></ProductCart>
                        ))} */}
                        <ButtonGlobal>Limpiar carrito</ButtonGlobal>
                    </div>
                    <div className="cartSectionRigth">
                        <h2>Orden</h2>
                        <div className="infoOrden">
                            <div className="infoItem">
                                <p>
                                    {item <= 1
                                        ? "Precio de 1 item seleccionado"
                                        : `Precio de ${item} items seleccionados`}
                                </p>
                                <span>{formatPrice(40000)}</span>
                            </div>
                            <div className="infoItem">
                                <p>Descuento</p>
                                <span>0.00</span>
                            </div>
                            <div className="infoItem">
                                <p>Costo de envío</p>
                                <span>{formatPrice(3000)}</span>
                            </div>
                        </div>
                        <div className="ordenTotal">
                            <div className="infoItem">
                                <p className="total">Total:</p>
                                <span>{formatPrice(43000)}</span>
                            </div>
                            <ButtonGlobal green="true">Comprar</ButtonGlobal>
                        </div>
                    </div>
                </div>
            )}
        </CartContainer>
    );
};

export default Cart;
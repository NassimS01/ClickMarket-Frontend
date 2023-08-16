import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { formatPrice } from "../../../../../../backend/utils/functions";
import { ButtonGlobal } from "../../../../components/ButtonGlobal/ButtonGlobal";
import ProductCart from "../../../../components/ProductCart/ProductCart";
import { getUserCart } from "../../../../redux/actions/user";


const UserCart = () => {
    const dispatch = useDispatch();
    const { userCart } = useSelector((state) => state.user);
    const [totalPrice, setTotalPrice] = useState(0);

    const item = userCart.length;

    useEffect(() => {
        if (userCart) {
            const total = userCart.reduce((accumulator, product) => {
                return accumulator + product.price;
            }, 0);
            setTotalPrice(total);
        }
    }, [userCart]);

    useEffect(() => {
        dispatch(getUserCart());
    }, [dispatch]);

    return (
        <>
            <Container>
                <div>
                    {userCart.length == 0? (<div>Todavia no hay productos en tu carrito</div>): (userCart.map((product) => (
                        <ProductCart key={product._id} id={product._id} name={product.name} price={product.price} img={product.images.url} />
                    ))
                    )}
                </div>
                {
                    userCart ? (
                        <div className="cartSectionRight">
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
                                    <span>{formatPrice(totalPrice)}</span>
                                </div>
                                <ButtonGlobal green="true">Comprar</ButtonGlobal>
                            </div>
                        </div>
                    ) : (

                        <div>
                            Todavia no hay productos en tu carrito
                        </div>
                    )
                }
            </Container>

        </>
    )
}

export default UserCart;


const Container = styled.div`
    display: flex;

    .cartSectionRight{
        position: sticky;
        top: 0;
        right: 0;
        margin-left: 1rem;
    }
`;
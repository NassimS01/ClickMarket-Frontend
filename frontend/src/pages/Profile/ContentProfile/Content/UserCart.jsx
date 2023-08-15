import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCart from "../../../../components/ProductCart/ProductCart";
import { getUserCart } from "../../../../redux/actions/user";

const UserCart = () =>{
    const dispatch = useDispatch();
    const {userCart} = useSelector((state) => state.user)

    // console.log(userCart)


    useEffect(() => {
        dispatch(getUserCart());
    }, [dispatch]);
    
    return(
        <>
        <div>
            {userCart && userCart.map((product) => (
                <ProductCart key={product._id} id={product._id} name={product.name} price={product.price} img={product.images.url}/>
            ))}
        </div>
        </>
    )
}

export default UserCart;
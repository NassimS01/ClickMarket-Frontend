import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardComponent from "../../../../components/Card/Card";
import { getUserWishlist } from "../../../../redux/actions/user";

const UserWishlist = () => {
    const { userWishlist, isAuthenticated } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    console.log(userWishlist)


    useEffect(() => {
        dispatch(getUserWishlist());
    }, [dispatch]);


    return (
        <>
            {
                userWishlist && userWishlist.map((product) => (
                    <CardComponent
                        key={product._id}
                        id={product._id}
                        name={product.name}
                        descrip={product.description}
                        category={product.category}
                        price={product.price}
                        discount={product.discount}
                        stock={product.stock}
                        img={product.images.url}
                    />
                ))
            }
        </>
    )
}

export default UserWishlist;
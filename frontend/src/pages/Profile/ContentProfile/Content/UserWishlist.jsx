import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import CardComponent from "../../../../components/Card/Card";
import { getUserWishlist } from "../../../../redux/actions/user";
import { ContainerCards } from "../../../../components/Card/CardStyles";

const UserWishlist = () => {
  const { userWishlist } = useSelector((state) => state.user);
  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserWishlist());
    }, []);


  return (
    <>
      <h2 className="title">Favoritos</h2>
      <Container>
      <ContainerCards>

        {userWishlist &&
          userWishlist.map((product) => (
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
          ))}
      </ContainerCards>
      </Container>
    </>
  );
};

export default UserWishlist;

const Container = styled.div`
  display: flex;
`;

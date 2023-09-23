import { useEffect} from "react";
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
      {userWishlist.length == 0 ? (
        <h3 className="title">Tu lista de favoritos se encuentra vacía</h3>
      ) : (
        <>
          <h2 className="title">Favoritos</h2>
          <Container>
            <ContainerCards>
              {userWishlist &&
                userWishlist.map((product) => (
                  <CardComponent
                    key={product._id || product.productId}
                    id={product._id || product.productId}
                    name={product.name}
                    descrip={product.description}
                    category={product.category}
                    price={product.price}
                    discount={product.discount}
                    stock={product.stock}
                    img={product.img || product.images.url}
                  />
                ))}
            </ContainerCards>
          </Container>
        </>
      )}
    </>
  );
};

export default UserWishlist;

const Container = styled.div`
  display: flex;
`;

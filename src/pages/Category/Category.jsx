import { useQuery } from "react-query";
import Card from "../../components/Card/Card";
import axios from "axios";
import CardComponent from "../../components/Card/Card";
import { ContainerCards } from "../../components/Card/CardStyles";

const fetchCategory = () => {
  return axios.get("http://localhost:3006/productos");
};

const Category = () => {
  const { data } = useQuery("category", fetchCategory);

  return (
    <>
      <ContainerCards>
        {data?.data.map((product) => (
          <CardComponent key={product.id} {...product} />
        ))}
      </ContainerCards>
    </>
  );
};

export default Category;

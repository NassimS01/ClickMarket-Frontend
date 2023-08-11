import axios from "axios";
import CardComponent from "../../components/Card/Card";
import { ContainerCards } from "../../components/Card/CardStyles";
import { SectionCategory } from "./CategoryStyles";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import { useSelector } from "react-redux";

// const fetchCategory = () => {
//   return axios.get("http://localhost:3006/productos");
// };



const Category = () => {
  // const { data } = useQuery("category", fetchCategory);
  // console.log(ProductsFilter);
  const products = useSelector((state) => state.products.products);
  return (
    <SectionCategory>
      <FilterComponent></FilterComponent>
      <ContainerCards>
        {/* {Object.entries(products).map(([, products]) =>
          products.map((product) => (
            <CardComponent key={product.id} {...product} />
          ))
        )} */}
      </ContainerCards>
    </SectionCategory>
  );
};

export default Category;

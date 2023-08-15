import CardComponent from "../../components/Card/Card";
import { ContainerCards } from "../../components/Card/CardStyles";
import { SectionCategory } from "./CategoryStyles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchFilteredProducts } from "../../redux/actions/filterProducts";
import { useLocation, useParams } from "react-router-dom";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import { AiOutlineSearch } from "react-icons/ai";

const Category = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const filteredProducts = useSelector((state) => state.productos.filteredProducts);

  // Barra de búsqueda
  const [search, setSearch] = useState("todos");

  useEffect(() => {
    dispatch(fetchFilteredProducts());
  }, [dispatch]);

  const pathnameSegments = location.pathname.split("/");

  // El último segmento del pathname contendrá el valor que deseas
  const lastSegment = pathnameSegments[pathnameSegments.length - 1];


  const searchBar = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <SectionCategory>
      <h3 className="title">Buscá tus productos</h3>
      <div className="categories">
        <div className="filters">
          <div className="searchContainer">
            <AiOutlineSearch className="iconSearch" />
            <input
              type="search"
              placeholder="Ingrese un producto"
              className="input"
              onChange={(e) => searchBar(e)}
            />
          </div>
          <FilterComponent></FilterComponent>
        </div>
        <div className="containerCards">
          {Object.values(filteredProducts)
            .filter((product) => {
              return search.toLowerCase() == "todos"
                ? product
                : product.name.toLowerCase().includes(search);
            })
            .map((product) =>
              location.pathname == "/categorias/todos" ? (
                <CardComponent key={product.id} {...product} id={product._id} img={product.images.url}></CardComponent>
              ) : location.pathname == `/categorias/${product.category}` ? (
                <CardComponent key={product.id} {...product} id={product._id} img={product.images.url}></CardComponent>
              ) : (
                ""
              )
            )}
        </div>
      </div>
    </SectionCategory>
  );
};

export default Category;

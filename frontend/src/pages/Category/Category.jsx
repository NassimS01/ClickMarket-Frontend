import CardComponent from "../../components/Card/Card";
import { SectionCategory } from "./CategoryStyles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchFilteredProducts } from "../../redux/actions/filterProducts";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import { AiOutlineSearch } from "react-icons/ai";
import { ButtonGlobal } from "../../components/ButtonGlobal/ButtonGlobal";
import { useNavigate, useParams } from "react-router-dom";

const Category = () => {
  const location = useLocation();
  const dispatch = useDispatch();
<<<<<<< HEAD
  const filteredProducts = useSelector((state) => state.productos.filteredProducts);

  // Barra de búsqueda
  const [search, setSearch] = useState("todos");

=======
  const [currentPage, setCurrentPage] = useState(0);
  const [activeCategory, setActiveCategory] = useState("todos");
  const [filteredAndPaginatedProducts, setFilteredAndPaginatedProducts] =
    useState([]);
  const productsPerPage = 10;
  const [search, setSearch] = useState("todos");
  const [activeFilters, setActiveFilters] = useState([]);
  const { category } = useParams();
  const navigate = useNavigate()

  const filteredProducts = useSelector(
    (state) => state.productos.filteredProducts
  );

>>>>>>> cab18ebfc8fc70c75f37e5ecce7ac12c3a7a52a6
  useEffect(() => {
    dispatch(fetchFilteredProducts());
  }, [dispatch]);


  useEffect(() => {
    if (category) {
      setActiveCategory(category);
    }
  }, [category]);

  useEffect(() => {
    const filteredAndPaginatedProducts = filteredProducts
      .filter(
        (product) =>
          activeFilters.length === 0 ||
          activeFilters.includes("todos") ||
          activeFilters.includes(product.category)
      )
      .filter(
        (product) =>
          search === "todos" || product.name.toLowerCase().includes(search)
      )
      .slice(
        currentPage * productsPerPage,
        (currentPage + 1) * productsPerPage
      );

    setFilteredAndPaginatedProducts(filteredAndPaginatedProducts);
  }, [filteredProducts, currentPage, productsPerPage, search, activeFilters]);

  const searchBar = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleCategorySelect = (category) => {

    setActiveFilters([category]);
    setActiveCategory(category);
    setCurrentPage(0); // Reiniciar la página al cambiar de categoría

    // navigate(`/categorias/${category}`)

    // if(location.pathname == "/categorias/todos") {
    //   setActiveFilters([])
    // }

  };

  console.log(filteredAndPaginatedProducts);

  // console.log(activeCategory);
  // console.log(activeFilters)



  return (
    <SectionCategory>
      <div className="products">
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
            <FilterComponent
              onCategorySelect={handleCategorySelect}
            ></FilterComponent>
          </div>
          <div className="containerCards">
            {filteredAndPaginatedProducts.map((product) =>
              location.pathname == "/categorias/todos" ? (
<<<<<<< HEAD
                <CardComponent key={product.id} {...product} id={product._id} img={product.images.url}></CardComponent>
              ) : location.pathname == `/categorias/${product.category}` ? (
                <CardComponent key={product.id} {...product} id={product._id} img={product.images.url}></CardComponent>
=======
                <CardComponent
                  key={product._id}
                  {...product}
                  img={product.images.url}
                ></CardComponent>
              ) : location.pathname == `/categorias/${product.category}` ? (
                <CardComponent
                  key={product._id}
                  {...product}
                  img={product.images.url}
                ></CardComponent>
>>>>>>> cab18ebfc8fc70c75f37e5ecce7ac12c3a7a52a6
              ) : (
                ""
              )
            )}

            {/* {search == "todos"
              ? Object.values(currentPageProducts).map((product) => (
                  <CardComponent
                    key={product._id}
                    {...product}
                    img={product.images.url}
                  ></CardComponent>
                ))
              : search == search
              ? Object.values(filteredProducts)
                  .filter((product) => {
                    return search.toLowerCase() == "todos"
                      ? product
                      : product.name.toLowerCase().includes(search);
                  })
                  .map((product) =>
                    location.pathname == "/categorias/todos" ? (
                      <CardComponent
                        key={product._id}
                        {...product}
                        img={product.images.url}
                      ></CardComponent>
                    ) : location.pathname ==
                      `/categorias/${product.category}` ? (
                      <CardComponent
                        key={product._id}
                        {...product}
                        img={product.images.url}
                      ></CardComponent>
                    ) : (
                      ""
                    )
                  )
              : ""} */}

            {/* {Object.values(filteredProducts)
              .filter((product) => {
                return search.toLowerCase() == "todos"
                  ? product
                  : product.name.toLowerCase().includes(search);
              })
              .map((product) =>
                location.pathname == "/categorias/todos" ? (
                  <CardComponent
                    key={product._id}
                    {...product}
                    img={product.images.url}
                  ></CardComponent>
                ) : location.pathname == `/categorias/${product.category}` ? (
                  <CardComponent
                    key={product._id}
                    {...product}
                    img={product.images.url}
                  ></CardComponent>
                ) : (
                  ""
                )
              )} */}
          </div>
        </div>
      </div>
      <div className="paginationButtons">
        <ButtonGlobal
          pagination="true"
          onClick={() =>
            setCurrentPage((prevPage) => Math.max(prevPage - 1, 0))
          }
          disabled={currentPage === 0}
        >
          Anterior
        </ButtonGlobal>
        <ButtonGlobal
          pagination="true"
          onClick={() =>
            setCurrentPage((prevPage) =>
              Math.min(
                prevPage + 1,
                Math.ceil(
                  Object.values(filteredProducts).length / productsPerPage
                )
              )
            )
          }
          disabled={
            currentPage ===
            Math.ceil(
              Object.values(filteredProducts).length / productsPerPage
            ) -
              1
          }
        >
          Siguiente
        </ButtonGlobal>
      </div>
    </SectionCategory>
  );
};

export default Category;

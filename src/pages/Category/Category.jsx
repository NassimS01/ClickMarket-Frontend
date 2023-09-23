import CardComponent from "../../components/Card/Card";
import { SectionCategory } from "./CategoryStyles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchFilteredProducts } from "../../redux/actions/filterProducts";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import { AiOutlineSearch } from "react-icons/ai";
import { ButtonGlobal } from "../../components/ButtonGlobal/ButtonGlobal";
import { useNavigate, useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const Category = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const [filteredAndPaginatedProducts, setFilteredAndPaginatedProducts] =
    useState([]);
  const productsPerPage = 10;
  const [search, setSearch] = useState("todos");
  const [activeFilters, setActiveFilters] = useState([]);
  const { category } = useParams();
  const navigate = useNavigate();

  const filteredProducts = useSelector(
    (state) => state.productos.filteredProducts
  );

  useEffect(() => {
    dispatch(fetchFilteredProducts());
  }, [dispatch]);

  useEffect(() => {
    if (category) {
      setActiveFilters([category]);
    }
    window.scrollTo(0, 0);
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
      );

    setFilteredAndPaginatedProducts(filteredAndPaginatedProducts);
    setCurrentPage(0);
  }, [filteredProducts, search, activeFilters]);

  const searchBar = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleCategorySelect = (category) => {
    setActiveFilters([category]);
    setCurrentPage(0);

    navigate(`/categorias/${category}`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const totalPages = Math.ceil(
    filteredAndPaginatedProducts.length / productsPerPage
  );

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
            {filteredProducts.length >= 1 ? (
              filteredAndPaginatedProducts
                .slice(
                  currentPage * productsPerPage,
                  (currentPage + 1) * productsPerPage
                )
                .map((product) => (
                  <CardComponent
                    key={product._id}
                    id={product._id}
                    {...product}
                    img={product.images.url}
                  />
                ))
            ) : (
              <div
                className="loading"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <CircularProgress size="60px" style={{ marginTop: "50px" }} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="paginationButtons">
        <ButtonGlobal
          pagination="true"
          onClick={() =>
            handlePageChange((prevPage) => Math.max(prevPage - 1, 0))
          }
          disabled={currentPage === 0}
        >
          Anterior
        </ButtonGlobal>
        <ButtonGlobal
          pagination="true"
          onClick={() =>
            handlePageChange((prevPage) =>
              Math.min(prevPage + 1, totalPages - 1)
            )
          }
          disabled={currentPage === totalPages - 1}
        >
          Siguiente
        </ButtonGlobal>
      </div>
    </SectionCategory>
  );
};

export default Category;

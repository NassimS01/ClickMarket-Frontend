import CardComponent from "../../components/Card/Card";
import { SectionCategory } from "./CategoryStyles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchFilteredProducts } from "../../redux/actions/filterProducts";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import { AiOutlineSearch } from "react-icons/ai";
import { ButtonGlobal } from "../../components/ButtonGlobal/ButtonGlobal";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Category = () => {
  const location = useLocation();
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

  const totalPages = Math.ceil(filteredAndPaginatedProducts.length / productsPerPage)

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
            {filteredAndPaginatedProducts
              .slice(
                currentPage * productsPerPage,
                (currentPage + 1) * productsPerPage
              )
              .map((product) => (
                <CardComponent
                  key={product._id}
                  {...product}
                  img={product.images.url}
                />
              ))}
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
            setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1))
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

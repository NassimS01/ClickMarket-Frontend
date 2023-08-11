import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../redux/actions/product";
import axios from "axios";
import { TableStyled } from "./ProductsStyled";
import BtnDelete from "../BtnDelete/BtnDelete";
import BtnEdit from "../BtnEdit/BtnEdit";
import { server } from "../../../server";

const Products = () => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`${server}/products/admin-all-products`, { withCredentials: true }).then((res) => {
            setData(res.data.products);
        })
    }, []);

    const handleDelete = (id) => {
        dispatch(deleteProduct(id));
        window.location.reload();
    };
    // const [products, setProducts] = useState([]);
    // const [status, setStatus] = useState(null);

    // useEffect(() => {
    //     fetchProducts();
    //     /// Conexión a los eventos SSE del servidor para agregar o editar un producto
    //     const eventSource = new EventSource(
    //         `${server}/api/products-sse`
    //     );
    //     eventSource.onmessage = (event) => {
    //         const eventData = JSON.parse(event.data);
    //         const updatedProductId = eventData._id;

    //         setProducts((prevProducts) =>
    //             prevProducts.some((product) => product._id === updatedProductId)
    //                 ? prevProducts.map((product) =>
    //                     product._id === updatedProductId ? eventData : product
    //                 )
    //                 : [...prevProducts, eventData]
    //         );
    //     };

    //     return () => {
    //         eventSource.close();
    //     };
    // }, []);

    // const fetchProducts = () => {
    //     axios
    //         .get("http://localhost:3900/api/products")
    //         .then((res) => {
    //             console.log(res.data);
    //             setProducts(res.data.products);
    //             setStatus("success");
    //         })
    //         .catch((error) => {
    //             setStatus("error");
    //             console.error("Error fetching products:", error);
    //         });
    // };

    return (
        <>
            {data.length >= 1 ? (
                <div
                    id="products"
                    style={{
                        maxHeight: "400px",
                        overflowY: "auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "2em",
                    }}
                >
                    <TableStyled>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Descripción</th>
                                <th>Categoría</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((product) => (
                                <tr key={product._id}>
                                    <td>{product.name}</td>
                                    <td>${product.price}</td>
                                    <td>{product.description}</td>
                                    <td>{product.category}</td>
                                    <td style={{ display: "flex" }}>
                                        <BtnDelete product={product} handleDelete={handleDelete} />
                                        <BtnEdit productData={product} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </TableStyled>
                </div>
            ) : data.length === 0 && status === "success" ? (
                <div>
                    <h2 style={{ textAlign: "center" }}>No hay productos para mostrar</h2>
                </div>
            ) : (
                <div className="loading">
                    <h2 style={{ textAlign: "center" }}>Cargando....</h2>
                    <p style={{ textAlign: "center" }}>Espere mientras carga el contenido</p>
                </div>
            )}
        </>
    );
};

export default Products;
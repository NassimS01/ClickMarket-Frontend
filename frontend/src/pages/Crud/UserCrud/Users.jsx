import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  activeUser,
  deleteUser,
  getAllUsers,
} from "../../../redux/actions/user";
import axios from "axios";
import { server } from "../../../server";
import { TableStyled } from "../PanelsTwo/ProductsStyled";
import BtnDelete from "../BtnDelete/BtnDelete";
import BtnAccept from "../BtnAccept/BtnAccept";

const Users = ({ search }) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  // const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    axios
      .get(`${server}/user/admin-all-users`, {
        withCredentials: true,
      })
      .then((res) => {
        setData(res.data.users);
      });
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    window.location.reload();
  };

  const handleActive = (user, active) => {
    dispatch(activeUser(user._id, !active));
    window.location.reload();
  };

  return (
    <>
      {data.length >= 2 ? (
        <div
          id="users"
          style={{
            maxHeight: "800px",
            overflowY: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2em",
          }}
        >
          <TableStyled>
            <div className="containerNames">
              <p style={{ width: "20%" }}>Activo</p>
              <p style={{ width: "20%" }}>Nombre</p>
              <p style={{ width: "30%" }}>Email</p>
              <p style={{ width: "5%" }}>Rol</p>
              <p style={{ width: "10%" }}>Acciones</p>
            </div>

            {data
              .filter((user) => {
                return search.toLowerCase() == "todos"
                  ? user
                  : user.email.toLowerCase().includes(search);
              })
              .map((user) =>
                user.role == "user" ? (
                  <div className="container-info" key={user._id}>
                    {user.active == false ? (
                      <p
                        style={{
                          width: "20%",
                          fontWeight: "500",
                          textTransform: "capitalize",
                          color: "red",
                        }}
                      >
                        {user.active.toString()}
                      </p>
                    ) : (
                      <p
                        style={{
                          width: "20%",
                          fontWeight: "500",
                          textTransform: "capitalize",
                          color: "green",
                        }}
                      >
                        {user.active.toString()}
                      </p>
                    )}
                    <p style={{ width: "20%", fontWeight: "400" }}>
                      {user.name}
                    </p>
                    <p style={{ width: "30%", fontWeight: "500" }}>
                      {user.email.toLowerCase()}
                    </p>
                    <p style={{ width: "5%", fontWeight: "600" }}>
                      {user.role}
                    </p>
                    <div className="buttons" style={{ width: "10%" }}>
                      <BtnAccept user={user} handleActive={handleActive} />
                      <BtnDelete product={user} handleDelete={handleDelete} />
                    </div>
                  </div>
                ) : (
                  ""
                )
              )}
          </TableStyled>
        </div>
      ) : data.length === 0 && status === "success" ? (
        <div>
          <h2 style={{ textAlign: "center" }}>No hay productos para mostrar</h2>
        </div>
      ) : (
        <div className="loading">
          <h2 style={{ textAlign: "center" }}>Cargando....</h2>
          <p style={{ textAlign: "center" }}>
            Espere mientras carga el contenido
          </p>
        </div>
      )}
    </>
  );
};

export default Users;

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
import { alertConfirmCancel } from "../../../../../backend/utils/alerts";

const Users = ({ search }) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

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
    alertConfirmCancel("", "¿Deseas eliminar a este usuario?", "question", "Confirmar", "Cancelar", () => {
      dispatch(deleteUser(id));
      window.location.reload();
    })
  };

  const handleActive = (user, active) => {
    if (!active) {
      alertConfirmCancel("", "¿Deseas habilitar a este usuario?", "question", "Confirmar", "Cancelar", () => {
        dispatch(activeUser(user._id, true));
        window.location.reload();
      })
    } else {
      alertConfirmCancel("", "¿Deseas deshabilitar a este usuario?", "question", "Confirmar", "Cancelar", () => {
        dispatch(activeUser(user._id, false));
        window.location.reload();
      })
    }

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
              <p className="user-active">Activo</p>
              <p className="user-name">Nombre</p>
              <p className="user-email">Email</p>
              <p className="user-role">Rol</p>
              <p className="user-buttons">Acciones</p>
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
                      <p className="user-activeTrue">
                        {user.active.toString()}
                      </p>
                    ) : (
                      <p className="user-activeFalse">
                        {user.active.toString()}
                      </p>
                    )}
                    <p className="user-name">{user.name}</p>
                    <p className="user-email">{user.email.toLowerCase()}</p>
                    <p className="user-role">{user.role}</p>
                    <div className="buttons user-buttons">
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

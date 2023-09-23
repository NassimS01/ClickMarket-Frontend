import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  activeUser,
  activeUserForAdmin,
  deleteUser,
  getAllUsers,
} from "../../../redux/actions/user";
import axios from "axios";
import { server } from "../../../server";
import { TableStyled } from "../PanelsTwo/ProductsStyled";
import BtnDelete from "../BtnDelete/BtnDelete";
import BtnAccept from "../BtnAccept/BtnAccept";
import { alertConfirmCancel, alertTime } from "../../../utils/alerts";
import "./UserStyles.css";
import { CircularProgress  } from "@mui/material";

const Users = ({ search }) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const {users} = useSelector((state)=> state.user)

  useEffect(() => {
    // axios
    //   .get(`${server}/user/admin-all-users`, {
    //     withCredentials: true,
    //   })
    //   .then((res) => {
    //     setData(res.data.users);
    //   });
    dispatch(getAllUsers())
  }, []);


  const handleDelete = (id) => {
    alertConfirmCancel(
      "",
      "¿Deseas eliminar a este usuario?",
      "question",
      "Confirmar",
      "Cancelar",
      () => {
        dispatch(deleteUser(id));
        alertTime(
          "Usuario eliminado correctamente",
          "success",
          "green",
          "white"
        )
        let interval = setInterval(()=>{
          window.location.reload()
        },2000)
      }
    );
  };

  const handleActive = (user, active) => {
    if (!active) {
      alertConfirmCancel(
        "",
        "¿Deseas habilitar a este usuario?",
        "question",
        "Confirmar",
        "Cancelar",
        () => {
          dispatch(activeUserForAdmin(user._id, true));
          alertTime(
            "Usuario habilitado",
            "success",
            "green",
            "white"
          )
          let interval = setInterval(()=>{
            window.location.reload()
          },2000)
        }
      );
    } else {
      alertConfirmCancel(
        "",
        "¿Deseas deshabilitar a este usuario?",
        "question",
        "Confirmar",
        "Cancelar",
        () => {
          dispatch(activeUserForAdmin(user._id, false));
          alertTime(
            "Usuario deshabilitado",
            "success",
            "red",
            "white"
          )
          let interval = setInterval(()=>{
            window.location.reload()
          },2000)
        }
      );
    }
  };

  return (
    <>
      {users && users.length >= 2 ? (
        <div
          id="users"
          style={{
            // maxHeight: "800px",
            overflowY: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2em",
          }}
        >
          <TableStyled>
            <div className="containerNames containerNames2">
              <p className="user-active">Activo</p>
              <p className="user-name">Nombre</p>
              <p className="user-email">Email</p>
              <p className="user-role">Rol</p>
              <p className="user-buttons">Acciones</p>
            </div>

            {users
              .filter((user) => {
                return search.toLowerCase() == "todos"
                  ? user
                  : user.email.toLowerCase().includes(search);
              })
              .map((user) =>
                user.role == "user" ? (
                  <div
                    className="container-info"
                    key={user._id}
                  >
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
                    <div className="buttons user-buttons btns">
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
        {/* <div>
          <h2 style={{ textAlign: "center" }}>No hay productos para mostrar</h2>
        </div> */}
      ) : (
        <div
          className="loading"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size="60px" style={{ marginTop: "50px" }} />
        </div>
      )}
    </>
  );
};

export default Users;

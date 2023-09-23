import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { server } from "../../../server";
import { useNavigate, useParams } from "react-router-dom";
import { activeUser } from "../../../redux/actions/user";
import { alertTime } from "../../../utils/alerts";
import { VerifyUser } from "./ActiveUserStyles";
import logoClickMarket from "../../../assets/CLICK.png";
import { ButtonGlobal } from "../../../components/ButtonGlobal/ButtonGlobal";

const ActiveUser = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const isUserVerify = data.active;
  const nameUser = data.name;

  useEffect(() => {
    axios
      .get(`${server}/user/get-user-to-verify/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const handleActive = () => {
    if (isUserVerify == false) {
      dispatch(activeUser(id, true));
      alertTime(
        `Cuenta verificada con éxito`,
        "success",
        "var(--colorSuccess)",
        "white"
      );
      setInterval(() => {
        navigate("/login");
        window.location.reload();
      }, 1000);
    } else {
      alertTime(
        "Cuenta ya verificada",
        "error",
        "var(--colorPrimary)",
        "white"
      );

      setInterval(() => {
        navigate("/login");
        window.location.reload();
      }, 1000);
    }
  };
  return (
    <VerifyUser>
      <div className="background-verify">
        <div className="card-verify">
          <div className="logo">
            <img src={logoClickMarket} alt="Logo click market" />
          </div>
          <div className="text-verify">
            <p>
              Bienvenido/a <span>{nameUser}</span> estás a un paso de activar tu
              cuenta
            </p>
          </div>
          <ButtonGlobal className="button-verify" onClick={handleActive}>
            Activar cuenta
          </ButtonGlobal>
        </div>
      </div>
    </VerifyUser>
  );
};

export default ActiveUser;

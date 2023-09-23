import axios from "axios";
import { useEffect, useState } from "react";
import { BiSolidImageAdd } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { alertTime } from "../../../../utils/alerts";
import {
  loadUser,
  updateUserInformation,
} from "../../../../redux/actions/user";
import { server } from "../../../../server";
import Loader from "../../../../components/Loader/Loader";
import { UserSettingsStyles } from "./userSettingsStyles";
import { ButtonGlobal } from "../../../../components/ButtonGlobal/ButtonGlobal";

const UserSettings = () => {
  const { user, error, successMessage, loading } = useSelector(
    (state) => state.user
  );
  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      alertTime(error, "error");
      dispatch({ type: "clearErrors" });
    }
    if (successMessage) {
      alertTime(successMessage, "success");
      dispatch({ type: "clearMessages" });
    }
  }, [error, successMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(user.email);
    dispatch(
      updateUserInformation(
        name,
        email,
        oldPassword,
        newPassword,
        repeatNewPassword
      )
    );
  };

  const handleImage = async (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
        axios
          .put(
            `${server}/user/update-avatar`,
            { avatar: reader.result },
            {
              withCredentials: true,
            }
          )
          .then((response) => {
            dispatch(loadUser());
            alertTime("Imagen de perfil cambiada!", "success");
          })
          .catch((error) => {
            alertTime(error, "error");
          });
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <UserSettingsStyles>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div>
            <div className="container-avatar">
              <img src={`${user?.avatar?.url}`} alt="" className="avatar" />
              <div>
                <label className="custum-file-upload" htmlFor="file">
                  <div className="icon">
                    <BiSolidImageAdd size="40px"/>
                  </div>
                  <div className="text">
                    <span>Haz click para subir una imagen</span>
                  </div>
                  <input type="file" id="file" onChange={handleImage} />
                </label>
              </div>
            </div>
          </div>
          <form
            className="form-container"
            onSubmit={handleSubmit}
            aria-required={true}
          >
            <div className="form-row">
              <div className="form-field">
                <label className="label">Nombre</label>
                <input
                  type="text"
                  className="input"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label className="label">Email</label>
                <input
                  type="text"
                  required
                  value={email}
                  disabled
                  className="input-email"
                />
              </div>

              <div className="form-field">
                <label className="label">Contraseña anterior</label>
                <input
                  type="password"
                  required
                  className="input"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>

              <div className="form-field">
                <label>Contraseña Nueva</label>
                <input
                  type="password"
                  required
                  className="input"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>

              <div className="form-field">
                <label>Repetir Contraseña Nueva</label>
                <input
                  type="password"
                  required
                  className="input"
                  value={repeatNewPassword}
                  onChange={(e) => setRepeatNewPassword(e.target.value)}
                />
                <ButtonGlobal
                  required
                  value="Actualizar datos"
                  type="submit"
                  green="true"
                  style={{ marginTop: "10px" }}
                >
                  Enviar
                </ButtonGlobal>
              </div>
            </div>
          </form>
        </div>
      )}
    </UserSettingsStyles>
  );
};

export default UserSettings;

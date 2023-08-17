import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { alertTime } from "../../../../../../backend/utils/alerts";
import { loadUser, updateUserInformation } from "../../../../redux/actions/user";
import { server } from "../../../../server";
import Loader from "../../../../components/Loader/Loader"

const UserSettings = () => {
    const { user, error, successMessage, loading } = useSelector((state) => state.user);
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
        setEmail(user.email)
        dispatch(updateUserInformation(name, email, oldPassword, newPassword, repeatNewPassword))
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
                        alertTime(error, "error");;
                    });
            }
        };

        reader.readAsDataURL(e.target.files[0]);
    };
    return (
        <>  {
            loading ?
                (<Loader />) : (
                    <div>
                        <div>
                            <div>
                                <img
                                    src={`${user?.avatar?.url}`}
                                    alt=""
                                />
                                <div >
                                    <input
                                        type="file"
                                        id="image"
                                        className="hidden"
                                        onChange={handleImage}
                                    />
                                    <label htmlFor="image">
                                        <AiOutlineCamera />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <form className="form-container" onSubmit={handleSubmit} aria-required={true}>
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
                                        className="input"
                                        required
                                        value={email}
                                        disabled
                                    />
                                </div>

                                <div>
                                    <label>Contraseña anterior</label>
                                    <input
                                        type="password"
                                        required
                                        value={oldPassword}
                                        onChange={(e) => setOldPassword(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label>Contraseña Nueva</label>
                                    <input
                                        type="password"
                                        required
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label>Repetir Contraseña Nueva</label>
                                    <input
                                        type="password"
                                        required
                                        value={repeatNewPassword}
                                        onChange={(e) => setRepeatNewPassword(e.target.value)}
                                    />
                                </div>

                            </div>
                            <input
                                required
                                value="Actualizar datos"
                                type="submit"
                            />
                        </form>
                    </div >
                )
        }

        </>
    )
}

export default UserSettings;
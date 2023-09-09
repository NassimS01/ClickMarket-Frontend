import { useSelector } from "react-redux";
import {  Outlet, useNavigate } from "react-router-dom";
import { Container } from "./ProfileStyles";
import { alertConfirmCancel } from "../../../../backend/utils/alerts";
import axios from "axios";
import { server } from "../../server";
import PanelProfile from "./PanelProfile/PanelProfile"
import { StyledCrud } from "../Crud/CrudStyled";

const Profile = () => {
    const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();

    const logoutHandler = () => {
        alertConfirmCancel("", "Seguro deseas cerrar sesión?", 'question', "Confirmar", "Cancelar", () => {
            axios
                .get(`${server}/user/logout`, { withCredentials: true })
                .then((res) => {
                    navigate("/");
                    window.location.reload(true)
                })
                .catch((error) => {
                    console.log(error.response.data.message);
                })
        }, () => { })

    };
    return (
            <StyledCrud>
                <Outlet/>
            </StyledCrud>
    )
}

export default Profile;
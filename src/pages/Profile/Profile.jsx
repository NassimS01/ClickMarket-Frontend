import {  Outlet } from "react-router-dom";
import { StyledCrud } from "../Crud/CrudStyled";

const Profile = () => {

    return (
            <StyledCrud>
                <Outlet/>
            </StyledCrud>
    )
}

export default Profile;
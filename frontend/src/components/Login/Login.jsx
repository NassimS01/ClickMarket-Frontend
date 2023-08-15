import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import { ContainerLogin } from './LoginStyled';
import { server } from "../../server.js";
import { toast } from "react-toastify"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from 'axios';
import { alertTime } from '../../../../backend/utils/alerts';


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios
            .post(
                `${server}/user/login-user`,
                {
                    email,
                    password,
                },
                { withCredentials: true }
            )
            .then((res) => {
                alertTime("Bienvenido!", "success")
                const interval = setInterval(() => {
                    navigate("/");
                    window.location.reload(true);
                }, 2000);
            })
            .catch((err) => {
                toast.error(err.response.data.message);
            });
    };


    return (
        <ContainerLogin>
            <div className="login_form_container">
                <div className="left">
                    <form className="form_container" onSubmit={handleSubmit}>
                        <h1>Iniciar sesión</h1>
                        <input type='email' placeholder='Email' name='email' value={email} required className="input" onChange={(e) => setEmail(e.target.value)} />

                        <div className="input-password">
                            <input type={visible ? "text" : "password"} name="password" placeholder='Contraseña' required value={password} onChange={(e) => setPassword(e.target.value)} className="input" />
                            {visible ? (<AiOutlineEye className="password-icon" size={25} onClick={() => setVisible(false)} />)
                                :
                                (<AiOutlineEyeInvisible className="password-icon" size={25} onClick={() => setVisible(true)} />)}
                        </div>

                        <button type='submit' className="green_btn">
                            Iniciar sesión
                        </button>

                    </form>
                </div>
                <div className="right">
                    <h1>Nuevo usuario</h1>
                    <Link to='/signup'>
                        <button type='button' className="white_btn">
                            Inscribirse
                        </button>
                    </Link>

                </div>
            </div>
        </ContainerLogin>

    )


};

export default Login;
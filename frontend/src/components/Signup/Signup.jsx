import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import { ContainerSignup } from './SignupStyled';
import { server } from '../../server';
import { RxAvatar } from "react-icons/rx";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from 'react-toastify';
import axios from 'axios';
import Loader from '../Loader/Loader';


const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [visible, setVisible] = useState(false);
    const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [avatar, setAvatar] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Las contraseñas no coinciden.");
            return;
        }

        if (!isChecked) {
            toast.error("Debes aceptar los Términos y Condiciones.");
            return;
        }

        setIsLoading(true);

        axios
            .post(`${server}/user/create-user`, { name, email, password, avatar })
            .then((res) => {
                toast.success(res.data.message);
                setName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                setAvatar();
                const interval = setInterval(() => {
                    navigate("/");
                    window.location.reload(true);
                }, 2000);
            })
            .catch((error) => {
                toast.error(error.response.data.message);
                setIsLoading(false);
            });
    };


    return (
        <ContainerSignup>
            {isLoading ? (<Loader isLoading={isLoading} />) : (
                <div className="signup_form_container">
                    <div className="left">
                        <h1>Bienvenido</h1>
                        <Link to='/login'>
                            <button type='button' className="white_btn">
                                Iniciar sesión
                            </button>
                        </Link>
                    </div>
                    <div className="right">
                        <form className="form_container" onSubmit={handleSubmit}>
                            <h1>Crear cuenta</h1>
                            <input type='text' placeholder='Nombre' name='firstName' value={name} required className="input" onChange={(e) => setName(e.target.value)} />

                            <input type='email' placeholder='Email' name='email' value={email} className="input" onChange={(e) => setEmail(e.target.value)} />

                            <div className="input-password">
                                <input type={visible ? "text" : "password"} name="password" placeholder='Contraseña' required value={password} onChange={(e) => setPassword(e.target.value)} className="input" />
                                {visible ? (<AiOutlineEye className="password-icon" size={25} onClick={() => setVisible(false)} />)
                                    :
                                    (<AiOutlineEyeInvisible className="password-icon" size={25} onClick={() => setVisible(true)} />)}
                            </div>

                            <div className="input-password">
                                <input type={visibleConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder='Confirmar Contraseña' required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="input" />
                                {visibleConfirmPassword ? (<AiOutlineEye className="password-icon" size={25} onClick={() => setVisibleConfirmPassword(false)} />)
                                    :
                                    (<AiOutlineEyeInvisible className="password-icon" size={25} onClick={() => setVisibleConfirmPassword(true)} />)}
                            </div>

                            <div className='input-checkbox'>
                                <input type="checkbox" name="checkbox" id="checkbox" checked={isChecked}
                                    onChange={(e) => setIsChecked(e.target.checked)} />
                                <label htmlFor="checkbox">Acepto los Términos y Condiciones</label>
                            </div>

                            <button type='submit' className="green_btn" disabled={isLoading}>
                                Registrarse
                            </button>
                        </form>
                    </div>
                </div>
            )}


        </ContainerSignup>

    )


};

export default Signup;
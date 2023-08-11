import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import { ContainerSignup } from './SignupStyled';
import { server } from '../../server';
import { RxAvatar } from "react-icons/rx";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from 'react-toastify';
import axios from 'axios';


const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [visible, setVisible] = useState(false);
    const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [avatar, setAvatar] = useState(null);

    const handleFileInputChange = (e) => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatar(reader.result);
            }
        };

        reader.readAsDataURL(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Las contraseñas no coinciden.");
            return;
        }

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
                console.log(error)
                toast.error(error.response.data.message);
            });
    };


    return (
        <ContainerSignup>
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
                            <input type={visible ? "text" : "password"} name="password" placeholder='Contraseña' required value={password} onChange={(e) => setPassword(e.target.value)} className="input"/>
                            {visible ? (<AiOutlineEye className="password-icon" size={25} onClick={() => setVisible(false)}/>) 
                            :
                            (<AiOutlineEyeInvisible className="password-icon" size={25} onClick={() => setVisible(true)}/>)}
                        </div>

                        <div className="input-password">
                            <input type={visibleConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder='Confirmar Contraseña' required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="input"/>
                            {visibleConfirmPassword ? (<AiOutlineEye className="password-icon" size={25} onClick={() => setVisibleConfirmPassword(false)}/>) 
                            :
                            (<AiOutlineEyeInvisible className="password-icon" size={25} onClick={() => setVisibleConfirmPassword(true)}/>)}
                        </div>
                        {/* 
                        <input  type={visible ? "text" : "password"} placeholder='Contraseña' name='password' value={password} className="input" onChange={(e) => setPassword(e.target.value)} />

                        <input  type={visible ? "text" : "password"} placeholder="Confirmar Contraseña" name="confirmPassword" value={confirmPassword} className="input" onChange={(e) => setConfirmPassword(e.target.value)}/> */}


                        <div>
                            <label
                                htmlFor="avatar"
                                className="avatar-label"
                            ></label>
                            <div className="avatar-container">
                                <span className="avatar-span">
                                    {avatar ? (
                                        <img
                                            src={avatar}
                                            alt="avatar"
                                            className="avatar-img"
                                        />
                                    ) : (
                                        <RxAvatar className="avatar-icon" />
                                    )}
                                </span>
                                <label
                                    htmlFor="file-input"
                                    className="label-file"
                                >
                                    <span>Subir una imagen</span>
                                    <input
                                        type="file"
                                        name="avatar"
                                        id="file-input"
                                        accept=".jpg,.jpeg,.png"
                                        onChange={handleFileInputChange}
                                        className="sr-only"
                                    />
                                </label>
                            </div>
                        </div>

                        <button type='submit' className="green_btn">
                            Registrarse
                        </button>

                    </form>
                </div>
            </div>
        </ContainerSignup>

    )


};

export default Signup;
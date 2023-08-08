import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import { ContainerSignup } from './SignupStyled';
import { server } from '../../server';
import { RxAvatar } from "react-icons/rx";
import { toast } from 'react-toastify';
import axios from 'axios';


const Signup = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [avatar, setAvatar] = useState(null);
    const navigate = useNavigate();

    const handleFileInputChange = (e) =>{
        const file = e.target.files[0];
        setAvatar(file);
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const config = {headers: {"Content-Type":"multipart/form-data"}}
        
        const newForm = new FormData();

        newForm.append("file", avatar);
        newForm.append("name", name);
        newForm.append("email", email);
        newForm.append("password", password);

        axios
        .post(`${server}/user/create-user`, newForm, config)
        .then((res) =>{
            if(res.data.success === true){
                toast.success(res.data.message)
                setName("");
                setEmail("");
                setPassword("");
                setAvatar();
                navigate("/")
            }
        }).catch((error)=>{
            toast.error(error.response.data.message)
        })
    }

    // const handleFileInputChange = (e) => {
    //     const reader = new FileReader();

    //     reader.onload = () => {
    //         if (reader.readyState === 2) {
    //             setAvatar(reader.result);
    //         }
    //     };

    //     reader.readAsDataURL(e.target.files[0]);
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     axios
    //         .post(`${server}/user/create-user`, { name, email, password, avatar })
    //         .then((res) => {
    //             toast.success(res.data.message);
    //             setName("");
    //             setEmail("");
    //             setPassword("");
    //             setAvatar();
    //         })
    //         .catch((error) => {
    //             toast.error(error.response.data.message);
    //         });
    // };


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

                        <input type='password' placeholder='Contraseña' name='password' value={password} className="input" onChange={(e) => setPassword(e.target.value)} />
                        {/* {error && <div className="error_msg">{error}</div>} */}

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
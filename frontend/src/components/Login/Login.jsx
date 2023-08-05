import { Link, useNavigate  } from 'react-router-dom'
import React, { useState } from 'react';
import { ContainerLogin } from './LoginStyled';
import { server } from "../../server.js";
import { toast } from "react-toastify"
import axios from 'axios';


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
                toast.success("Bienvenido!");
                navigate("/");
                window.location.reload(true);
            })
            .catch((err) => {
                toast.error(err.response.data.message);
            });
    };
    // const [data, setData] = useState({
    //     email: "",
    //     password: ""
    // })


    // const handleChange = ({ currentTarget: input }) => {
    //     setData({ ...data, [input.name]: input.value });
    // }

    /*const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const url="http://localhost:8080/api/auth";
            const{data:res}= await axios.post(url,data);
            localStorage.setItem("token", res.data);
            window.location="/"
            
        } catch (error) {
            if(error.message && error.response.status>=400 && error.response.status<=500){
                setError(error.response.data.message)
            }

        }
    }*/


    return (
        <ContainerLogin>
            <div className="login_form_container">
                <div className="left">
                    <form className="form_container" onSubmit={handleSubmit}>
                        <h1>Iniciar sesión en su cuenta</h1>
                        <input type='email' placeholder='Email' name='email' value={email} required className="input" onChange={(e) => setEmail(e.target.value)} />

                        <input type='password' placeholder='Contraseña' name='password' value={password} required className="input" onChange={(e) => setPassword(e.target.value)} />
                        {/* {error && <div className="error_msg">{error}</div>} */}

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
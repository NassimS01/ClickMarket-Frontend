import { Link, useNavigate } from 'react-router-dom'
import styles  from './styles.module.css'
import { useState } from 'react';
//import axios from 'axios';


const Signup = () => {
    const[data, setData]= useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    })

    const [error, setError]= useState("")
    const navigate = useNavigate();

    const handleChange = ({currentTarget:input})=>{
        setData({...data,[input.name]:input.value});
        console.log(data);
    }

    /*const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const url="http://localhost:8080/api/users";
            const{data:res}= await axios.post(url,data);
            navigate('/login')
            console.log(res.message);
        } catch (error) {
            if(error.message && error.response.status>=400 && error.response.status<=500){
                setError(error.response.data.message)
            }

        }
    }*/


    return(
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.left}>
                    <h1>Bienvenido</h1>
                    <Link to='/login'>
                        <button type='button' className={styles.white_btn}>
                        Iniciar sesión
                        </button>
                    </Link>
                </div>
                <div className={styles.right}>
                    <form className={styles.form_container} >
                        <h1>Crear cuenta</h1>
                        <input type='text' placeholder='Nombre' name='firstName' value={data.firstName} required className={styles.input} onChange={handleChange}/>

                        <input type='text' placeholder='Apellido' name='lastName' value={data.lastName} required className={styles.input} onChange={handleChange}/>

                        <input type='email' placeholder='Email' name='email' value={data.email} required className={styles.input} onChange={handleChange}/>

                        <input type='password' placeholder='Contraseña' name='password' value={data.password} required className={styles.input} onChange={handleChange}/>
                        {error && <div className={styles.error_msg}>{error}</div>}

                        <button type='submit' className={styles.green_btn}>
                        Inscribirse
                        </button>

                    </form>
                </div>
            </div>
        </div>
        
    )


};

export default Signup;
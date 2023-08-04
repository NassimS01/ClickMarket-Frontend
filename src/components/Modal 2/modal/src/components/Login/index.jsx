import { Link} from 'react-router-dom'
import styles  from './styles.module.css'
import { useState } from 'react';
//import axios from 'axios';


const Login = () => {
    const[data, setData]= useState({
        email:"",
        password:""
    })

    const [error, setError]= useState("")
    

    const handleChange = ({currentTarget:input})=>{
        setData({...data,[input.name]:input.value});
    }

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


    return(
        <div className={styles.login_container}>
            <div className={styles.login_form_container}>
                <div className={styles.left}>
                <form className={styles.form_container} >
                        <h1>Iniciar sesión en su cuenta</h1>
                        <input type='email' placeholder='Email' name='email' value={data.email} required className={styles.input} onChange={handleChange}/>

                        <input type='password' placeholder='Contraseña' name='password' value={data.password} required className={styles.input} onChange={handleChange}/>
                        {error && <div className={styles.error_msg}>{error}</div>}

                        <button type='submit' className={styles.green_btn}>
                        Iniciar sesión
                        </button>

                    </form>
                </div>
                <div className={styles.right}>
                    <h1>Nuevo usuario</h1>
                    <Link to='/'>
                        <button type='button' className={styles.white_btn}>
                        Inscribirse
                        </button>
                    </Link>
                    
                </div>
            </div>
        </div>
        
    )


};

export default Login;
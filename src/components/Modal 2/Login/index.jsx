import { Link} from 'react-router-dom'
import styles  from './styles.module.css'
import * as Yup from 'yup'
import { Formik, useFormik } from "formik";
//import axios from 'axios';

const validationSchema = Yup.object ({
    email: Yup.string().email('No es un mail valido').required('Campor requerido'),
    password: Yup.string().min(8,'Tiene que tener un minimo de 8 caracteres').max(30,'El maximo es 30 caracteres').required('Campo requerido').matches(/[0-9]/, "Tiene que tener un digito")
    .matches(/[a-z]/, "Tiene que contener 1 letra minuscula")
    .matches(/[A-Z]/, "Tiene que contener una letra mayuscula"),
})

const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema,
        onSubmit: ((values, { resetForm }) => {
            console.log(JSON.stringify(values, null, 2));
            resetForm();
        })
        
    });

    return(
        <div className={styles.login_container}>
            <div className={styles.login_form_container}>
                <div className={styles.left}>
                <form className={styles.form_container} >
                        <h1>Iniciar sesión en su cuenta</h1>
                        {formik.errors.lastName ? <div>{formik.errors.lastName}</div>:null}
                        <input
                            type='email'
                            placeholder='Email'
                            name='email'
                            className={styles.input}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        {formik.errors.email ? <div>{formik.errors.email}</div>:null}
                        <input
                            type='password'
                            placeholder='Contraseña'
                            name='password'
                            autoComplete='on'
                            className={styles.input}
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        {formik.errors.password ? <div>{formik.errors.password}</div>:null}

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
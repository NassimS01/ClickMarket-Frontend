import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import {  useFormik } from "formik";
import * as Yup from 'yup'


const validationSchema = Yup.object ({
    name: Yup.string().required('Campo requerido').max(15,'Maximo 15 caracteres'),
    lastName: Yup.string().required('Campo requerido'),
    email: Yup.string().email('No es un mail valido').required('Campor requerido'),
    password: Yup.string().min(8,'Tiene que tener un minimo de 8 caracteres').max(30,'El maximo es 30 caracteres').required('Campo requerido').matches(/[0-9]/, "Tiene que tener un digito")
    .matches(/[a-z]/, "Tiene que contener 1 letra minuscula")
    .matches(/[A-Z]/, "Tiene que contener una letra mayuscula"),
})

const Signup = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            lastName: "",
            email: "",
            password: ""
        },
        validationSchema,
        onSubmit: ((values, { resetForm }) => {
            console.log(JSON.stringify(values, null, 2));
            resetForm();
        })
        
    });





    return (
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
                    <form className={styles.form_container} onSubmit={formik.handleSubmit} >
                        <h1>Crear cuenta</h1>
                        <input
                            type='text'
                            placeholder='Nombre'
                            name='name'
                            className={styles.input}
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        
                        {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div>:null}
                        <input
                            type='text'
                            placeholder='Apellido'
                            name='lastName'
                            className={styles.input}
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div>:null}
                        <input
                            type='email'
                            placeholder='Email'
                            name='email'
                            className={styles.input}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div>:null}
                        <input
                            type='password'
                            placeholder='Contraseña'
                            name='password'
                            autoComplete='on'
                            className={styles.input}
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div>:null}
                        <button type='submit' className={styles.green_btn}>
                            Inscribirse
                        </button>

                    </form>
                </div>
            </div>
        </div>
        
    )
}
export default Signup;

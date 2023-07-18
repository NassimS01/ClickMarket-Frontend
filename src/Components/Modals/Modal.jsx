import React, { useState } from 'react';
import { FormButton,FormDiv, FormField } from './ModalStyled';




const Modal = () => {
    const [formData, setFormData]= useState({
        firstName:'',
        lastName:'',
        email:'',
        password: '',

    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log(formData);
    }
    return (
        <>
        <FormDiv>
            <form onSubmit={handleSubmit}>
                <FormField
                type='text'
                name="firstName"
                placeholder='Nombre'
                value={formData.firstName}
                onChange={handleChange}
                />
                <FormField
                type='text'
                name="lastName"
                placeholder='Apellido'
                value={formData.lastName}
                onChange={handleChange}
                />
                <FormField
                type='email'
                name="email"
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
                />
                <FormField
                type='password'
                name="password"
                placeholder='Contraseña'
                value={formData.password}
                onChange={handleChange}
                />
                <FormButton type='submit'>Enviar</FormButton>
            </form>
            
        </FormDiv>


        </>
    );
};

export default Modal;
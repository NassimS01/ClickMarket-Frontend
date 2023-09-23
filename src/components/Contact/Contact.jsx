import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ContainerContact } from "./ContactStyles";
import { alertTime } from "../../utils/alerts";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {

    emailjs
      .sendForm(
        "service_h9fvvwp",
        "template_hso6zva",
        form.current,
        "d1LxVp-FuITWxTUiv"
      )
      .then(
        (result) => {
          alertTime(
            `Mensaje enviado!`,
            "success",
            "var(--colorSuccess)",
            "white"
          );
          form.current.reset();
        },
        (error) => {
          alertTime(
            "Error al enviar el mensaje",
            "error",
            "var(--colorPrimary)",
            "white"
          );
        }
      );
  };

  const ContactSchema = Yup.object().shape({
    user_name: Yup.string()
      .min(2, "Se permiten mínimo 2 carácteres")
      .max(20, "Se permiten máximo 20 carácteres")
      .required("Este campo es requerido")
      .matches(/^[a-zA-Z]+$/, "Se permiten solo letras"),
    user_email: Yup.string()
      .email("Email no válido")
      .required("Este campo es requerido"),
    message: Yup.string()
      .min(10, "Se permiten mínimo 10 carácteres")
      .max(300, "Se permiten máximo 300 carácteres")
      .required("Este campo es requerido")
      .matches(/^[a-zA-Z0-9]+$/, "Se permiten letras y números"),
  });

  return (
    <ContainerContact>
      <div className="contact-background">
        <div className="container-all-contact">
          <div className="content-contact">
            <div className="container-contact-left">
              <div className="details">
                <i className="icon-contact">
                  <FaMapMarkerAlt />
                </i>
                <div className="topic">Dirección</div>
                <div className="text-one">General Paz 576</div>
                <div className="text-two">San Miguel de Tucumán</div>
              </div>
              <div className="details">
                <i className="icon-contact">
                  <FaPhoneAlt />
                </i>
                <div className="topic">Teléfono</div>
                <div className="text-one">+54 381-5367724</div>
                <div className="text-two">+54 381-6164083</div>
              </div>
              <div className="details">
                <i className="icon-contact">
                  <FaEnvelope />
                </i>
                <div className="topic">Email</div>
                <div className="text-one">contacto@clickmarket.com</div>
                <div className="text-two">info@clickmarket.com</div>
              </div>
            </div>
            <div className="container-contact-right">
              <div className="topic-text">Envíanos un mensaje</div>
              <p></p>
              <Formik
                initialValues={{
                  user_name: "",
                  user_email: "",
                  message: "",
                }}
                validationSchema={ContactSchema}
                onSubmit={(values) => {
                  sendEmail();
                }}
              >
                {({ errors, touched }) => (
                  <Form ref={form}>
                    <div className="input-box">
                      <Field
                        type="text"
                        name="user_name"
                        placeholder="Ingresa tu nombre"
                      />{" "}
                      {errors.user_name && touched.user_name ? (
                        <div className="errors">{errors.user_name}</div>
                      ) : null}
                    </div>
                    <div className="input-box">
                      <Field
                        type="email"
                        name="user_email"
                        placeholder="Ingresa tu email"
                      />
                      {errors.user_email && touched.user_email ? (
                        <div className="errors">{errors.user_email}</div>
                      ) : null}
                    </div>
                    <div className="input-box message-box">
                      <Field
                        as="textarea"
                        name="message"
                        placeholder="Deje un mensaje"
                      />
                        {errors.message && touched.message ? (
                          <div className="errors">{errors.message}</div>
                        ) : null}
                    
                    </div>
                    <div className="button">
                      <button
                        type="submit"
                        className="button-send"
                        value="Enviar"
                      >Enviar</button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </ContainerContact>
  );
};

export default Contact;

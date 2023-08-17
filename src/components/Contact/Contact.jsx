import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ContainerContact } from "./ContactStyles";
import { alertTime } from "../../../../backend/utils/alerts";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_h9fvvwp",
                "template_hso6zva",
                form.current,
                "d1LxVp-FuITWxTUiv"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alertTime(
                        `Mensaje enviado!`,
                        "success",
                        "var(--colorSuccess)",
                        "white"
                    );
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                    alertTime(
                        "Error al enviar el mensaje",
                        "error",
                        "var(--colorPrimary)",
                        "white"
                    );
                }
            );
    };

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

                            <form ref={form} onSubmit={sendEmail}>
                                <div className="input-box">
                                    <input
                                        type="text"
                                        name="user_name"
                                        placeholder="Ingresa tu nombre"
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <input
                                        type="email"
                                        name="user_email"
                                        placeholder="Ingresa tu email"
                                        required
                                    />
                                </div>
                                <div className="input-box message-box">
                                    <textarea
                                        name="message"
                                        placeholder="Deje un mensaje"
                                        required
                                    ></textarea>
                                </div>
                                <div className="button">
                                    <input type="submit" className="button-send" value="Enviar" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerContact>
    );
};

export default Contact;
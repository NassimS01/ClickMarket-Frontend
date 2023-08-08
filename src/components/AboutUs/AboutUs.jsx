import React from 'react'
import {ContainerAboutUs,CardAboutUs} from "./AboutUs.js";
import imgAboutUs from "../../assets/members/AboutUs.jpg"
import members1 from "../../assets/members/NassimSalomon.jpg"
import members2 from "../../assets/members/FranciscoPaez.jpg"
import members3 from "../../assets/members/FrancoGuevara.jpg"
import members4 from "../../assets/members/MauroPerez.jpg"
import members5 from "../../assets/members/AgustinaHernandez-img.jpeg"
import {FaLinkedin} from "react-icons/fa"


const AboutUs = () => {
    return (
        <>
<div>
<img src={imgAboutUs} alt="" />

            <ContainerAboutUs>
                <CardAboutUs>
                    <img src={members1} alt="img-NassimSalomon" />
                    <h2>Nassim Salomón</h2>
                    <p>FULLSTACK</p>
                </CardAboutUs>

                <CardAboutUs>
                    <img src={members2} alt="img-FranciscoPaez" />
                    <h2>Francisco Paez</h2>
                    <p>FULLSTACK</p>
                </CardAboutUs>


                <CardAboutUs>
                    <img src={members3} alt="img-FrancoGuevara" />
                    <h2>Franco Guevara</h2>
                    <p>FULLSTACK</p>
                    <div> <FaLinkedin color="#ba1e1a" size="20px"/>
                    </div>
                   
                </CardAboutUs>

                <CardAboutUs>
                    <img src={members4} alt="img-MauroPerez" />
                    <h2>Mauro Perez</h2>
                    <p>FULLSTACK</p>
                    <FaLinkedin/>
                </CardAboutUs>

                <CardAboutUs>
                    <img src={members5} alt="img-AgustinaHernandez" />
                    <h2>Agustina Hernández</h2>
                    <p>FULLSTACK</p>
                    <FaLinkedin/>
                </CardAboutUs>

            </ContainerAboutUs>
</div>

        </>
    )
}

export default AboutUs;
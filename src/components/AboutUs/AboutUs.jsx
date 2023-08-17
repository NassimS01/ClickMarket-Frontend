import React from 'react'
import {ContainerAboutUs,CardAboutUs} from "./AboutUs.js";
import members1 from "../../assets/members/NassimSalomon.jpg"
import members2 from "../../assets/members/FranciscoPaez.jpg"
import members3 from "../../assets/members/FrancoGuevara.jpg"
import members4 from "../../assets/members/MauroPerez.jpg"
import members5 from "../../assets/members/AgustinaHernandez-img.jpeg"
import {FaLinkedin, FaGithubSquare} from "react-icons/fa"

const AboutUs = () => {
    return (
        <>
<div>
            <ContainerAboutUs>
                <CardAboutUs>
                    <img src={members1} alt="img-NassimSalomon" />
                    <h2>Nassim Salomón</h2>
                    <p>FULLSTACK</p>
                    <div className='iconsAboutUs'><a href="https://www.linkedin.com/in/nassim-salomon/" target="_blank"><FaLinkedin color="#ba1e1a" size="25px"/></a>
                    <a target='_blank' href='https://github.com/NassimS01'><FaGithubSquare color="#ba1e1a" size="25px"/></a>
                    </div>
                </CardAboutUs>

                <CardAboutUs>
                    <img src={members2} alt="img-FranciscoPaez" />
                    <h2>Francisco Paez</h2>
                    <p>FULLSTACK</p>
                    <div className='iconsAboutUs'><a href="https://www.linkedin.com/" target="_blank"><FaLinkedin color="#ba1e1a" size="25px"/></a>
                    <a target='_blank' href='https://github.com/FranX-21'><FaGithubSquare color="#ba1e1a" size="25px"/></a>
                    </div>
                </CardAboutUs>


                <CardAboutUs>
                    <img src={members3} alt="img-FrancoGuevara" />
                    <h2>Franco Guevara</h2>
                    <p>FULLSTACK</p>
                    <div className='iconsAboutUs'><a href="https://www.linkedin.com/" target="_blank"><FaLinkedin color="#ba1e1a" size="25px"/></a>
                    <a target='_blank' href='https://github.com/FrancoLadronDeGuevara'><FaGithubSquare color="#ba1e1a" size="25px"/></a>
                    </div>
                   
                </CardAboutUs>

                <CardAboutUs>
                    <img src={members4} alt="img-MauroPerez" />
                    <h2>Mauro Perez</h2>
                    <p>FULLSTACK</p>
                    <div className='iconsAboutUs'><a href="https://www.linkedin.com/" target="_blank"><FaLinkedin color="#ba1e1a" size="25px"/></a>
                    <a target='_blank' href='https://github.com/Maurops92'><FaGithubSquare color="#ba1e1a" size="25px"/></a>
                    </div>
                </CardAboutUs>

                <CardAboutUs>
                    <img src={members5} alt="img-AgustinaHernandez" />
                    <h2>Agustina Hernández</h2>
                    <p>FULLSTACK</p>
                    <div className='iconsAboutUs'><a href="https://www.linkedin.com/in/mar%C3%ADa-agustina-hern%C3%A1ndez-7ab587287/" target="_blank"><FaLinkedin color="#ba1e1a" size="25px"/></a>
                    <a target='_blank' href='https://github.com/agustinahernandez17'><FaGithubSquare color="#ba1e1a" size="25px"/></a>
                    </div>
                </CardAboutUs>
            </ContainerAboutUs>
</div>
        </>
    )
}

export default AboutUs;
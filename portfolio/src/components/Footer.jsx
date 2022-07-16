import React from "react";
import { Link } from "react-router-dom";
import {GoLocation} from 'react-icons/go'
import '../scss/components/Footer.scss'
import { GoLogoGithub} from 'react-icons/go';
import {GrLinkedin} from 'react-icons/gr';
import malt from '../assets/images/malt.png'
import { FaUser } from "react-icons/fa";



function Footer () {

    return (
        <footer>
            <div>
                <div className="nav-footer">
                    <Link to='/'><FaUser /> About </Link>
                    <Link to='/resume'>Resume</Link>
                    <Link to='/contact'>Contact me</Link>
                </div>
                <div className="social-networks">
                    <a href="https://github.com/antoineThomasCode" target="_blank" className="skills-button">Find me on <GoLogoGithub className="github-icon"/> </a>
                    <a href="https://www.linkedin.com/in/antoine-thomas-20152b210/" target="_blank" className="skills-button">Find me on <GrLinkedin className="linkdin-logo"/> </a>
                    <a href="https://www.malt.fr/profile/antoinethomas4" target="_blank" className="skills-button">Hire me on <img className="malt" src={malt}></img></a>
                </div>
                <div className="cities">
                    <p><GoLocation className="location" /> TROYES - POZNAN (POLAND) - PARIS - LYON</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer
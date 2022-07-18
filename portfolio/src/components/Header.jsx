import React from "react";
import { Link } from "react-router-dom"
import { FaRegIdCard, FaRegIdBadge, FaLayerGroup, FaEnvelope } from "react-icons/fa";
import logo from "../assets/images/logo-Antoine.gif"
//style
import '../scss/components/Header.scss' 

import ResponsiveMenu from "./ResponsiveMenu";

function Header () {

    return (
        <header>
            <Link to="/"><img src={logo} alt="logo Antoine Thomas" /></Link>
            <ResponsiveMenu />
            <nav>
                <Link to='/'><FaRegIdBadge /> About</Link>
                <Link to='/works'><FaLayerGroup /> Works</Link>
                <Link to='/resume'><FaRegIdCard /> Resume</Link>
                <Link to='/contact'><FaEnvelope /> Contact me</Link>
            </nav>
        </header>
    )
}
export default Header
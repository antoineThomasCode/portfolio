import React from "react";
import { Link } from "react-router-dom";
import { FaRegIdCard, FaRegIdBadge, FaLayerGroup, FaEnvelope } from "react-icons/fa";

function MenuContent ({openFunction}) {
    return (
        <div className="menu-content">
            <Link to='/' onClick={(e) => openFunction(e)}><FaRegIdBadge /> About</Link>
            <Link to='/works' onClick={(e) => openFunction(e)}><FaLayerGroup /> Works</Link>
            <Link to='/resume' onClick={(e) => openFunction(e)}><FaRegIdCard /> Resume</Link>
            <Link to='/contact' onClick={(e) => openFunction(e)}><FaEnvelope /> Contact me</Link>
        </div>
    )
}
export default MenuContent
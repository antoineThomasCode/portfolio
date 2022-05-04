import React from "react";
import { Link } from "react-router-dom";
import {GoLocation} from 'react-icons/go'
import '../scss/components/Footer.scss'

function Footer () {

    return (
        <footer>
            <div className="nav-footer">
                <Link to='/'>Home</Link>
                <Link to='/resume'>Resume</Link>
                <Link to='/contact'>Contact me</Link>
            </div>
            <div>
                <p><GoLocation className="location" /> The Cupboard under the Stairs - 4 Privet Drive - Little Whinging, SURREY </p>
            </div>
        </footer>
    )
}
export default Footer
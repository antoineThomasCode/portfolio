import React from "react";
import { Link } from "react-router-dom"
import { MdBolt} from 'react-icons/md';

//style
import '../scss/components/Header.scss' 

function Header () {

    return (
        <header>
            <div className="at">AntoineThomas  ///  Front-End Developpeur</div>
            <nav>
                <Link to='/'>About</Link>
                <Link to='/works'>Works</Link>
                <Link to='/resume'>Resume</Link>
                <Link to='/contact'>Contact me</Link>
            </nav>
        </header>
    )
}
export default Header
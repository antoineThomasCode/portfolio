import React from "react";
import { useState } from "react";
import {BsFilterLeft, BsXCircle} from 'react-icons/bs'
import MenuContent from "./MenuContent";
import '../scss/components/ReponsiveMenu.scss'

function ResponsiveMenu () {

    const [menuVisible, setMenuVisible ] = useState(false)

    function handleOpenMenu (e) {
        e.preventDefault()
        if(menuVisible) {
            setMenuVisible(false)
        } else {
            setMenuVisible(true)
        }
        
    }

    return (
        <div className="responsive-menu-container">
            <button className="menu-button" onClick={(e) => handleOpenMenu(e)}>{!menuVisible ? (<BsFilterLeft />) : <BsXCircle />}</button>
            {menuVisible ? (<MenuContent opencFunction={handleOpenMenu} />) : null}
        </div>
    )
}
export default ResponsiveMenu
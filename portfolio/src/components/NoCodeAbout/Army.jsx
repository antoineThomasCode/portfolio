import React from "react";
import '../../scss/components/Army.scss'
import cohesion from '../../assets/images/cohesion.jpg'
import {BsBatteryHalf, BsPersonBoundingBox, BsFileEarmarkCheck, BsChatDots, BsLink, BsWrench} from "react-icons/bs";
function Army () {

    return (
        <div className="army__container">
            <h2>Additional skills from my military experience </h2>
            <div className="army__card">
                <div className="army__titleCard">« S'élever par l'effort. »</div>
                <img className="army__illustration" src={cohesion} alt="armée de terre" />
                <div className="army__list-value-container">
                    <ul>
                        <li><BsBatteryHalf /> Be aware of my own limits</li>
                        <li><BsPersonBoundingBox /> Rigor and know-how during the missions entrusted</li>
                        <li><BsFileEarmarkCheck /> Know how to report effectively and concisely</li>
                        <li><BsChatDots /> Know how to communicate to avoid conflict</li>
                        <li><BsLink /> Be an actor in the cohesion of the working group</li>
                        <li><BsWrench /> Keep my knowledge up to date to remain operational</li>
                    </ul>
                </div>
            </div>
        </div>
    )   
}

export default Army 
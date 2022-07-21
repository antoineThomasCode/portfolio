import React from "react";

// image needed

import frenchArmy from "../../assets/images/armeeDeTerre.png"
import OpenClassrooms from "../../assets/images/OC-logo.png"
import bac from "../../assets/images/reims.png"

function Education () {
    
    return (
        <div className="Education">
            <h2>Education</h2>
            <div className="degrees">
                <p className="year">
                    2022 
                </p>
                <p className="school">
                   <img className="OC-logo" src={OpenClassrooms} alt="OpenClassrooms" /> OpenClassrooms
                </p>
                <p className="role">
                    Front End developper - React specialty
                </p>
            </div>
            <div className="degrees">
                <p className="year">
                    2014  
                </p>
                <p className="school">
                   <img src={frenchArmy} alt="Armée de Terre" /> ENSOA - French Army shcool 
                </p>
                <p className="role">
                    Non-commissioned officer
                </p>
            </div>
            <div className="degrees">
                <p className="year">
                    2013 
                </p>
                <p className="school">
                   <img src={bac} alt="Académie de Reims" /> Lycee Gaston Bachelard
                </p>
                <p className="role">
                    Literary baccalaureate - Cinema specialty
                </p>
            </div>
        </div>
    )
}
export default Education
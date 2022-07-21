import React from "react";
import "../../scss/components/ResumeContent.scss"

//images nedded 

import imgProfile from "../../assets/images/photoProfile.jpg"

// icons nedded
import reactlogo from "../../assets/icons/React.png"
import jestlogo from "../../assets/icons/jest.png"
import sasslogo from "../../assets/icons/sass.png"
import reduxlogo from "../../assets/icons/redux.png"

// components nedded 
import Profile from "./Profile";
import Education from "./Education";
import Experience from "./Experience";
import ResumeContact from "./ResumeContact";

function ResumeContent () {
    
    return (
        <div className="ResumeContent">
            <div className="Resume__profileImg">
                <img src={imgProfile} alt="" />
            </div>
            <div className="Resume__technos">
                <img src={sasslogo} alt="sass" />
                <img src={reactlogo} alt="React" />
                <img src={reduxlogo} alt="Redux" />
                <img className="jest" src={jestlogo} alt="Jest" />
            </div>
            <div className="aside">
                 <Education />
                 <ResumeContact />
            </div>
            <div className="profile-exp">
                <Profile />
                <Experience />
            </div>
        </div>
    )
}
export default ResumeContent
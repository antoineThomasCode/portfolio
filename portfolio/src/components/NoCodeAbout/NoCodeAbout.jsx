import React from "react";
import PerfChart from "./PerfChart";
import Army from "./Army";
import OcDegree from "./OcDegree";
import { useNavigate } from "react-router-dom";

function NoCodeAboutContent () {

    const navigate = useNavigate();

    function handleClick (e) {
        e.preventDefault()
        navigate('/resume')
    }
    return (
        <div className="NoCodeAbout__Content">
            <h1 className="whatKind">What kind of employee am I ? </h1> 
            <span className="separator"></span>
            <PerfChart />
            
            <div className="card-container">
                <OcDegree />
                <Army />
            </div>
            
                <button className="oc-button"
                onClick={(e) => handleClick(e)}    
                  > Go to my resume  ➔</button>

        </div>
    )
}
export default NoCodeAboutContent
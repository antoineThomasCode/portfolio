import React from "react";
import PerfChartCode from "./PerfChartCode";
import '../../scss/components/CodeAboutContent.scss'

function CodeAboutContent () {

    return (
        <div className="CodeAboutContent">
            <h1> What kind of developer am I ?</h1>
            <span className="separator"></span>
            <PerfChartCode />
          
        </div>
    )
}
export default CodeAboutContent
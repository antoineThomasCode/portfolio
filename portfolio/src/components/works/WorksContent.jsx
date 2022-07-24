import React from "react";
import FreelanceWorks from "./FreelanceWorks";
import OpenclassroomsProjects from "./OpenclassroomsProjects";
import "../../scss/components/WorksContent.scss"
function WorksContent () {

    return (
        <div className="works__content">
            <FreelanceWorks />
            <OpenclassroomsProjects />
        </div>
    )
}
export default WorksContent
import React from "react";
import projectsOc from "../../mockedData/projectsData";
import "../../scss/components/WorksContainer.scss"
import Project from "./Project";


function OpenclassroomsProjects () {
    return (
        <div className="works__container-cards">
            <h2>My OpenClassrooms projects</h2>
            {projectsOc.map((project, index )=> {
                return <Project projectItem={project} key={index} />
            })}
        </div>
    )
}
export default OpenclassroomsProjects
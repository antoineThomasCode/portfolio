import React from "react";
import "../../scss/components/Project.scss"
function Project ({projectItem}) {

    return (
        <article className="project__card">
            <h4 className="project__title">{projectItem.title}</h4>
            <figure>
                <img src={projectItem.img} alt={projectItem.title} />
            </figure>
            <div className="project__infos">
                <div>
                    Tools  <div>{(projectItem.technos.map((techno, index) => {
                        return <span className="techno-card" key={index}>{techno}</span>
                    }))}</div> 
                </div>
                <div>client  <img src={projectItem.client} alt="name of the client" /></div>
                <div className="project__button">
                    <a className="github-buttom" href={projectItem.github}>View on github ➔</a>
                    {projectItem.demo ? (<a className="demo-buttom" href={projectItem.demo}>View a demo ➔</a>) : null}
                </div>
            </div>
        </article>
    )
}
export default Project
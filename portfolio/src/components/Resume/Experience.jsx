import React from "react";
import army from "../../assets/images/armeeDeTerre.png"
import reims from "../../assets/images/reims.png"
import maltMission from "../../assets/images/malt-avis.jpg"

function Experience () {

    return (
        <div className="experience">
            <h2>Experience</h2>
            <article>
                <div className="info-job">
                    <p> 2021 - Present</p>
                    <h3>Freelance</h3>
                </div>
                <div>
                    <p className="job-name">
                        Front End Developper
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quis officia voluptatibus perferendis exercitationem enim
                          eius veniam unde ab sint tempora fugit dolor fuga
                           blanditiis cupiditate esse, quibusdam dicta commodi 
                           possimus!
                    </p>
                    <a  target="_blank" rel="noreferrer" href="https://www.malt.fr/profile/antoinethomas4">
                        <img src={maltMission} alt="avis malt" />
                    </a>
                </div>
            </article>
            <article>
                <div className="info-job">
                    <p> 2017 - 2020</p>
                    <h3>Education National</h3>
                    <img src={reims} alt="" />
                </div>
                <div>
                    <p className="job-name">
                        Education Assistant
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quis officia voluptatibus perferendis exercitationem enim
                          eius veniam unde ab sint tempora fugit dolor fuga
                           blanditiis cupiditate esse, quibusdam dicta commodi 
                           possimus!
                    </p>
                </div>
            </article>
            <article>
                <div className="info-job">
                    <p> 2014 - 2017</p>
                    <h3>French Army</h3>
                    <img src={army} alt="" />
                </div>
                <div>
                    <p className="job-name">
                        Group leader
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quis officia voluptatibus perferendis exercitationem enim
                          eius veniam unde ab sint tempora fugit dolor fuga
                           blanditiis cupiditate esse, quibusdam dicta commodi 
                           possimus!
                    </p>
                </div>
            </article>
        </div>
    )
}
export default Experience
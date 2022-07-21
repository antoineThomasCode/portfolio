import React from "react";
import PerfChart from "./PerfChart";
import openClassrooms from '../../assets/images/openclassrooms.png'
import ocPath from '../../assets/images/devfront.png'
import cohesion from '../../assets/images/cohesion.jpg'
import {BsBatteryHalf, BsPersonBoundingBox, BsFileEarmarkCheck, BsChatDots, BsLink, BsWrench} from "react-icons/bs";
import {Link} from 'react-router-dom'
import understanding from '../../assets/images/understanding.jpg'
import code from '../../assets/images/use-code.jpg'

function NoCodeAboutContent () {
    
    
    return (
        <div className="NoCodeAbout__Content">
            <h1>What kind of employee am I ? </h1> 
            <span className="separator"></span>
            <PerfChart />
            <div className="values">
                <div >
                    <h2>A Bac +3/4 certification from  <img className="openclassrooms" src={openClassrooms} alt="openclassrooms" /></h2>
                    <div className="oc-container">
                        <img className="devfront" src={ocPath} alt="formation developpeur front end openclassrooms" />
                        <a target='_blanck' className="oc-button"
                         href="https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react"
                         >More infos about Openclassrooms  ➔</a>
                    </div>
                </div>
                <div className="">
                    <h2>Additional skills from my military experience </h2>
                    <div className="cohesion-container">
                    <div className="cohesion-title">« S'élever par l'effort. »</div>
                    <img className="cohesion" src={cohesion} alt="armée de terre" />
                    <div className="list-value-container">
                        <ul>
                            <li><BsBatteryHalf /> Be aware of your own limits</li>
                            <li><BsPersonBoundingBox /> Rigor and know-how during the missions entrusted</li>
                            <li><BsFileEarmarkCheck /> Know how to report effectively and concisely</li>
                        </ul>
                        <ul>
                            <li><BsChatDots /> Know how to communicate to avoid conflict</li>
                            <li><BsLink /> Be an actor in the cohesion of the working group</li>
                            <li><BsWrench /> Keep your knowledge up to date to remain operational</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="devContainer">
                    <h2> What is being a developer in your Company for me?</h2>
                    <span className="circle"></span>
                    <article>
                        <figure>
                            <img src={understanding} alt="illustration de comprhésion" />
                        </figure>
                        <h3>Be adapt to my interlocutor </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptates culpa esse ullam autem. Reiciendis error labore ab deserunt architecto nostrum commodi. Voluptate eius laborum delectus quos quidem, provident temporibus?</p>
                    </article>
                    <article>
                        <figure>
                            <img src={code} alt="" />
                        </figure>
                        <h3>make my best to answer to your problematics using code </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequuntur sunt aut accusantium recusandae soluta doloribus, voluptatibus quaerat officiis omnis, ad eius, porro quisquam! Atque officiis nostrum tempore inventore vitae?</p>
                    </article>
                    <article>
                        <figure>
                            <img src={ocPath} alt="" />
                        </figure>
                        <h3>keep a moral </h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum officiis aperiam porro praesentium sequi a sed iure est natus similique. Iusto animi perspiciatis architecto necessitatibus tenetur, unde culpa velit aliquam?</p>
                    </article>
                    <article>
                        <figure>
                            <img src={ocPath} alt="" />
                        </figure>
                        <h3>keep a moral </h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quaerat accusamus fugit dolorum sint eligendi possimus eaque magni dolores quam sunt quisquam delectus, ipsum incidunt non vero animi suscipit veritatis!</p>
                    </article>
                </div>
                <Link className="oc-button"
                to="/resume"
                >Go to my resume  ➔</Link>
            </div>
        </div>
    )
}
export default NoCodeAboutContent
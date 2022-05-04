import React from "react";
import '../scss/pages/Home.scss'

import portrait from '../assets/images/portrait.jpg'
import grosseDamegif from '../assets/images/la-grosse-dame.gif'
import vif from '../assets/images/vif-dor.gif'

function Home () {
    return (
        <main className="homepage">
                <div className="hello-container"> 
                    <span className="hello">Hello, </span><br></br>
                    <h1 className="name-is">My Name is <span className="grosse-damename-yellow"> Antoine Thomas</span>.</h1>
                    <h2>I am a Front-End Developer.</h2>
                </div>
                <div className="skills">
                    <h3>My skills</h3>
                </div>
        </main>
    )
}
export default Home
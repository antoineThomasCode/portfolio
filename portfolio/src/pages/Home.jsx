import React from "react";
import '../scss/pages/Home.scss'




function Home () {
    return (
        <main className="homepage">
                <div className="hello-container"> 
                    <span className="hello">Hello, </span><br></br>
                    <h1 className="name-is">My Name is <span className="grosse-damename-yellow"> Antoine Thomas</span>.</h1>
                    <h2>I am a <span>(Junior)</span> Front-End Developer.</h2>
                    
                </div>
                
        </main>
    )
}
export default Home
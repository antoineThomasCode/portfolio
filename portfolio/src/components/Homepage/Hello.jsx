import React from "react";
import '../../scss/components/Hello-home.scss'
import TypeWriterEffect from "react-typewriter-effect";

function Hello () {
    return (
        <div className="home_hello"> 
            <TypeWriterEffect 
                hideCursorAfterText='true'
                startDelay={1000}
                cursorColor="white"
                text="Hi there ! 👋"
                typeSpeed={30}
            />
            <TypeWriterEffect
                hideCursorAfterText='true'
                startDelay={1500}
                cursorColor="white"
                text="I'm Antoine Thomas"
                typeSpeed={30}
            />
            <TypeWriterEffect
                hideCursorAfterText='true'
                startDelay={2500}
                cursorColor="white"
                text="A Front End Developper,"
                typeSpeed={30}
            />
            <TypeWriterEffect
                startDelay={3800}
                hideCursorAfterText='true'
                cursorColor="white"
                text="focused on React. "
                typeSpeed={30}
            />
        </div>
    )
}
export default Hello
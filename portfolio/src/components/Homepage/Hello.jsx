import React from "react";
import '../../scss/components/Hello-home.scss'
import TypeWriterEffect from "react-typewriter-effect";

function Hello () {
    return (
        <div className="home_hello"> 
            <TypeWriterEffect 
                hideCursorAfterText='true'
                startDelay={1000}
                cursorColor="black"
                text="Hi there ! 👋"
                typeSpeed={20}
            />
            <TypeWriterEffect
                hideCursorAfterText='true'
                startDelay={1500}
                cursorColor="black"
                text="I'm Antoine Thomas"
                typeSpeed={20}
            />
            <TypeWriterEffect
                hideCursorAfterText='true'
                startDelay={2300}
                cursorColor="white"
                text="A Front End Developper,"
                typeSpeed={20}
            />
            <TypeWriterEffect
                startDelay={3000}
                cursorColor="black"
                text="focused on React. "
                typeSpeed={20}
            />
        </div>
    )
}
export default Hello
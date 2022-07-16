import React from "react";
import '../../scss/components/QuestionModale.scss'
import TypeWriterEffect from "react-typewriter-effect";

function QuestionModale () {
    return (
        <div className="question-modale">
                <TypeWriterEffect 
                hideCursorAfterText='true'
                startDelay={600}
                cursorColor="white"
                text="Do you have programming knowledge ?"
                typeSpeed={20}
                 />
                 <button>Yes, I have</button>
                 <button>No, I have not</button>
        </div>
    )
}
export default QuestionModale
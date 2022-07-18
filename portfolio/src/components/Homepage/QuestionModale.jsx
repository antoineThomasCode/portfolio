import React from "react";
import '../../scss/components/QuestionModale.scss'
import TypeWriterEffect from "react-typewriter-effect";
import { useNavigate } from "react-router-dom";

function QuestionModale () {
    const navigate = useNavigate();
    function handleClickCode (e) {
        e.preventDefault()
        navigate('/code-about')
    }
    function handleClickNoCode (e) {
        e.preventDefault()
        navigate('/no-code-about')
    }
    return (
        <div className="question-modale">
                <TypeWriterEffect 
                hideCursorAfterText='true'
                startDelay={600}
                cursorColor="#0A175C"
                text="Do you have programming knowledge ?"
                typeSpeed={20}
                 />
                 <button onClick={(e) => handleClickCode(e)}>Yes, I have</button>
                 <button onClick={(e) => handleClickNoCode(e)}>No, I have not</button>
        </div>
    )
}
export default QuestionModale
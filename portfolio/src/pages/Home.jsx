import React from "react";
import '../scss/pages/Home.scss'
import Hello from "../components/Homepage/Hello";
import { useState } from "react";
import profilePicture from '../assets/images/photoProfile.jpg'
import QuestionModale from "../components/Homepage/QuestionModale";


function Home () {
    const [displayQuestion, setDisplayQuestion] = useState(false)

    setTimeout(() => {  setDisplayQuestion(true) }, 4000);
    const closeModale = () => {
      setDisplayQuestion(false)
    }
    return (
        <main className="homepage">
            <div className="profile">
              <div className="profilePicture">
                <img src={profilePicture} alt="photo de Antoine Thomas" />
                </div>
              <Hello />
              <div className="question-modale-container">
                {displayQuestion ? (<QuestionModale closeModale={closeModale} />) : null}
              </div>
            </div>
        </main>
    )
}
export default Home
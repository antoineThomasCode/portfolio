import React from "react";
import '../scss/pages/Home.scss'
import Hello from "../components/Homepage/Hello";
import { useState } from "react";
import profilePicture from '../assets/images/photoProfile.jpg'
import QuestionModale from "../components/Homepage/QuestionModale";
import circleForm from "../assets/images/form-green.svg"
import laptotRight from "../assets/images/mobile-right.png"
import laptotLeft from "../assets/images/ohmyfood-display.png"

function Home () {
    const [displayQuestion, setDisplayQuestion] = useState(false)

    setTimeout(() => {  setDisplayQuestion(true) }, 5000);

    return (
        <main className="homepage">
            <div className="profile">
              <div className="profilePicture">
                <img src={circleForm} alt="forme d'illustration" />
                <img src={laptotRight} alt="apercu sur mobile" />
                <img src={laptotLeft} alt="aperçu sur desktop" />
                <img src={profilePicture} alt="Antoine Thomas" />
                </div>
              <Hello />
              <div className="question-modale-container">
                {displayQuestion ? (<QuestionModale  />) : null}
              </div>
            </div>
        </main>
    )
}
export default Home
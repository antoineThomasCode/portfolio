import React from "react";
//style 
import '../../scss/components/OcDegree.scss'
//images nedded 
import ocIllustration from '../../assets/images/oc-illu-diplome.avif'
function OcDegree () {

    return (
        <div className="oc__container">
            <h2>A certification from OpenClassrooms</h2>
            <div className="oc__card">
            <div className="oc__infos">
                <p className="oc__title"> JavaScript React Developer</p>
                <p className="oc__description">
                    This training consists of carrying out 14 professionalizing projects 
                    ranging from the integration 
                    of static pages to the conversion of a jquery library to React</p>
                <p className="oc__degreeInfos">
                    Bachelor's-level diploma (Bac +3/4) <br />
                    Full time : 12 months
                </p>
            </div>
            <div className="oc__illustration">
                <img src={ocIllustration} alt="illustration diplome Openclassrooms" />
            </div>
            <a target='_blanck' className="oc-button"
            href="https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react"
            >More infos about Openclassrooms  ➔</a>
        </div>
        </div>
    )
}
export default OcDegree
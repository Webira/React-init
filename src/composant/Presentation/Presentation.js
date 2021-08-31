import React from 'react'
import eclair from '../../cafe.jpg'

const Presentation = () => {
    return (
        
        <div className="eclair">
            <h2>Eclair au café</h2>
            <p>
            With your permission we and our partners may use precise geolocation data 
            and identification through device scanning. You may click to consent to our 
            and our partners’ processing as described above. Alternatively you may access
            more detailed information and change your preferences before consenting or
            to refuse consenting. Please note that some processing of your personal 
            data may not require your consent, but you have a right to object to such 
            processing. Your preferences will apply to this website only. You can 
            change your preferences at any time by returning to this site or visit
            our privacy policy.
            </p>
            
            <img src={eclair} className="App-cafe" alt="eclair pate choix creme café glaçage" width="400"/>
                            
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >Learn Recette
            </a>
            
        </div>
    )
}

export default Presentation

import React from 'react'
import contact from './images/OL06ZJ0.jpg';

const Carte = (props) => {
    return (
        <div>
            <img src={contact} alt="image du contact"/>
            <h2>{props.x.nom}</h2>
            <h2>{props.x.prenom}</h2>
            <h2>{props.x.age}</h2>
            
        </div>
    )
}

export default Carte

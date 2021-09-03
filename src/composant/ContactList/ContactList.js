import React from 'react'
import { Link } from 'react-router-dom'
import Carte from '../Carte/Carte'

const ContactList = ({filtre}) => {
console.log(filtre)

    const contactList= [
        { nom:"Irina", prenom:"Guery", age:20},{ nom:"Maelle", prenom:"Donn", age:19},{ nom:"Robinson", prenom:"Robin", age:25}
    ]
    return (

        // <p>
        //     Liste de contactes
        // </p>
         <div>
             {contactList.filter (el=>el.prenom.toLowerCase().includes(filtre.toLowerCase())||el.nom.toLowerCase().includes(filtre.toLowerCase())).map(el=>
             <Link to={`/Info${el.nom}`}><Carte x={el}/></Link>)} 
         </div>
    )
}

export default ContactList




import React from 'react'
import contact from '../../images/OL06ZJ0.jpg';
import {Card,ListGroupItem,ListGroup} from "react-bootstrap"
const Carte = (props) => {
    return (
        <div>
            {/* <img src={contact} style={{width:"50px"}} alt="image du contact"/> 
            <h2>{props.x.nom}</h2>
            <h2>{props.x.prenom}</h2>
            <h2>{props.x.age}</h2> */}
            
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={contact} style={{width:"200px"}} alt="image du contact" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
            <ListGroupItem>{props.x.nom}</ListGroupItem> 
            <ListGroupItem>{props.x.prenom}</ListGroupItem>
            <ListGroupItem>{props.x.age}</ListGroupItem>
            </ListGroup>
            <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
            </Card>

        </div>
    )
}

export default Carte

import React from 'react'
import {Card} from "react-bootstrap"

const Footer = () => {
    return (
        <div>
            <Card>
                <Card.Body>This is some text within a card body.</Card.Body>

                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card> 
        </div>
    )
}

export default Footer

import React , {useState} from 'react' 
import { Switch,Router,Link} from 'react-router-dom'

import {Container,Navbar,Nav,NavDropdown,Form,FormControl,Button} from "react-bootstrap"
const NavBar = ({rech}) => {
    const [recherche, setRecherche] = useState("")
    /*console.log(recherche)*/
    return (
        
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/">
                    <Nav.Link href="#home">Home</Nav.Link> </Link>
                    <Link to="/Contact">
                    <Nav.Link href="#link">Contacts</Nav.Link></Link>
                    <Link to="/About">
                    <Nav.Link href="#link">A propos</Nav.Link></Link>

                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                    onChange={(el)=>{setRecherche(el.target.value)}}
                />
                <Button variant="outline-success" onClick={()=>{rech(recherche)}} >Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        
    )
}

export default NavBar

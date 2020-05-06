import React from 'react';
import {Navbar,Nav,Form, FormControl,Button, NavDropdown} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCalendarAlt, faChartBar, faHome,faGlobe,faCog,faBell} from '@fortawesome/free-solid-svg-icons';

class NavbarMenu extends React.Component{

    render(){
        return(
            <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Stratos</Navbar.Brand>
    <Nav className="mr-auto">
    <Nav.Link href="#pricing"><FontAwesomeIcon icon={faChartBar} /> Tableau de bord</Nav.Link>
      <Nav.Link href="#features"><FontAwesomeIcon icon={faCalendarAlt} /> Planning</Nav.Link>
      <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
    </Nav>
    <Nav>
    <Nav.Link href="#home"> <FontAwesomeIcon icon={faHome} /> </Nav.Link> 
    <Nav.Link href="#globe"> <FontAwesomeIcon icon={faGlobe} /> </Nav.Link>
    <Nav.Link href="#home"> <FontAwesomeIcon icon={faCog} /> </Nav.Link> 
    <Nav.Link href="notif"> <FontAwesomeIcon icon={faBell} /> </Nav.Link>

    <NavDropdown title="Utilisateur 1">
      <NavDropdown.Item href="#action1">Action 1</NavDropdown.Item>
      <NavDropdown.Item herf="#action2">Action 2</NavDropdown.Item>
      <NavDropdown.Item href="#action3">Action 3</NavDropdown.Item>
    </NavDropdown>
    
    </Nav>
    
  </Navbar>
        )
    }
}

export default NavbarMenu;
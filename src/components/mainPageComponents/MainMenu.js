import React from 'react'
import {Navbar, NavDropdown,Nav} from 'react-bootstrap'
import UserService from '../../service/UserService';

function MainMenu() {

    const logoutHandler = () => {
        UserService.logout();
    }

     return (
        <Navbar bg="dark" variant="dark" expand="lg" className='MainMenu'>
            <Navbar.Brand href="#home">
                <img
                        alt=""
                        src="/logo.jpg"
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                    />
                    {' Event Sorcerer '}
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Events" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">View Events</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Replay</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Clear App State</NavDropdown.Item>                
                    </NavDropdown>
                </Nav>
                <Nav.Link className="ml-auto" onClick={logoutHandler}><b className='Logout'>Logout</b></Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MainMenu;
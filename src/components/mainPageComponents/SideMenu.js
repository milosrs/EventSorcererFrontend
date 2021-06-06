import React from 'react'
import { Accordion, Button, Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import {faUser, faList, faPlus, faPen, faIceCream} from '@fortawesome/free-solid-svg-icons'
import { FontLink } from '../baseComponents/FontLink.js';


const SideMenu = (props) => {
    const labelsColor = "#1A485F";

    return (<Accordion className="SideMenu">

            <Card className="Card">
                <Card.Body>
                    <Accordion.Toggle as={Button} variant='link' className="CardBody">
                        <FontLink 
                            color={labelsColor} 
                            icon={faUser} 
                            text="User profile" 
                            link='/keycloak/ProfileOverview'>
                        </FontLink>
                    </Accordion.Toggle>
                </Card.Body>
            </Card>


            <Card className="Card">
                <Card.Header>
                    <Accordion.Toggle as={Button} variant='link' eventKey='1' className="CardBody">
                        <FontLink 
                            color={labelsColor} 
                            icon={faIceCream} 
                            text='Product'/>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body className="SideMenuCollapsed">
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className="SideMenuCollapsed SideMenuCollapsedItem">
                                <FontLink 
                                    color={labelsColor} 
                                    icon={faPlus}
                                    text='Add product' 
                                    link='/keycloak/AddProduct'/>
                            </ListGroupItem>
                            <ListGroupItem className="SideMenuCollapsed SideMenuCollapsedItem">
                                <FontLink 
                                    color={labelsColor} 
                                    text='Manage products' 
                                    link='/keycloak/ManageProduct'
                                    icon={faPen}/>
                            </ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card className="Card">
                <Card.Header>
                    <Accordion.Toggle as={Button} variant='link' eventKey='2' className="CardBody">
                        <FontLink 
                            color={labelsColor}
                            icon={faList}
                            text='Order'/>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body className="SideMenuCollapsed">
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className="SideMenuCollapsed SideMenuCollapsedItem">
                                <FontLink 
                                    color={labelsColor} 
                                    icon={faPlus} 
                                    text='Add order' 
                                    link='/keycloak/AddOrder'
                                    />
                            </ListGroupItem>
                            <ListGroupItem className="SideMenuCollapsed SideMenuCollapsedItem">
                                <FontLink 
                                    color={labelsColor}
                                    icon={faPen}
                                    text='Manage order' 
                                    link='/keycloak/ManageOrder'
                                    />
                            </ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
    </Accordion>);
}

export default SideMenu;
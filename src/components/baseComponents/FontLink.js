import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function FontLink(props, { match }) {
 
    return(props.link !== undefined && props.link !== null ? 
                (<Link style={{color: props.color}} to={`${props.link}`} >
                    <Row>
                        <Col className='SideMenuIcon' sm={2}>
                            <FontAwesomeIcon icon={props.icon} />
                        </Col>
                        <Col className='SideMenuText' sm={10}>
                            <div>{props.text}</div>
                        </Col>
                    </Row>
                </Link>) : 
            (<div style={{color: props.color}} >
                <Row>
                    <Col className='SideMenuIcon' sm={2}>
                        <FontAwesomeIcon icon={props.icon} />
                    </Col>
                    <Col className='SideMenuText' sm={10}>
                        <div>{props.text}</div>
                    </Col>
                </Row>
            </div>)
        );
}
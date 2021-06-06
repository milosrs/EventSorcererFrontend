import React from 'react'
import { Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import UserService from '../../service/UserService.js';
import { Utility } from '../../service/Utility.js';
import Header from '../mainPageComponents/Header.js';

const UserForm = () => (
    <div className="MainPageFormContainer">
        <Header/>
        <Form className="MainPageForm">
            <FormGroup controlId="name">
                <FormLabel>First Name</FormLabel>
                <FormControl type="text" placeholder="" value={UserService.getToken().given_name} disabled></FormControl>
            </FormGroup>

            <FormGroup controlId="name">
                <FormLabel>Last Name</FormLabel>
                <FormControl type="text" placeholder="" value={UserService.getToken().family_name} disabled></FormControl>
            </FormGroup>

            <FormGroup controlId="name">
                <FormLabel>Full Name</FormLabel>
                <FormControl type="text" placeholder="" value={UserService.getToken().name} disabled></FormControl>
            </FormGroup>

            <FormGroup controlId="name">
                <FormLabel>Username</FormLabel>
                <FormControl type="text" placeholder="" value={UserService.getUsername()} disabled></FormControl>
            </FormGroup>

            <FormGroup controlId="description">
                <FormLabel>Roles</FormLabel>
                <Form.Control as='textarea' rows='3' value={Utility.createStringFromArray(UserService.getRole())} disabled/>
            </FormGroup>
        </Form>
    </div>
);

export default UserForm;
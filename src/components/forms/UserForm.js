import React, { Component } from 'react'
import { Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { Endpoints, Request } from '../../request/Requests.js';
import UserService from '../../service/UserService.js';
import { Utility } from '../../service/Utility.js';
import Header from '../mainPageComponents/Header.js';

class UserForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {};
    }

    changeHandler = (e) => {
        const stateChangeObject = {};
        stateChangeObject[e.target.id] = e.target.value;

        this.setState(stateChangeObject);
    }

    submitHandler = () => {
        const state = this.state;
        const data = {
            name: state.name,
            description: state.description,
            price: state.price
        };

        Request.create(data, Endpoints.Order.create)
    }

    render() {
        console.log(UserService.getUsername());

        return(<div className="MainPageFormContainer">
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
    }
}

export default UserForm;
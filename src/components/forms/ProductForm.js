import React, { Component } from 'react'
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { Endpoints, Request } from '../../request/Requests.js';
import UserService from '../../service/UserService.js';
import Header from '../mainPageComponents/Header.js';

class ProductForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            description: '',
            price: -1,
        };
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

        Request.create(data, Endpoints.Product.create);
    }

    render() {
        console.log(UserService.getToken())
        return(<div className="MainPageFormContainer">
                <Header/>
                <Form className="MainPageForm">
                    <FormGroup controlId="name">
                        <FormLabel>Name</FormLabel>
                        <FormControl type="text" placeholder="" onChange={this.changeHandler}></FormControl>
                    </FormGroup>

                    <FormGroup controlId="description">
                        <FormLabel>Description</FormLabel>
                        <Form.Control as='textarea' rows='3' onChange={this.changeHandler}/>
                    </FormGroup>

                    <FormGroup controlId="price">
                        <FormLabel>Price</FormLabel>
                        <FormControl type="number" placeholder="" onChange={this.changeHandler}></FormControl>
                    </FormGroup>

                    <Button variant="primary" type="button" className="FormButton" onClick={this.submitHandler}>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default ProductForm;
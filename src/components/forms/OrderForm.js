import React, { useState } from 'react'
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { Endpoints, Request } from '../../request/Requests.js';
import Header from '../mainPageComponents/Header.js';

const OrderForm = (props) => {
    const [state, setState] = useState({
        name: '',
        description: '',
        price: 0,
    });

    const changeHandler = (e) => 
        setState({
            ...state,
            [e.target.id]: e.target.value,
        });

    const submitHandler = () => Request.create(state, Endpoints.Order.create)

    return(
        <div className="MainPageFormContainer">
            <Header/>
            <Form className="MainPageForm">
                <FormGroup controlId="name">
                    <FormLabel>Name</FormLabel>
                    <FormControl id='name' type="text" placeholder="" onChange={this.changeHandler}></FormControl>
                </FormGroup>

                <FormGroup controlId="description">
                    <FormLabel>Description</FormLabel>
                    <Form.Control id='description' as='textarea' rows='3' onChange={this.changeHandler}/>
                </FormGroup>

                <FormGroup controlId="price">
                    <FormLabel>Price</FormLabel>
                    <FormControl id='price' type="number" placeholder="" onChange={this.changeHandler}></FormControl>
                </FormGroup>

                <Button variant="primary" type="button" className="FormButton" onClick={this.submitHandler}>Submit</Button>
            </Form>
        </div>
    );
}

export default OrderForm;
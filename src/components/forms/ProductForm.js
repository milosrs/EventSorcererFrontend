import React, { Component, useState } from 'react'
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { Endpoints, Request } from '../../request/Requests.js';
import Header from '../mainPageComponents/Header.js';

const ProductForm = (props) => {
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
    

    const submitHandler = () => Request.create(state, Endpoints.Product.create);

    return(<div className="MainPageFormContainer">
            <Header/>
            <Form className="MainPageForm">
                <FormGroup controlId="name">
                    <FormLabel>Name</FormLabel>
                    <FormControl type="text" placeholder="" onChange={changeHandler}></FormControl>
                </FormGroup>

                <FormGroup controlId="description">
                    <FormLabel>Description</FormLabel>
                    <Form.Control as='textarea' rows='3' onChange={changeHandler}/>
                </FormGroup>

                <FormGroup controlId="price">
                    <FormLabel>Price</FormLabel>
                    <FormControl type="number" placeholder="" onChange={changeHandler}></FormControl>
                </FormGroup>

                <Button variant="primary" type="button" className="FormButton" onClick={submitHandler}>Submit</Button>
                <Button variant="primary" type="button" className="FormButton" onClick={submitHandler}>Send message</Button>
            </Form>
        </div>
    );
    
}

export default ProductForm;
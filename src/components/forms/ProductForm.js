import React, { useState } from 'react'
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { Endpoints, Request } from '../../request/Requests.js';
import { sendMessage } from '../../service/WebsocketService.js';
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
    const sendMessageHandler = () => sendMessage();
    const submitHandler = () => Request.create(state, Endpoints.Product.create);

    return(<div className="MainPageFormContainer">
            <Header/>
            <Form className="MainPageForm">
                <FormGroup controlId="name">
                    <FormLabel>Name</FormLabel>
                    <FormControl id='name' type="text" placeholder="" onChange={changeHandler}></FormControl>
                </FormGroup>

                <FormGroup controlId="description">
                    <FormLabel>Description</FormLabel>
                    <Form.Control id='description' as='textarea' rows='3' onChange={changeHandler}/>
                </FormGroup>

                <FormGroup controlId="price">
                    <FormLabel>Price</FormLabel>
                    <FormControl id='price' type="number" placeholder="" onChange={changeHandler}></FormControl>
                </FormGroup>

                <Button variant="primary" type="button" className="FormButton" onClick={submitHandler}>Submit</Button>
                <Button variant="primary" type="button" className="FormButton" onClick={sendMessageHandler}>Send message</Button>
            </Form>
        </div>
    );
    
}

export default ProductForm;
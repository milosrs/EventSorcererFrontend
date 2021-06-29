import React from 'react';
import { Route } from 'react-router';
import OrderForm from './forms/OrderForm.js';
import ProductForm from './forms/ProductForm.js';
import UserForm from './forms/UserForm.js';

const LoginCallback = () => 
    <div id='form' className='MainPage'>
        <Route path="/keycloak/AddProduct" component={ProductForm}/>
        <Route path="/keycloak/ManageProduct" />
        <Route path="/keycloak/AddOrder" component={OrderForm}/>
        <Route path="/keycloak/ManageOrder"/>
        <Route path="/keycloak/ProfileOverview" component={UserForm}/>
    </div>

export default LoginCallback;
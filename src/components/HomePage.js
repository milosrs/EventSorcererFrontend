import React from 'react';
import {Button} from 'react-bootstrap';
import { useHistory } from 'react-router';
import UserService from '../service/UserService'

function HomePage() {
    let history = useHistory();

    return (<div className="App">
        <header className="App-header">
            <img src="merlin.png" className="App-logo" alt="logo" />
            <h1>Event Sorcerer</h1>

            <div>
                <Button variant={"success"} onClick={() => history.push('/keycloak')}>GET BACK TO WORK!</Button>
                <div>{' '}</div>
                <Button variant={"primary"} onClick={loginHandler}>Login</Button>
                <div>{' '}</div>
                <Button variant={"danger"} onClick={logoutHandler}>Logout</Button>
                <div>{' '}</div>
                <Button variant={"warning"} onClick={registerHandler}>Register</Button>
            </div>
        </header>
  </div>);
}

function loginHandler(e) {
    UserService.login();
};

function logoutHandler(e) {
    UserService.logout();
}

function registerHandler(e) {
    UserService.register();
}

export default HomePage;
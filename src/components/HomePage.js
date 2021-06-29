import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import { useHistory } from 'react-router';
import UserService from '../service/UserService'

const HomePage = () => {
    const [hist, setHist] = useState({
        history: useHistory(),
    });
    const loginHandler = (e) => UserService.login();
    const logoutHandler = (e) => UserService.logout();
    const registerHandler = (e) => UserService.register();

    return (<div className="App">
        <header className="App-header">
            <img src="merlin.png" className="App-logo" alt="logo" />
            <h1>Event Sorcerer</h1>

            <div>
                <Button variant={"success"} onClick={() => hist.history.push('/keycloak')}>GET BACK TO WORK!</Button>
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

export default HomePage;
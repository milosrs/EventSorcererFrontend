import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import UserService from './service/UserService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Request } from './request/Requests.js';
import { initWebsocketConnection } from './service/WebsocketService';

const initializeApplication = () => {
  initWebsocketConnection();
  
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

  Request.configureAxiosDefault();
};

const renderError = () => ReactDOM.render(
  <React.StrictMode>
    <div><h1 className="TextCenter">Error communicating with Keycloak OAuth2 client</h1></div>
  </React.StrictMode>,
  document.getElementById('root')
);

UserService.initKeycloak(initializeApplication, renderError);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

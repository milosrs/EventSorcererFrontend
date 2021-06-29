import React from 'react';
import '../style/App.scss';
import LoginCallback from './LoginCallback.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainMenu from './mainPageComponents/MainMenu';
import SideMenu from './mainPageComponents/SideMenu';
import HomePage from './HomePage';

const App = () => (
  <Router>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="/keycloak" >
          <div className='Page'>
              <MainMenu/>
              
              <div className='UnderMenu'>
                  <SideMenu/>
                  <LoginCallback/>
              </div>
          </div>
        </Route>
      </Switch>
    </Router>
);

export default App;

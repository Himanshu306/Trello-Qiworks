import React from 'react';
import {Switch, Route} from 'react-router-dom';

import StartUpPage from './app/component/Trello/index';
import Login from './app/component/Login/index';
import Application from './app/component/application/index';
import "./app.scss"

class  App extends React.Component {
  render(){
    return (

      <Switch>
        <Route exact path = '/' component={StartUpPage} />
        <Route exact path = '/login' component={Login} />
        <Route  path = '/app' component={Application} />
      </Switch>
      
    );
  }
}

export default App;

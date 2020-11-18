import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import ListDomains from './components/ListDomains';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Container component="main">
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/domains">
            <ListDomains />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect
} from 'react-router-dom';
import { MainContainer } from './styles/styles';
import { LoggedRoute, NotLoggedRoute } from "./components/routes"
import Home from './pages/Home';
import Login from './pages/Login';

export function App() {
  return (
    <MainContainer>
      <Router>
        <Switch>
          <Route path="/" exact component={ () => <Redirect to="/app/login" />} />
          <NotLoggedRoute path="/app/login" exact component={Login}/>
          <LoggedRoute path="/app" exact component={Home} />
        </Switch>
      </Router>
    </MainContainer>
  );
};

export default App
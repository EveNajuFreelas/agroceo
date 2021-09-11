import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect
} from 'react-router-dom';
// import { useAuthentication } from "./context/authContext"
// import { MainContainer } from './styles/styles';
import { LoggedRoute, NotLoggedRoute } from "./components/routes"
import Home from './pages/Home';

export function App() {
  return (
    // <MainContainer>
      <Router>
        <Switch>
          <Route path="/" exact component={ () => <Redirect to="/app" />} />
          <NotLoggedRoute path="/app" exact component={Home} />
        </Switch>
      </Router>
    // </MainContainer>
  );
};

export default App
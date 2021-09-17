import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import { MainContainer, theme } from './styles/styles';
import { LoggedRoute, NotLoggedRoute } from './components/routes';
import Home from './pages/Home';
import Login from './pages/Login';
import { ThemeProvider } from '@material-ui/styles';

export function App() {
	return (
		<ThemeProvider theme={theme}>
			<MainContainer>
				<Router>
					<Switch>
						<Route
							path='/'
							exact
							component={() => <Redirect to='/app' />}
						/>
						<NotLoggedRoute
							path='/app/login'
							exact
							component={Login}
						/>
						<NotLoggedRoute path='/app' exact component={Home} />
					</Switch>
				</Router>
			</MainContainer>
		</ThemeProvider>
	);
}

export default App;

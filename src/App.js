import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import { MainContainer } from './styles/styles';
import { LoggedRoute, NotLoggedRoute } from './routes';
import { ThemeProvider } from '@material-ui/styles';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Despesas from './pages/Financeiro/Despesas';

export function App() {
	return (
		<ThemeProvider>
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
						<NotLoggedRoute
							path='/app'
							exact
							component={Dashboard}
						/>
						<NotLoggedRoute
							path='/financeiro/despesas'
							exact
							component={Despesas}
						/>
					</Switch>
				</Router>
			</MainContainer>
		</ThemeProvider>
	);
}

export default App;

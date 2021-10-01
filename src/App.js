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
import Investimento from './pages/Financeiro/Investimento';
import Receitas from './pages/Financeiro/Receitas';
import Combustivel from './pages/Manejo/Combustivel';
import Veiculos from './pages/Manejo/Veiculos';

export function App() {
	return (
		<ThemeProvider>
			<Router>
				<Switch>
					<Route
						path='/'
						exact
						component={() => <Redirect to='/app' />}
					/>
					<NotLoggedRoute path='/app/login' exact component={Login} />
					<NotLoggedRoute path='/app' exact component={Dashboard} />

					<NotLoggedRoute
						path='/financeiro/despesas'
						exact
						component={Despesas}
					/>
					<NotLoggedRoute
						path='/financeiro/investimentos'
						exact
						component={Investimento}
					/>
					<NotLoggedRoute
						path='/financeiro/receitas'
						exact
						component={Receitas}
					/>

					<NotLoggedRoute
						path='/manejo/combustivel'
						exact
						component={Combustivel}
					/>

					<NotLoggedRoute
						path='/manejo/veiculos'
						exact
						component={Veiculos}
					/>
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;

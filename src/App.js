import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import { NotLoggedRoute } from './routes';
import { ThemeProvider } from '@material-ui/styles';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Despesas from './pages/Financeiro/Despesas';
import Investimento from './pages/Financeiro/Investimento';
import Receitas from './pages/Financeiro/Receitas';
import Combustivel from './pages/Manejo/Combustivel';
import Veiculos from './pages/Manejo/Veiculos';
import MaoDeObra from './pages/Manejo/MaoObra';
import Tratores from './pages/Manejo/Tratores';
import Insumos from './pages/Manejo/Insumos';
import Areas from './pages/Manejo/Areas';
import Animals from './pages/Manejo/Animals';
import Demandas from './pages/Manejo/Demandas';
import Tarefas from './pages/Manejo/Tarefas';
import Lavouras from './pages/Manejo/Lavouras';

import materialUITheme from '../src/theme/materialUITheme';

export function App() {
	return (
		<ThemeProvider theme={materialUITheme}>
			<Router>
				<Switch>
					<Route
						path="/"
						exact
						component={() => <Redirect to="/dashboard" />}
					/>
					<NotLoggedRoute path="/login" exact component={Login} />

					<NotLoggedRoute
						path="/dashboard"
						exact
						component={Dashboard}
					/>

					<NotLoggedRoute
						path="/financeiro/despesas"
						exact
						component={Despesas}
					/>
					<NotLoggedRoute
						path="/financeiro/investimentos"
						exact
						component={Investimento}
					/>
					<NotLoggedRoute
						path="/financeiro/receitas"
						exact
						component={Receitas}
					/>

					<NotLoggedRoute
						path="/manejo/combustivel"
						exact
						component={Combustivel}
					/>

					<NotLoggedRoute
						path="/manejo/veiculos"
						exact
						component={Veiculos}
					/>

					<NotLoggedRoute
						path="/manejo/maodeobra"
						exact
						component={MaoDeObra}
					/>

					<NotLoggedRoute
						path="/manejo/tratores"
						exact
						component={Tratores}
					/>

					<NotLoggedRoute
						path="/manejo/insumos"
						exact
						component={Insumos}
					/>

					<NotLoggedRoute
						path="/manejo/areas"
						exact
						component={Areas}
					/>

					<NotLoggedRoute
						path="/manejo/lavouras"
						exact
						component={Lavouras}
					/>

					<NotLoggedRoute
						path="/manejo/animais"
						exact
						component={Animals}
					/>

					<NotLoggedRoute
						path="/manejo/demandas"
						exact
						component={Demandas}
					/>

					<NotLoggedRoute
						path="/manejo/tarefas"
						exact
						component={Tarefas}
					/>
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;

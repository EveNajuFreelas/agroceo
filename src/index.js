import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import App from './App';
import './index.css';
import './i18n';

import { ContextsProviders } from './container/contextsContainer';

dotenv.config();

ReactDOM.render(
	<React.StrictMode>
		<ContextsProviders>
			<App />
		</ContextsProviders>
	</React.StrictMode>,
	document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { defaultTheme } from './theme';
import App from './App';
import { RegisterContainer } from './context/userRegister';
import './index.css';
// import { PopoverContainer } from './context/Popover';
// import { SnackbarProvider } from 'notistack';
import { AuthenticationContainer } from './context/authContext';
// import { PropertyContext } from './context/properties';
// import { ListPropertieContext } from './context/properties/list';
// import { GlobalLoadingContext } from "./context/loader"
import './i18n';
import { PageContainer } from './context/pageContext';
import { VehicleContainer } from './context/vehiclesContext';
import { AreasContainer } from './context/areasContext';
import { TractorContainer } from './context/tractorContext';
import { InputContainer } from './context/inputsContext';

const queryClient = new QueryClient();

dotenv.config();

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={defaultTheme}>
			<QueryClientProvider client={queryClient}>
				{/* <SnackbarProvider maxSnack={3}> */}
				{/* <GlobalLoadingContext.Provider> */}
				<AuthenticationContainer.Provider>
					<RegisterContainer.Provider>
						<PageContainer.Provider>
							<VehicleContainer.Provider>
								<AreasContainer.Provider>
									<TractorContainer.Provider>
										<InputContainer.Provider>
											{/* <PopoverContainer.Provider> */}
											{/* <ListPropertieContext.Provider> */}
											{/* <PropertyContext.Provider> */}
											<App />
											{/* </PropertyContext.Provider> */}
											{/* </ListPropertieContext.Provider> */}
											{/* </PopoverContainer.Provider> */}
										</InputContainer.Provider>
									</TractorContainer.Provider>
								</AreasContainer.Provider>
							</VehicleContainer.Provider>
						</PageContainer.Provider>
					</RegisterContainer.Provider>
				</AuthenticationContainer.Provider>
				{/* </GlobalLoadingContext.Provider> */}
				{/* </SnackbarProvider> */}
			</QueryClientProvider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

import { PageContainer } from '../../context/pageContext';
import { VehicleContainer } from '../../context/vehiclesContext';
import { AreasContainer } from '../../context/areasContext';
import { TractorContainer } from '../../context/tractorContext';
import { ExpensesContainer } from '../../context/financesContext/expensesContext';
import { InputContainer } from '../../context/inputsContext';
import { RoleContainer } from '../../context/rolesContext';
import { RegisterContainer } from '../../context/userRegister';
import { defaultTheme } from '../../theme';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthenticationContainer } from '../../context/authContext';
import { ManagementContainer } from '../../context/managementContext';
import { DemandContainer } from '../../context/demandContext';
import { TaskContainer } from '../../context/taskContext';
import { TillageContainer } from '../../context/tillageContext';
import { AnimalsContainer } from '../../context/animalsContext';
import { ModalsContainer } from '../../context/modalsContext';
// import { PopoverContainer } from '../../context/Popover';
// import { SnackbarProvider } from 'notistack';
// import { PropertyContext } from '../../context/properties';
// import { ListPropertieContext } from '../../context/properties/list';
// import { GlobalLoadingContext } from "../../context/loader";

const queryClient = new QueryClient();

export const ContextsProviders = ({ children }) => (
	<ThemeProvider theme={defaultTheme}>
		<QueryClientProvider client={queryClient}>
			{/* <SnackbarProvider maxSnack={3}> */}
			{/* <GlobalLoadingContext.Provider> */}
			<AuthenticationContainer.Provider>
				<ModalsContainer.Provider>
					<ManagementContainer.Provider>
						<RegisterContainer.Provider>
							<PageContainer.Provider>
								<AnimalsContainer.Provider>
									<TillageContainer.Provider>
										<TaskContainer.Provider>
											<VehicleContainer.Provider>
												<AreasContainer.Provider>
													<DemandContainer.Provider>
														<TractorContainer.Provider>
															<ExpensesContainer.Provider>
																<InputContainer.Provider>
																	<RoleContainer.Provider>
																		{/* <PopoverContainer.Provider> */}
																		{/* <ListPropertieContext.Provider> */}
																		{/* <PropertyContext.Provider> */}
																		{
																			children
																		}
																		{/* </PropertyContext.Provider> */}
																		{/* </ListPropertieContext.Provider> */}
																		{/* </PopoverContainer.Provider> */}
																	</RoleContainer.Provider>
																</InputContainer.Provider>
															</ExpensesContainer.Provider>
														</TractorContainer.Provider>
													</DemandContainer.Provider>
												</AreasContainer.Provider>
											</VehicleContainer.Provider>
										</TaskContainer.Provider>
									</TillageContainer.Provider>
								</AnimalsContainer.Provider>
							</PageContainer.Provider>
						</RegisterContainer.Provider>
					</ManagementContainer.Provider>
				</ModalsContainer.Provider>
			</AuthenticationContainer.Provider>
			{/* </GlobalLoadingContext.Provider> */}
			{/* </SnackbarProvider> */}
		</QueryClientProvider>
	</ThemeProvider>
);

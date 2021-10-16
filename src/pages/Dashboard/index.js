import React from 'react';
import BarChart from '../../components/Charts/Bar';
import PizzaChart from '../../components/Charts/Pizza';
import OverviewFinancial from '../../components/Financeiro/OverviewFinancial';
import { usePageContext } from "../../context/pageContext";
import {
	ContainerDashboard,
	ChartSection,
	OverviewFinancialContainer,
} from './styles';
const Dashboard = () => {
	const { drawerOpen } = usePageContext();
	return (
		<ContainerDashboard drawerOpen={drawerOpen}>
			<OverviewFinancialContainer drawerOpen={drawerOpen}>
				<OverviewFinancial />
			</OverviewFinancialContainer>
			<ChartSection drawerOpen={drawerOpen}>

				<BarChart />
				<PizzaChart />
			</ChartSection>
		</ContainerDashboard>
	);
};

export default Dashboard;

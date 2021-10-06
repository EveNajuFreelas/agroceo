import React from 'react';
import BarChart from '../../components/Charts/Bar';
import PizzaChart from '../../components/Charts/Pizza';
import OverviewFinancial from '../../components/Financeiro/OverviewFinancial';
import {
	ContainerDashboard,
	ChartSection,
	OverviewFinancialContainer,
} from './styles';
const Dashboard = () => {
	return (
		<ContainerDashboard>
			<OverviewFinancialContainer>
				<OverviewFinancial />
			</OverviewFinancialContainer>
			<ChartSection>
				<BarChart />
				<PizzaChart />
			</ChartSection>
		</ContainerDashboard>
	);
};

export default Dashboard;

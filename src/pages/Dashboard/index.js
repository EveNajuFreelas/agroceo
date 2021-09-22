import React from 'react';
import BarChart from '../../components/Charts/Bar';
import PizzaChart from '../../components/Charts/Pizza';
import OverviewFinancial from '../../components/OverviewFinancial';
import { ContainerDashboard, ChartSection } from './styles';
const Dashboard = () => {
	return (
		<ContainerDashboard>
			<OverviewFinancial />
			<ChartSection>
				<BarChart />
				<PizzaChart />
			</ChartSection>
		</ContainerDashboard>
	);
};

export default Dashboard;

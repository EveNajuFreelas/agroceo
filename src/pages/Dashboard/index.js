import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import BarChart from '../../components/Charts/Bar';
import PizzaChart from '../../components/Charts/Pizza';
import OverviewFinancial from '../../components/Financeiro/OverviewFinancial';
import { usePageContext } from '../../context/pageContext';
import {
	ContainerDashboard,
	ChartSection,
	OverviewFinancialContainer,
} from './styles';
const Dashboard = () => {
	const { t } = useTranslation();
	const { drawerOpen, setPageTitle, setBreadcrumbs } = usePageContext();
	const todayDate = new Date().toLocaleDateString(t('date'), {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
	
	useEffect(() => {
		setPageTitle('greeting');
		setBreadcrumbs([todayDate]);
	}, []);

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

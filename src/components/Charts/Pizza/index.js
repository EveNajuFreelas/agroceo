import React from 'react';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import { ChartSection, PaperChart, TitleSection } from '../styles';
import { PizzaContainer } from './styles';
import { demandas } from '../../../utils/dataMock/mock';

const PizzaChart = () => {
	const options = {
		plugins: {
			legend: {
				maxWidth: 100,
				display: true,
				position: 'right',
				align: 'center',
				labels: {
					usePointStyle: true,
					pointStyle: 'circle',
				},
			},
		},
		rotation: 90,
		borderWidth: 6,
		cutout: 120,
		radius: 160,
		responsive: true,
		maintainAspectRatio: false,
	};

	return (
		<ChartSection>
			<TitleSection>Demandas</TitleSection>
			<PaperChart>
				<PizzaContainer>
					<Doughnut data={demandas} options={options} />
				</PizzaContainer>
			</PaperChart>
		</ChartSection>
	);
};

export default PizzaChart;

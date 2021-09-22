import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { ChartSection, PaperChart, TitleSection } from '../styles';
import { PizzaContainer } from './styles';
import { demandas } from '../../../utils/dataMock/mock';

const PizzaChart = () => {
	const options = {
		plugins: {
			legend: {
				display: true,
				position: 'right',
				align: 'start',
				labels: {
					usePointStyle: true,
					pointStyle: 'circle',
					boxWidth: 20,
				},
			},
		},
		rotation: 90,
		borderWidth: 8,
		aintainAspectRatio: true,
	};

	return (
		<ChartSection>
			<TitleSection>Demandas</TitleSection>
			<PaperChart>
				<PizzaContainer>
					<Doughnut
						height={'400px'}
						width={'400px'}
						data={demandas}
						options={options}
					/>
				</PizzaContainer>
			</PaperChart>
		</ChartSection>
	);
};

export default PizzaChart;

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { ChartContainer, PaperChart, TitleSection } from '../styles';
import {
	PizzaContainer,
	LegendPizzaContainer,
	LegendPizzaItem,
	LegendPizzaLabel,
	LegendName,
	LegendPercent,
} from './styles';
import { demandas } from '../../../utils/dataMock/mock';

const dataset = demandas.datasets[0];

const PizzaChart = () => {
	const options = {
		plugins: {
			legend: {
				display: false,
			},
		},
		rotation: 90,
		borderWidth: 6,
		cutout: 130,
		radius: 170,
		responsive: true,
		maintainAspectRatio: false,
	};

	return (
		<ChartContainer>
			<TitleSection>Demandas</TitleSection>
			<PaperChart>
				<PizzaContainer>
					<Doughnut data={demandas} options={options} />
					<LegendPizzaContainer>
						{dataset.data.map((demanda, index) => (
							<LegendPizzaItem
								style={{
									backgroundColor:
										dataset.backgroundColor[index],
								}}
							>
								<LegendPizzaLabel>
									<LegendName>
										{demandas.labels[index]}
									</LegendName>
									<LegendPercent>{`${demanda} %`}</LegendPercent>
								</LegendPizzaLabel>
							</LegendPizzaItem>
						))}
					</LegendPizzaContainer>
				</PizzaContainer>
			</PaperChart>
		</ChartContainer>
	);
};

export default PizzaChart;

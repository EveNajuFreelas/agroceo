import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { ChartContainer, PaperChart } from '../styles';
import { TitleSection } from '../../Geral/styles';
import { usePageContext } from '../../../context/pageContext/index.js';
import {
	PizzaContainer,
	LegendPizzaContainer,
	LegendPizzaItem,
	LegendPizzaLabel,
	LegendName,
	LegendPercent,
} from './styles';
import { demandas } from '../../../utils/dataMock/mock';
import ButtonReports from '../../../pages/Dashboard/ButtonReports';
import { useTranslation } from 'react-i18next';
import { HeadContainer } from '../../Financeiro/OverviewFinancial/styles';

const dataset = demandas.datasets[0];

const PizzaChart = () => {
	const { t } = useTranslation();
	const { drawerOpen } = usePageContext();
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
			<HeadContainer>
				<TitleSection>Demandas</TitleSection>
				<ButtonReports t={t} />
			</HeadContainer>

			<PaperChart drawerOpen={drawerOpen}>
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
									<LegendPercent>{`${demanda}%`}</LegendPercent>
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

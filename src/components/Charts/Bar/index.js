import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
	BarContainer,
	LegendBarContanier,
	LegendBarItem,
	LegendBarPoint,
	LegendBarLabel,
} from './styles';
import { ChartContainer, PaperChart } from '../styles';
import { TitleSection } from '../../Geral/styles';

import { animais } from '../../../utils/dataMock/mock';
import { defaultTheme } from '../../../theme';
import Filter from '../../Filter';
import {
	itensMenuMonth,
	itensMenuYear,
} from '../../../utils/dataMock/itensMenu';

const BarChart = () => {
	const { colors } = defaultTheme;

	const options = {
		plugins: {
			legend: {
				display: false,
				position: 'top',
				align: 'start',
				padding: {
					bottom: 50,
				},
				labels: {
					usePointStyle: true,
					pointStyle: 'circle',
					color: `${colors.neutral5}`,
					boxWidth: 20,
				},
			},
		},

		elements: {
			bar: {
				width: 30,
			},
		},

		scales: {
			y: {
				max: 250,
				grid: {
					color: '#EBEBEB',
					drawBorder: false,
				},
			},
			x: {
				grid: {
					display: false,
				},
			},
		},
		categoryPercentage: 0.5,
		barPercentage: 0.9,
		maintainAspectRatio: false,
	};

	const filter = mes => {
		console.log(mes);
	};

	return (
		<ChartContainer>
			<TitleSection>
				Entrada e Saída de Animais
				<Filter
					label={'2021'}
					itensMenu={itensMenuYear}
					clickFunction={filter}
				/>
				<Filter
					label={'Setembro'}
					itensMenu={itensMenuMonth}
					clickFunction={filter}
				/>
			</TitleSection>
			<PaperChart>
				<BarContainer>
					<LegendBarContanier>
						{animais.datasets.map(data => (
							<LegendBarItem>
								<LegendBarPoint
									style={{ background: data.backgroundColor }}
								/>
								<LegendBarLabel>{data.label}</LegendBarLabel>
							</LegendBarItem>
						))}
					</LegendBarContanier>
					<Bar
						width={30}
						height={30}
						data={animais}
						options={options}
					/>
				</BarContainer>
			</PaperChart>
		</ChartContainer>
	);
};

export default BarChart;

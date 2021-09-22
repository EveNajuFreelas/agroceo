import React from 'react';
import { Bar } from 'react-chartjs-2';
import { BarContainer } from './styles';
import { ChartSection, TitleSection, PaperChart } from '../styles';

import { animais } from '../../../utils/dataMock/mock';
import { defaultTheme } from '../../../theme';
import { yellow } from '@material-ui/core/colors';

const BarChart = () => {
	const { colors } = defaultTheme;

	const options = {
		plugins: {
			legend: {
				display: true,
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
				borderColor: yellow,
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

	return (
		<ChartSection>
			<TitleSection>Entrada e Saída de Animais</TitleSection>
			<PaperChart>
				<BarContainer>
					<Bar
						width={30}
						height={30}
						data={animais}
						options={options}
					/>
				</BarContainer>
			</PaperChart>
		</ChartSection>
	);
};

export default BarChart;

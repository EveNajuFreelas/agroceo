import { defaultTheme } from '../../theme';
const { colors } = defaultTheme;

export const animais = {
	labels: ['Bovino', 'Suíno', 'Peixes'],
	datasets: [
		{
			label: 'Entrada',
			data: [155, 40, 120],
			backgroundColor: `${colors.primary}`,
		},
		{
			label: 'Saída',
			data: [130, 90, 60],
			backgroundColor: `${colors.auxiliar}`,
		},
	],
};

export const demandas = {
	labels: ['Pendentes', 'Concluídas', 'Demandas'],
	datasets: [
		{
			data: [13, 15, 72],
			backgroundColor: ['#F2B705', `${colors.darkerGreen}`, '#13ABCD'],
		},
	],
};

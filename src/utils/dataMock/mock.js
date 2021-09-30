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
			backgroundColor: ['#F2B705', `${colors.anotherGreen}`, '#13ABCD'],
		},
	],
};

export const financeiroData = [
	{
		id: '0001',
		Description: ('ração', 'insumos'),
		DateDespesa: '08/09/2021',
		Invoice: 'Sim',
		Payment: 'Cartão de crédito',
		Parcela: '10x',
		FirstParcela: '09/11/2021',
		Percent: '100% Fazenda Recanto do Sabiá',
		DocumentPicture: '--',
	},
	{
		id: '0002',
		Description: ('ração', 'insumos'),
		DateDespesa: '08/09/2021',
		Invoice: 'Sim',
		Payment: 'Cartão de crédito',
		Parcela: '10x',
		FirstParcela: '09/11/2021',
		Percent: '100% Fazenda Recanto do Sabiá',
		DocumentPicture: '--',
	},
	{
		id: '0003',
		Description: ('ração', 'insumos'),
		DateDespesa: '08/09/2021',
		Invoice: 'Sim',
		Payment: 'Cartão de crédito',
		Parcela: '10x',
		FirstParcela: '09/11/2021',
		Percent: '100% Fazenda Recanto do Sabiá',
		DocumentPicture: '--',
	},
	{
		id: '0004',
		Description: ('ração', 'insumos'),
		DateDespesa: '08/09/2021',
		Invoice: 'Sim',
		Payment: 'Cartão de crédito',
		Parcela: '10x',
		FirstParcela: '09/11/2021',
		Percent: '100% Fazenda Recanto do Sabiá',
		DocumentPicture: '--',
	},
];

export const manejoCombustivel = [
	{
		id: '00004',
		Description: ('Diesel Comum', 'Entrada'),
		Quantidade: '3000 Lts',
		Invoice: 'Sim',
		Fornecedor: 'Ipiranga',
		Local: '-',
		Motorista: '-',
		Vaiculo: '-',
		Data: '-',
	},
	{
		id: '00005',
		Description: ('Diesel Comum', 'Saida'),
		Quantidade: '32Lts',
		Invoice: 'Sim',
		Fornecedor: 'Posto do zé',
		Local: 'Na cidade',
		Motorista: 'Rogério',
		Vaiculo: 'Caminhonete - FordRanger',
		Data: '13/09/2021 - 17:15',
	},
	{
		id: '00006',
		Description: ('Diesel S-10', 'Saida'),
		Quantidade: '62Lts',
		Invoice: 'Não',
		Fornecedor: 'Rogério',
		Local: 'Na fazenda',
		Motorista: 'Rogério',
		Vaiculo: 'Trator',
		Data: '14/09/2021 - 07:07',
	},
	{
		id: '00007',
		Description: ('Diesel Comum', 'Entrada'),
		Quantidade: '3000 Lts',
		Invoice: 'Sim',
		Fornecedor: 'Petrobras',
		Local: '-',
		Motorista: '-',
		Vaiculo: '-',
		Data: '-',
	},
];

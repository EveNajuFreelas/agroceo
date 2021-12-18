import { formatStatus } from '../../context/taskContext/formatTask';

export const areas = [
	{
		id: '1',
		name: 'Aviário',
	},
	{
		id: '2',
		name: 'Tanque',
	},
	{
		id: '3',
		name: 'Baia',
	},
	{
		id: '4',
		name: 'Confinamento',
	},
	{
		id: '5',
		name: 'Pasto',
	},
	{
		id: '6',
		name: 'Pessoas',
	},
	{
		id: '7',
		name: 'Lavoura',
	},
];

export const itemsRevised = [
	{
		id: '1',
		name: 'Alinhamento',
	},
	{
		id: '2',
		name: 'Balanceamento',
	},
	{
		id: '3',
		name: 'Discos de freios',
	},
	{
		id: '4',
		name: 'Filtro de combustível',
	},
	{
		id: '5',
		name: 'Filtro de ar',
	},
	{
		id: '6',
		name: 'Troca de óleo do motor',
	},
];

export const employeesSelect = [
	{
		id: '1',
		name: 'Maria',
	},
	{
		id: '1',
		name: 'Pedro',
	},
];

export const tasksSelect = [
	{
		id: '1',
		title: 'Concertar porteira',
		status: formatStatus[3],
	},
	{
		id: '2',
		title: 'Concertar tábua do curral',
		status: formatStatus[1],
	},
	{
		id: '3',
		title: 'Concertar colchete do retiro',
		status: formatStatus[4],
	},
];

export const subareas = [
	{
		id: '1',
		subareaName: 'Sub-área 4 “Pasto da onça” - 7 ha',
	},
	{
		id: '2',
		subareaName: 'Sub-área 3 “Pasto da vaca louca” - 10 ha',
	},
	{
		id: '3',
		subareaName: 'Sub-área 2 “Pasto do pomar” - 7 ha',
	},
	{
		id: '4',
		subareaName: 'Sub-área 9 “Antiga matinha” - 60 ha',
	},
	{
		id: '5',
		subareaName: 'Sub-área 10 “Área do córrego” - 50 ha',
	}
];

export const speciesSelect = [
	{
		id: '1',
		name: 'Asininos',
	},
	{
		id: '2',
		name: 'Aves',
	},
	{
		id: '3',
		name: 'Bovinos',
	},
	{
		id: '4',
		name: 'Bubalinos',
	},
	{
		id: '5',
		name: 'Caprinos',
	},
	{
		id: '6',
		name: 'Equinos',
	},
	{
		id: '7',
		name: 'Muares',
	},
	{
		id: '8',
		name: 'Ovinos',
	},
	{
		id: '9',
		name: 'Peixes',
	},
	{
		id: '10',
		name: 'Suídeos',
	},
	{
		id: '11',
		name: 'Outros',
	},
];

export const categorySelect = [
	{
		id: '1',
		name: 'Corte',
	},
	{
		id: '1',
		name: 'Leite',
	},
];

export const lotSelect = [
	{
		id: '1',
		specie: 'Bovinos',
		category: 'corte',
		sex: 'Macho',
		age: '24 meses',
		qtnd: '100',
	},
	{
		id: '2',
		specie: 'Bovinos',
		category: 'leite',
		sex: 'Fêmea',
		age: '24 meses',
		qtnd: '200',
	},
];

export const weighingSelect = [
	{
		id: '1',
		name: 'Lote de engorda',
		subarea: 'Pasto da onça',
		qtnd: '100',
	},
	{
		id: '2',
		name: 'Lote de engorda',
		subarea: 'Pasto da onça',
		qtnd: '100',
	},
];

export const costCentersSelect = [
	{
		id: '1',
		name: 'Animais',
	},
	{
		id: '2',
		name: 'Lavoura',
	},
	{
		id: '3',
		name: 'Algo',
	},
	{
		id: '4',
		name: 'E mais algum',
	},
];

export const functionList = [
	{
		id: '1',
		name: 'Ordenhador',
	},
	{
		id: '2',
		name: 'Motorista',
	},
	{
		id: '3',
		name: 'Agricultor',
	},
];

export const paymentList = [
	{
		id: '1',
		name: 'Cartão de Créditto',
	},
	{
		id: '2',
		name: 'Boleto',
	},
	{
		id: '3',
		name: 'Cartão de Débito',
	},
];

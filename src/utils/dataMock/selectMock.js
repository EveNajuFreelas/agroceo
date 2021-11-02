import { formatStatus } from '../../context/taskContext/formatTask';

export const areas = [
	{
		id: '1',
		name: 'Aviário',
	},
	{
		id: '2',
		name: 'Confinamento',
	},
	{
		id: '3',
		name: 'Baia',
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
		size: '7 ha',
		pastures: 'Pasto da onça',
		destination: 'Pasto 4',
	},
	{
		id: '2',
		size: '10 ha',
		pastures: 'Pasto da vaca louca',
		destination: 'Pasto 3',
	},
	{
		id: '1',
		size: '7 ha',
		pastures: 'Pasto do pomar',
		destination: 'Pasto 2',
	},
];

export const speciesSelect = [
	{
		id: '1',
		name: 'Asininos',
	},
	{
		id: '2',
		name: 'Bovinos',
	},
	{
		id: '3',
		name: 'Caprinos',
	},
	{
		id: '4',
		name: 'Muares',
	},
	{
		id: '5',
		name: 'Peixes',
	},
	{
		id: '6',
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

import { Icon } from '../assets/Icons';
import { iconList } from '../assets/Icons/icon-list';

export const menuItems = [
	{
		id: 0,
		name: 'home',
		icon: <Icon name={iconList.homeMenu} size={20} color='white' />,
		url: '/dashboard',
	},
	{
		id: 1,
		name: 'financial',
		icon: <Icon name={iconList.finance} size={20} color='white' />,
		url: '/financeiro',
		items: [
			{
				id: 1.1,
				text: 'income',
				url: '/financeiro/receitas',
			},
			{
				id: 1.2,
				text: 'expenses',
				url: '/financeiro/despesas',
			},
			{
				id: 1.3,
				text: 'investments',
				url: '/financeiro/investimentos',
			},
		],
	},
	{
		id: 2,
		name: 'management',
		icon: <Icon name={iconList.farm} size={20} />,
		url: '/manejo',
		items: [
			{
				id: 2.1,
				text: 'fuel',
				url: '/manejo/combustivel',
			},
			{
				id: 2.2,
				text: 'manpower',
				url: '/manejo/maodeobra',
			},
			{
				id: 2.3,
				text: 'vehicle',
				url: '/manejo/veiculos',
			},
			{
				id: 2.4,
				text: 'tractor',
				url: '/manejo/tratores',
			},
			{
				id: 2.5,
				text: 'input',
				url: '/manejo/insumos',
			},
			{
				id: 2.6,
				text: 'areas',
				url: '/manejo/areas',
			},
			{
				id: 2.7,
				text: 'agriculture',
				url: '/dashboard',
			},
			{
				id: 2.8,
				text: 'animals',
				url: '/manejo/animais',
			},
			{
				id: 2.9,
				text: 'assignments',
				url: '/dashboard',
			},
			{
				id: 2.1,
				text: 'demand',
				url: '/manejo/demandas',
			},
		],
	},
	{
		id: 3,
		name: 'reports',
		icon: <Icon name={iconList.farm} size={20} />,
		url: '/',
		items: [
			{
				id: 3.1,
				text: 'financial',
				url: '/dashboard',
			},
			{
				id: 3.2,
				text: 'demand',
				url: '/dashboard',
			},
			{
				id: 3.3,
				text: 'properties',
				url: '/dashboard',
			},
		],
	},
	{
		id: 4,
		name: 'settings',
		icon: <Icon name={iconList.farm} size={20} />,
		url: '/',
		items: [
			{
				id: 4.1,
				text: 'profile',
				url: '/dashboard',
			},
		],
	},
];

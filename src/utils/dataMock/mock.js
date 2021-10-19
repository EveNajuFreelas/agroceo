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

export const financeiroData = [
	{
		data: {
			id: '0001',
			description: 'ração',
			DateDespesa: '08/09/2021',
			Invoice: false,
			Payment: 'Cartão de crédito',
			Parcela: '10x',
			FirstParcela: '09/11/2021',
			Percent: '100% Fazenda Recanto do Sabiá',
			DocumentPicture: '--',
		},
		extras: {
			image: null,
		},
	},
	{
		data: {
			id: '0002',
			description: 'insumos',
			DateDespesa: '08/09/2021',
			Invoice: true,
			Payment: 'Cartão de crédito',
			Parcela: '10x',
			FirstParcela: '09/11/2021',
			Percent: '100% Fazenda Recanto do Sabiá',
			DocumentPicture: '--',
		},
		extras: {
			image: null,
		},
	},
	{
		data: {
			id: '0003',
			description: 'ração',
			DateDespesa: '08/09/2021',
			Invoice: true,
			Payment: 'Cartão de crédito',
			Parcela: '10x',
			FirstParcela: '09/11/2021',
			Percent: '100% Fazenda Recanto do Sabiá',
			DocumentPicture: '--',
		},
		extras: {
			image: null,
		},
	},
	{
		data: {
			id: '0004',
			description: 'insumos',
			DateDespesa: '08/09/2021',
			Invoice: false,
			Payment: 'Cartão de crédito',
			Parcela: '10x',
			FirstParcela: '09/11/2021',
			Percent: '100% Fazenda Recanto do Sabiá',
			DocumentPicture: '--',
		},
		extras: {
			image: null,
		},
	},
];

export const manejoCombustivel = [
	{
		data: {
			id: '00004',
			description: 'Diesel Comum',
			quantidade: '3000 Lts',
			invoice: 'Sim',
			fornecedor: 'Ipiranga',
			local: '-',
			motorista: '-',
			veiculo: '-',
			data: '-',
		},
		extras: {
			image: null,
		},
	},
	{
		data: {
			id: '00005',
			description: 'Diesel Comum',
			quantidade: '32Lts',
			invoice: 'Sim',
			fornecedor: 'Posto do zé',
			local: 'Na cidade',
			motorista: 'Rogério',
			veiculo: 'Caminhonete - FordRanger',
			data: '13/09/2021 - 17:15',
		},
		extras: {
			image: null,
		},
	},
	{
		data: {
			id: '00006',
			description: 'Diesel S-10',
			quantidade: '62Lts',
			invoice: 'Não',
			fornecedor: 'Rogério',
			local: 'Na fazenda',
			motorista: 'Rogério',
			veiculo: 'Trator',
			data: '14/09/2021 - 07:07',
		},
		extras: {
			image: null,
		},
	},
];

export const manejoVeiculos = [
	{
		id: '00004',
		nickname: 'Caminhonete',
		brand: 'Ford',
		model: 'Ranger Raptor',
		color: 'Prata',
		board: 'ABC1D23',
		vehicleOwner: 'Terceiros',
		updated_at: '18/09/2021',
	},
	{
		id: '00005',
		nickname: 'Moto',
		Marca: 'Honda',
		Modelo: 'NXR 160 Bros',
		Cor: 'Vermelha',
		Placa: 'ZXY9W87',
		Proprietario: 'Fazenda',
		Data: '05/04/2020',
	},
];

export const manejoTratores = [
	{
		id: '00004',
		description: 'Caminhonete',
		Marca: 'Ford',
		Modelo: 'Ranger Raptor',
		Cor: 'Prata',
		Ano: '2012',
		Placa: 'ABC1D23',
		Proprietario: 'Terceiros',
		Data: '18/09/2021',
	},
	{
		id: '00005',
		description: 'Moto',
		Marca: 'Honda',
		Modelo: 'NXR 160 Bros',
		Cor: 'Vermelha',
		Ano: '2015',
		Placa: 'ZXY9W87',
		Proprietario: 'Fazenda',
		Data: '05/04/2020',
	},
];

export const manejoMaoFuncionario = [
	{
		id: '00004',
		Nome: 'Benedito Candido Gomes',
		Apelido: 'Dito',
		Funcao: 'Ordenhador',
		Contato: '(62) 9 9123-4567',
		Tipo: 'Permanente',
	},
	{
		id: '00004',
		Nome: 'Benedito Candido Gomes',
		Apelido: 'Dito',
		Funcao: 'Ordenhador',
		Contato: '(62) 9 9123-4567',
		Tipo: 'Permanente',
	},
];

export const manejoMaoFuncoes = [
	{
		id: '00004',
		Funcao: 'Ordenhador',
		Obligations: [
			'Higienizar equipamento',
			'Apartar Gado',
			'Ordenhar',
			'Armazenar Leite',
			'Something else',
		],
		Days: ['Segunda-feira(manhã), Terça-feira(manhã), Quarta-Feira(tarde)'],
	},
	{
		id: '00006',
		Funcao: 'Ordenhador',
		Obligations: ['Apartar Gado', 'Ordenhar', 'Armazenar Leite'],
		Days: ['Segunda-feira(manhã), Quarta-Feira(tarde)'],
	},
];

export const manejoInsumos = [
	{
		id: '00004',
		Description: 'Adubo',
		Quantidade: '60',
		Medida: 'Kg',
		Apresentacao: 'Sacos de 20kg',
		Documento: 'Não',
		Quem: 'José da Silva',
	},
	{
		id: '00004',
		Description: 'Adubo',
		Quantidade: '10',
		Medida: 'Kg',
		Apresentacao: 'Sacos de 20kg',
		Documento: 'Não',
		Quem: 'José da Silva',
	},
];

export const fuelTypes = [
    {
        value: 'common-diesel',
        name: 'commonDiesel'
    },
    {
        value: 's10-diesel',
        name: 's10Diesel'
    },
    {
        value: 'common-gasoline',
        name: 'commonGasoline'
    },
    {
        value: 'gasoline-additive',
        name: 'gasolineAdditive'
    },
    {
        value: 'common-diesel',
        name: 'commonDiesel'
    },
    {
        value: 'ethanol',
        name: 'ethanol'
    },
]

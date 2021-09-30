import React from 'react';
import {
	FinancialOverview,
	SummaryContainer,
	TableContainer,
	CardValueContainer,
} from '../styles';
import { useTranslation } from 'react-i18next';
import { defaultTheme } from '../../../theme';

import CardValue from '../../../components/Financeiro/CardValue';
import CardTotalValue from '../../../components/Financeiro/CardTotalValue';
import TableData from '../../../components/Financeiro/TableData';
const Investimento = () => {
	const { t } = useTranslation();
	const { colors } = defaultTheme;

	const rows = [
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

	const columns = [
		'ID',
		t('description'),
		t('expense date'),
		t('invoice'),
		t('payment'),
		t('instalment'),
		t('first instalment'),
		t('% by property'),
		t('document photo'),
	];

	return (
		<FinancialOverview>
			<SummaryContainer>
				<CardValueContainer>
					<CardValue
						colorText={`${colors.errorLight}`}
						text={t('rescued')}
						value={'R$ 5.000,00'}
					/>
					<CardValue
						colorText={`${colors.greenLight}`}
						text={t('invested')}
						value={'R$ 25.000,00'}
					/>
				</CardValueContainer>
				<CardTotalValue
					value={'R$ 30.000,00'}
					mes={'Setembro'}
					ano={2021}
				/>
			</SummaryContainer>
			<TableContainer>
				<TableData data={rows} columns={columns} />
			</TableContainer>
		</FinancialOverview>
	);
};

export default Investimento;

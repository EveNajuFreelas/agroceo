import React from 'react';
import {
	FinancialOverview,
	SummaryContainer,
	CardValueContainer,
} from '../styles';
import { useTranslation } from 'react-i18next';
import { defaultTheme } from '../../../theme';

import CardValue from '../../../components/Financeiro/CardValue';
import CardTotalValue from '../../../components/Financeiro/CardTotalValue';
import TableData from '../../../components/Financeiro/TableData';
import { financeiroData } from '../../../utils/dataMock/mock';
import TableHeader from '../../../components/Financeiro/TableData/TableHeader';
const Despesas = () => {
	const { t } = useTranslation();
	const { colors } = defaultTheme;

	const columnsFinancial = [
		'ID',
		t('description'),
		t('expense date'),
		t('invoice'),
		t('payment'),
		t('instalment'),
		t('firstInstalment'),
		t('%ByProperty'),
		t('documentPhoto'),
	];

	return (
		<FinancialOverview>
			<SummaryContainer>
				<CardValueContainer>
					<CardValue
						colorText={`${colors.secondaryAccent}`}
						text={t('toPay')}
						value={'R$ 10.000,00'}
					/>
					<CardValue
						colorText={`${colors.errorLight}`}
						text={t('overdue')}
						value={'R$ 5.000,00'}
					/>
					<CardValue
						colorText={`${colors.greenLight}`}
						text={t('paid')}
						value={'R$ 25.000,00'}
					/>
				</CardValueContainer>
				<CardTotalValue
					value={'R$ 40.000,00'}
					mes={'Setembro'}
					ano={2021}
				/>
			</SummaryContainer>
			<div>
				<TableHeader />
				<TableData data={financeiroData} columns={columnsFinancial} />
			</div>
		</FinancialOverview>
	);
};

export default Despesas;

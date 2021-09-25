import React from 'react';
import {
	FinancialOverview,
	SummaryContainer,
	TableContainer,
	CardValueContainer,
} from '../styles';
import {} from './styles';
import { useTranslation } from 'react-i18next';
import { defaultTheme } from '../../../theme';

import CardValue from '../../../components/Financeiro/CardValue';
import CardTotalValue from '../../../components/Financeiro/CardTotalValue';
import TableData from '../../../components/Financeiro/TableData';
const Despesas = () => {
	const { t } = useTranslation();
	const { colors } = defaultTheme;

	return (
		<FinancialOverview>
			<SummaryContainer>
				<CardValueContainer>
					<CardValue
						colorText={`${colors.secondaryAccent}`}
						text={t('to pay')}
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
			<TableContainer>
				<TableData />
			</TableContainer>
		</FinancialOverview>
	);
};

export default Despesas;

import React, { useEffect } from 'react';
import {
	FinancialOverview,
	SummaryContainer,
	CardValueContainer,
} from '../styles';
import { useTranslation } from 'react-i18next';
import { defaultTheme } from '../../../theme';

import CardValue from '../../../components/Card/CardValue';
import CardTotalValue from '../../../components/Card/CardTotalValue';
import TableWithDescriptionIcon from '../../../components/Table/TableDescriptionWithIcon';
import { financeiroData } from '../../../utils/dataMock/mock';
import TableHeader from '../../../components/Table/TableHeader';
import { FinancialModal } from '../../../components/Modals/Financial/index';
import { usePageContext } from '../../../context/pageContext';

const Despesas = () => {
	const { setPageTitle, setBreadcrumbs } = usePageContext();
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

	useEffect(() => {
		setPageTitle('expenses');
		setBreadcrumbs([t('financial'), t('expenses')]);
	}, []);

	return (
		<>
		<FinancialModal title={t('newExpenses')} breadcrumbs={['financial', 'expenses']} />
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
				<TableHeader
					data={financeiroData}
					columns={columnsFinancial}
					title={'Financeiro - Despesas'}
				/>
				<TableWithDescriptionIcon
					data={financeiroData}
					columns={columnsFinancial}
					yesNo={false}
				/>
			</div>
		</FinancialOverview>
		</>
	);
};

export default Despesas;

import React, { useState } from 'react';
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
import { ModalShell } from '../../../components/Modal/index';

const Despesas = () => {
	const { t } = useTranslation();
	const { colors } = defaultTheme;
	const [openModal, setOpenModal] = useState(true);

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
		<>
		<ModalShell 
			open={openModal}
			handleClose={() => setOpenModal(false)}
			title="expenses"
			breadcrumbs={['financial', 'expenses']}
			actionButtons={[
				{
					onClick: () => setOpenModal(false),
					title: 'cancel',
					color: 'secondary',
					variant: 'outlined',
				},
				{
					onClick: () => setOpenModal(false),
					title: 'save',
					color: 'primary',
					variant: 'contained',
				}
			]}
		/>
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
				<TableWithDescriptionIcon
					data={financeiroData}
					columns={columnsFinancial}
				/>
			</div>
		</FinancialOverview>
		</>
	);
};

export default Despesas;

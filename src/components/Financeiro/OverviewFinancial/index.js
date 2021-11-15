import React from 'react';
import {
	CardTab,
	CardList,
	FilterFinancial,
	FilterLabel,
	HeadContainer,
} from './styles.js';

import CardFinancial from '../../Card/CardFinancial';
import CardListItem from '../../Card/CardListItem';

import { iconList } from '../../../assets/Icons/icon-list.js';
import Filter from '../../Filter';
import {
	itensMenuMonth,
	itensMenuYear,
} from '../../../utils/dataMock/itensMenu.js';
import ButtonReports from '../../../pages/Dashboard/ButtonReports/index.js';
import { useTranslation } from 'react-i18next';

const OverviewFinancial = () => {
	const filter = (mes) => {
		console.log(mes);
	};

	const { t } = useTranslation();

	return (
		<>
			<HeadContainer>
				<FilterFinancial>
					<FilterLabel>Financeiro</FilterLabel>
					<Filter itensMenu={itensMenuYear} clickFunction={filter} />
					<Filter itensMenu={itensMenuMonth} clickFunction={filter} />
				</FilterFinancial>
				<ButtonReports t={t} />
			</HeadContainer>
			<CardTab>
				<CardFinancial
					value={'R$ 40.000'}
					month={'setembro'}
					icon={iconList.despesas}
					description={t('expenses')}
				/>
				<CardFinancial
					value={'R$ 60.000'}
					month={'setembro'}
					icon={iconList.receitas}
					description={t('income')}
				/>
				<CardFinancial
					value={'R$ 7.000'}
					month={'setembro'}
					icon={iconList.investimentos}
					description={t('investments')}
				/>
			</CardTab>
			<CardList>
				<CardListItem
					title={'Diesel'}
					subtitle={'Veículos'}
					date={'23 set 2021'}
					value={'-R$130,00'}
				/>
				<CardListItem
					title={'Arame farpado'}
					subtitle={'Infraestrutura'}
					date={'15 Set 2021'}
					value={'- R$ 150,00'}
				/>
				<CardListItem
					title={'Fertilizante'}
					subtitle={'Insumos'}
					date={'9 Set 2021'}
					value={'- R$ 232,00'}
				/>
				<CardListItem
					title={'Ração para bovino'}
					subtitle={'Insumos'}
					date={'1 Set 2021'}
					value={'- R$ 488,00'}
				/>
			</CardList>
		</>
	);
};

export default OverviewFinancial;

import React, { useState } from 'react';
import {
	CardTab,
	OverviewFinancialContainer,
	CardList,
	FilterFinancial,
	FilterLabel,
} from './styles.js';
import { Select, MenuItem, InputLabel } from '@material-ui/core';

import CardFinancial from './CardFinancial';
import CardListItem from './CardListItem';

import { iconList } from '../../assets/Icons/icon-list.js';
import { defaultTheme } from '../../theme';
import Filter from '../Filter/index.js';
import {
	itensMenuMonth,
	itensMenuYear,
} from '../../utils/dataMock/itensMenu.js';
const { colors } = defaultTheme;

const OverviewFinancial = () => {
	const filter = mes => {
		console.log(mes);
	};

	return (
		<>
			<FilterFinancial>
				<FilterLabel>Financeiro</FilterLabel>
				<Filter
					label={'2021'}
					itensMenu={itensMenuYear}
					clickFunction={filter}
				/>
				<Filter
					label={'Setembro'}
					itensMenu={itensMenuMonth}
					clickFunction={filter}
				/>
			</FilterFinancial>
			<CardTab>
				<CardFinancial
					value={'R$ 40.000'}
					month={'setembro'}
					icon={iconList.Despesas}
					description={'Despesas'}
				/>
				<CardFinancial
					value={'R$ 60.000'}
					month={'setembro'}
					icon={iconList.Receitas}
					description={'Receitas'}
				/>
				<CardFinancial
					value={'R$ 7.000'}
					month={'setembro'}
					icon={iconList.Investimentos}
					description={'Investimentos'}
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

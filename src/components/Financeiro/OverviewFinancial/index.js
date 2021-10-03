import React, { useState } from 'react';
import { CardTab, CardList, FilterFinancial, FilterLabel } from './styles.js';

import CardFinancial from '../../Card/CardFinancial';
import CardListItem from '../../Card/CardListItem';

import Despesas from '../../../utils/image/Despesas.svg';
import Receitas from '../../../utils/image/Receitas.svg';
import Investimentos from '../../../utils/image/Investimentos.svg';
import { defaultTheme } from '../../../theme';
import Filter from '../../Filter/index.js';
import {
	itensMenuMonth,
	itensMenuYear,
} from '../../../utils/dataMock/itensMenu.js';
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
					icon={Despesas}
					description={'Despesas'}
				/>
				<CardFinancial
					value={'R$ 60.000'}
					month={'setembro'}
					icon={Receitas}
					description={'Receitas'}
				/>
				<CardFinancial
					value={'R$ 7.000'}
					month={'setembro'}
					icon={Investimentos}
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

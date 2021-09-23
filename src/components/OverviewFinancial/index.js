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

import Despesas from '../../utils/image/Despesas.svg';
import Receitas from '../../utils/image/Receitas.svg';
import Investimentos from '../../utils/image/Investimentos.svg';
import { defaultTheme } from '../../theme';
const { colors } = defaultTheme;

const OverviewFinancial = () => {
	return (
		<OverviewFinancialContainer>
			<FilterFinancial>
				<FilterLabel>Financeiro</FilterLabel>
				<Select
					labelId='yearLabel'
					value={2021}
					backgroundColor={`${colors.primary}`}
					//onChange={handleChange}
					label='year'
				>
					<MenuItem value={2020}>2020</MenuItem>
					<MenuItem value={2021}>2021</MenuItem>
				</Select>
				<Select
					labelId='monthLabel'
					value={'Setembro'}
					color={`${colors.primary}`}
					//onChange={handleChange}
					label='month'
				>
					<MenuItem value={'outubro'}>outubro</MenuItem>
					<MenuItem value={'novembro'}>novembro</MenuItem>
				</Select>
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
		</OverviewFinancialContainer>
	);
};

export default OverviewFinancial;

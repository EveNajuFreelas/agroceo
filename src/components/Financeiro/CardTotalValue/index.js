import React from 'react';
import { iconList } from '../../../assets/Icons/icon-list';
import {
	CardSummaryContainer,
	FirstColumn,
	TitleColumn,
	IconFirstColumn,
	SecondColumn,
	ValueTotalCard,
	DateTotalCard,
} from './styles';

const CardTotalValue = ({ value, mes, ano }) => {
	return (
		<CardSummaryContainer>
			<FirstColumn>
				<TitleColumn>Total</TitleColumn>
				<IconFirstColumn src={iconList.DespesaAzul} />
			</FirstColumn>
			<SecondColumn>
				<ValueTotalCard>{value}</ValueTotalCard>
				<DateTotalCard>
					{mes} de {ano}
				</DateTotalCard>
			</SecondColumn>
		</CardSummaryContainer>
	);
};

export default CardTotalValue;

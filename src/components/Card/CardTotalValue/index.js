import React from 'react';
import DespesaAzul from '../../../utils/image/DespesaAzul.svg';
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
				<IconFirstColumn src={DespesaAzul} />
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

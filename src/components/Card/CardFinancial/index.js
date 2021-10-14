import React from 'react';
import {
	CardContainer,
	ValueCard,
	MonthCard,
	IconCard,
	DescriptionCard,
} from './styles';

const CardFinancial = ({ value, month, icon, description }) => {
	return (
		<CardContainer>
			<ValueCard>{value}</ValueCard>
			<MonthCard>{month}</MonthCard>
			<IconCard src={icon} />
			<DescriptionCard>{description}</DescriptionCard>
		</CardContainer>
	);
};

export default CardFinancial;

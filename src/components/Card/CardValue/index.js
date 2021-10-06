import React from 'react';
import { iconList } from '../../../assets/Icons/icon-list';
import {
	CardValueContainer,
	ValueCard,
	TextCard,
	IconCardValue,
} from './styles';

const CardValue = ({ value, colorText, text }) => {
	return (
		<CardValueContainer>
			<IconCardValue src={iconList.calendar} />
			<TextCard colorText={colorText}>{text}</TextCard>
			<ValueCard>{value}</ValueCard>
		</CardValueContainer>
	);
};

export default CardValue;

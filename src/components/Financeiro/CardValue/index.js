import React, { useState } from 'react';
import Calendar from '../../../utils/image/Calendar.svg';
import {
	CardValueContainer,
	ValueCard,
	TextCard,
	IconCardValue,
} from './styles';
import { defaultTheme } from '../../../theme';

const CardValue = ({ value, colorText, text }) => {
	const { colors } = defaultTheme;
	return (
		<CardValueContainer>
			<IconCardValue src={Calendar} />
			<TextCard colorText={colorText}>{text}</TextCard>
			<ValueCard>{value}</ValueCard>
		</CardValueContainer>
	);
};

export default CardValue;

import React, { useState } from 'react';
import {
	ListItemCard,
	IconItem,
	TitleSection,
	Title,
	Subtitle,
	ValueSection,
	Value,
	Date,
} from './styles';

import Box from '../../../utils/image/Icons/Box.svg';
import Trator from '../../../utils/image/Icons/Trator.svg';
import Home from '../../../utils/image/Icons/Home.svg';

const CardListItem = ({ title, subtitle, date, value }) => {
	function icon(subtitle) {
		const icons = {
			Veículos: Trator,
			Insumos: Box,
			Infraestrutura: Home,
		};

		return icons[subtitle];
	}

	return (
		<ListItemCard>
			<IconItem src={icon(subtitle)} />
			<TitleSection>
				<Title>{title}</Title>
				<Subtitle>{subtitle}</Subtitle>
			</TitleSection>
			<ValueSection>
				<Value>{value}</Value>
				<Date>{date}</Date>
			</ValueSection>
		</ListItemCard>
	);
};

export default CardListItem;

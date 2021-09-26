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
import { icon } from '../../../utils/functions';

const CardListItem = ({ title, subtitle, date, value }) => {
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

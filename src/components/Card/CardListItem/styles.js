import styled from 'styled-components';
import { defaultTheme } from '../../../theme';

const { text, colors, margin } = defaultTheme;

export const ListItemCard = styled.li`
	display: grid;
	grid-template-columns: 8% 60% 33%;
	align-items: flex-start;
	padding: 10px 0;
	
	@media (max-width: 1445px){
		grid-template-columns: 9% 61% 30%;
	}
	@media (max-width: 1025px){
		grid-template-columns: 5% 60% 33%;
	}
`;

export const IconItem = styled.img`
	width: 40px;
`;

export const TitleSection = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 2px;
	margin-left: ${margin.lg};
`;

export const Title = styled.span`
	font-size: ${text.size.medium};
	font-family: ${text.fontFamily.bold};
	color: ${colors.neutral5};
`;

export const Subtitle = styled.span`
	font-size: ${text.size.caption};
	color: ${colors.neutral6};
`;

export const ValueSection = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Value = styled.span`
	font-size: ${text.size.medium};
	font-family: ${text.fontFamily.bold};
	color: ${colors.auxiliar};
	align-self: flex-end;
`;

export const Date = styled.span`
	font-size: ${text.size.caption};
	color: ${colors.neutral5};
	opacity: 0.4;
	align-self: flex-end;
`;

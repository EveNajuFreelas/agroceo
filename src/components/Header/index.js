import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { usePageContext } from '../../context/pageContext';
import {
	HeaderStyle,
	HeaderTitle,
	HeaderDate,
	HeaderInfo,
	StyledSelect,
	StyledMenuItem,
} from './styles';

const mockProperties = [
	{
		id: 1,
		value: 'all',
		title: 'Todas as propriedades',
	},
	{
		id: 2,
		value: 'prop1',
		title: 'Prop 1',
	},
	{
		id: 3,
		value: 'prop2',
		title: 'Prop 2',
	},
];

export const Header = () => {
	const { t } = useTranslation();
	const [dropdownValue, setDropdownValue] = useState(
		mockProperties.length > 0 ? mockProperties[0].value : 'none'
	);
	const { drawerOpen } = usePageContext();

	const todayDate = new Date().toLocaleDateString(t('date'), {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timeZone: 'utc',
	});

	const handleDropdown = e => {
		setDropdownValue(e.target.value);
	};

	return (
		<HeaderStyle drawerOpen={drawerOpen}>
			<HeaderInfo>
				<HeaderTitle>{t('greeting')}</HeaderTitle>
				<HeaderDate>{todayDate}</HeaderDate>
			</HeaderInfo>
			<StyledSelect value={dropdownValue} onChange={handleDropdown}>
				{mockProperties.length > 0 ? (
					mockProperties.map(prop => (
						<StyledMenuItem key={prop.id} value={prop.value}>
							{prop.title}
						</StyledMenuItem>
					))
				) : (
					<StyledMenuItem value='none'>
						Nenhuma propriedade cadastrada.
					</StyledMenuItem>
				)}
			</StyledSelect>
		</HeaderStyle>
	);
};

import { colors } from '@material-ui/core';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { usePageContext } from '../../context/pageContext';
import { defaultTheme } from '../../theme';
import {
	HeaderStyle,
	HeaderTitle,
	HeaderBreadcrumb,
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

	const { colors } = defaultTheme;
	const { drawerOpen, pageTitle, breadcrumbs } = usePageContext();

	const handleDropdown = (e) => {
		setDropdownValue(e.target.value);
	};

	return (
		<HeaderStyle drawerOpen={drawerOpen}>
			<HeaderInfo>
				<HeaderTitle>{t(pageTitle)}</HeaderTitle>
				<HeaderBreadcrumb>
					{breadcrumbs && breadcrumbs.map((b) => <p>{t(b)}</p>)}
				</HeaderBreadcrumb>
			</HeaderInfo>
			<StyledSelect
				style={{ color: `${colors.primary}` }}
				value={dropdownValue}
				onChange={handleDropdown}
			>
				{mockProperties.length > 0 ? (
					mockProperties.map((prop) => (
						<StyledMenuItem key={prop.id} value={prop.value}>
							{prop.title}
						</StyledMenuItem>
					))
				) : (
					<StyledMenuItem value="none">
						Nenhuma propriedade cadastrada.
					</StyledMenuItem>
				)}
			</StyledSelect>
		</HeaderStyle>
	);
};

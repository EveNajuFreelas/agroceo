import React, { useEffect } from 'react';

import { TabStyled, TabsStyled, HeadSection, ButtonSection } from './styles';
import { useTranslation } from 'react-i18next';

import ButtonIconAdd from '../../../components/Geral/ButtonIcon';

import { defaultTheme } from '../../../theme';
import TablePutIcon from '../../../components/Table/TablePutIcon';
import { useArea } from '../../../context/areasContext';

const Areas = () => {
	const { t } = useTranslation();
	const { colors } = defaultTheme;
	const { isLoading, areas, modules, getAreasAndModules } = useArea();

	const [value, setValue] = React.useState(0);

	useEffect(() => {
		getAreasAndModules(2);
	}, []);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	let columnsSubAreas = [
		'ID',
		t('nickname'),
		t('areaSize'),
		t('destination'),
	];
	let columnsModules = [
		'ID',
		t('name'),
		t('nickname'),
		t('areaSize'),
		t('destination'),
	];

	return isLoading ? (
		<span>carregando...</span>
	) : (
		<>
			<HeadSection>
				<TabsStyled value={value} onChange={handleChange}>
					<TabStyled label={t('subareas')} />
					<TabStyled label={t('modules')} />
				</TabsStyled>
				<ButtonSection>
					<ButtonIconAdd
						color={colors.neutral0}
						backgroundColor={colors.primary}
						textButton={'Registro'}
						marginBottom={false}
					/>
				</ButtonSection>
			</HeadSection>
			{value === 0 && (
				<TablePutIcon
					data={areas}
					columns={columnsSubAreas}
					putInIcon={false}
					description={false}
				/>
			)}
			{value === 1 && (
				<TablePutIcon
					data={modules}
					columns={columnsModules}
					putInIcon={false}
					description={false}
				/>
			)}
		</>
	);
};

export default Areas;

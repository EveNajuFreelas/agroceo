import React from 'react';

import { TabStyled, TabsStyled, HeadSection, ButtonSection } from './styles';
import { useTranslation } from 'react-i18next';

import {
	manejoMaoFuncionario,
	manejoMaoFuncoes,
} from '../../../utils/dataMock/mock';

import ButtonIconAdd from '../../../components/Geral/ButtonIcon';

import { defaultTheme } from '../../../theme';
import TablePutIcon from '../../../components/Table/TablePutIcon';

const Areas = () => {
	const { t } = useTranslation();
	const { colors } = defaultTheme;

	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
		console.log(value);
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

	return (
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
					data={manejoMaoFuncionario}
					columns={columnsSubAreas}
					putInIcon={false}
				/>
			)}
			{value === 1 && (
				<TablePutIcon
					data={manejoMaoFuncoes}
					columns={columnsModules}
					putInIcon={false}
				/>
			)}
		</>
	);
};

export default Areas;

import React, { useEffect } from 'react';

import { TabStyled, TabsStyled, HeadSection, ButtonSection } from './styles';
import { useTranslation } from 'react-i18next';

import ButtonIconAdd from '../../../components/Geral/ButtonIcon';

import { defaultTheme } from '../../../theme';
import TableNormal from '../../../components/Table/TableNormal';
import { useArea } from '../../../context/areasContext';
import TableWithChip from '../../../components/Table/TableWithChip';
import TableWithDescriptionIcon from '../../../components/Table/TableDescriptionWithIcon';
import { manejoCombustivel } from '../../../utils/dataMock/mock';

const Animals = () => {
	const { t } = useTranslation();
	const { colors } = defaultTheme;
	const { isLoading, areas, modules, getAreasAndModules } = useArea();

	const [value, setValue] = React.useState(0);

	useEffect(() => {
		getAreasAndModules();
	}, []);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const columns = [
		'ID',
		t('description'),
		t('quantity'),
		t('supplier'),
		t('payment'),
		t('supplyLocation'),
		t('driver'),
		t('vehicle'),
		t('dateTime'),
	];

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
		t('pastures'),
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
					<TabStyled label={t('movimentation')} />
					<TabStyled label={t('weighings')} />
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
				<TableNormal
					data={areas}
					columns={columnsSubAreas}
					putInIcon={false}
					description={false}
				/>
			)}
			{value === 1 && (
				<TableWithChip data={modules} columns={columnsModules} />
			)}
			{value === 2 && (
				<TableWithDescriptionIcon
					data={manejoCombustivel}
					columns={columns}
					yesNo={false}
				/>
			)}
			{value === 3 && (
				<TableWithDescriptionIcon
					data={manejoCombustivel}
					columns={columns}
					yesNo={false}
				/>
			)}
		</>
	);
};

export default Animals;

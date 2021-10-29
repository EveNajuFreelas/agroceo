import { useEffect, useState } from 'react';

import { TabStyled, TabsStyled, HeadSection, ButtonSection } from '../styles';
import { useTranslation } from 'react-i18next';

import ButtonIconAdd from '../../../components/Geral/ButtonIcon';

import { defaultTheme } from '../../../theme';
import TableNormal from '../../../components/Table/TableNormal';
import { useArea } from '../../../context/areasContext';
import TableWithChip from '../../../components/Table/TableWithChip';
import CircleLoading from '../../../components/LoadingCircle';
import { AreaModal } from '../../../components/Modals/Management/areas';
import { useModalsContainer } from '../../../context/modalsContext';

const Areas = () => {
	const { t } = useTranslation();
	const { openModal } = useModalsContainer();
	const { colors } = defaultTheme;
	const { isLoading, areas, modules, getAreasAndModules } = useArea();

	const [value, setValue] = useState(0);

	useEffect(() => {
		getAreasAndModules();
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
		t('pastures'),
		t('destination'),
	];

	return isLoading ? (
		<CircleLoading />
	) : (
		<>
			<AreaModal
				title={'Registrar Sub-área ou Módulo'}
				breadcrumbs={['management', 'areas']}
			/>
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
						onClick={openModal}
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
		</>
	);
};

export default Areas;

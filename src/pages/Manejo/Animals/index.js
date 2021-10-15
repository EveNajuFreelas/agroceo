import React, { useEffect } from 'react';

import { TabStyled, TabsStyled, HeadSection, ButtonSection } from '../styles';
import { useTranslation } from 'react-i18next';

import ButtonIconAdd from '../../../components/Geral/ButtonIcon';

import { defaultTheme } from '../../../theme';
import TableNormal from '../../../components/Table/TableNormal';
import { useArea } from '../../../context/areasContext';
import TableWithDescriptionIcon from '../../../components/Table/TableDescriptionWithIcon';
import {
	animaisData,
	animaisLots,
	animaisMoviment,
	animaisWeighings,
} from '../../../utils/dataMock/mock';
import { TableBody, Table } from '@material-ui/core';
import CollapseRow from '../../../components/Table/CollapseRow';
import { StyledTableContainer } from '../../../components/Table/styles';
import TableHeadDefault from '../../../components/Table/TableHead';

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

	let columnsRegisteredAnimals = [
		'ID',
		t('raceSpecies'),
		t('type'),
		t('sex'),
		t('age'),
		t('quantity'),
	];

	let columnTableCollapse = [
		t('specie'),
		t('type'),
		t('sex'),
		t('age'),
		t('quantity'),
	];
	console.log(columnTableCollapse);

	let columnsLotsAnimals = [
		'ID',
		t('lot'),
		t('nameLot'),
		t('subarea'),
		t('totalAnimals'),
	];

	let columnsMovimentation = [
		'ID',
		t('recordType'),
		t('quantity'),
		t('specie'),
		t('category'),
		t('sex'),
		t('age'),
		t('weightAverage'),
	];

	let columnsWeighings = [
		'ID',
		t('lot'),
		t('qntdAnimals'),
		t('%AnimalsWeighed'),
		t('averageWeight'),
		t('lastWeighing'),
		t('subarea'),
	];

	return isLoading ? (
		<span>carregando...</span>
	) : (
		<>
			<HeadSection>
				<TabsStyled value={value} onChange={handleChange}>
					<TabStyled label={t('registeredAnimals')} />
					<TabStyled label={t('lotsAnimals')} />
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
					data={animaisData}
					columns={columnsRegisteredAnimals}
					putInIcon={false}
					description={false}
				/>
			)}
			{value === 1 && (
				<StyledTableContainer>
					<Table>
						<TableHeadDefault
							columns={columnsLotsAnimals}
							space={true}
						/>
						<TableBody>
							{animaisLots.map(row => (
								<CollapseRow
									row={row}
									columns={columnTableCollapse}
								/>
							))}
						</TableBody>
					</Table>
				</StyledTableContainer>
			)}
			{value === 2 && (
				<TableWithDescriptionIcon
					data={animaisMoviment}
					columns={columnsMovimentation}
					yesNo={false}
				/>
			)}
			{value === 3 && (
				<TableNormal
					data={animaisWeighings}
					columns={columnsWeighings}
					putInIcon={false}
					description={false}
				/>
			)}
		</>
	);
};

export default Animals;

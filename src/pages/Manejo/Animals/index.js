import { useEffect, useState } from 'react';

import { TabStyled, TabsStyled, HeadSection, ButtonSection } from '../styles';
import { useTranslation } from 'react-i18next';
import { defaultTheme } from '../../../theme';

import TableNormal from '../../../components/Table/TableNormal';
import TableWithDescriptionIcon from '../../../components/Table/TableDescriptionWithIcon';
import ButtonIconAdd from '../../../components/Geral/ButtonIcon';
import CollapseRow from '../../../components/Table/CollapseRow';
import TableHeadDefault from '../../../components/Table/TableHead';

import {
	animaisLots,
	animaisMoviment,
	animaisWeighings,
} from '../../../utils/dataMock/mock';

import { TableBody, Table } from '@material-ui/core';
import { StyledTableContainer } from '../../../components/Table/styles';
import { useAnimals } from '../../../context/animalsContext';
import CircleLoading from '../../../components/LoadingCircle';
import { AnimalsModal } from '../../../components/Modals/Management/animals';
import { useModalsContainer } from '../../../context/modalsContext';

const Animals = () => {
	const { t } = useTranslation();
	const { colors } = defaultTheme;
	const { isLoading, animals, getAnimals, deleteAnimals } = useAnimals();
	const { openModal } = useModalsContainer();
	const [value, setValue] = useState(0);

	useEffect(() => {
		getAnimals();
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

	let columnsLotsAnimals = [
		'ID',
		t('lot'),
		t('nameLot'),
		t('subareas'),
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
		t('subareas'),
	];

	return isLoading ? (
		<CircleLoading />
	) : (
		<>
			<AnimalsModal t={t} />
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
						onClick={openModal}
					/>
				</ButtonSection>
			</HeadSection>
			{value === 0 && (
				<TableNormal
					data={animals}
					columns={columnsRegisteredAnimals}
					putInIcon={false}
					description={false}
					deleteFunction={deleteAnimals}
					title={t('animals')}
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
							{animaisLots.map((row) => (
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
					title={t('movimentations')}
				/>
			)}
			{value === 3 && (
				<TableNormal
					data={animaisWeighings}
					columns={columnsWeighings}
					putInIcon={false}
					description={false}
					title={t('weighings')}
				/>
			)}
		</>
	);
};

export default Animals;

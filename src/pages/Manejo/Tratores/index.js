import React, { useEffect } from 'react';
import { TitleSection } from '../../../components/Geral/styles';
import { HeadSection } from '../styles';

import { useTranslation } from 'react-i18next';
import { defaultTheme } from '../../../theme';

import { itensMenuCombustivel } from '../../../utils/dataMock/itensMenu';

import Filter from '../../../components/Filter';
import ButtonIconAdd from '../../../components/Geral/ButtonIcon';
import TableNormal from '../../../components/Table/TableNormal';
import { useTractor } from '../../../context/tractorContext';

const Tratores = () => {
	const { t } = useTranslation();
	const { colors } = defaultTheme;
	const { isLoading, tractor, getTractor, deleteTractor } = useTractor();

	useEffect(() => {
		getTractor();
	}, []);

	const columns = [
		'ID',
		t('brand'),
		t('model'),
		t('color'),
		t('manufacture'),
		t('board'),
		t('owner'),
		t('lastRevision'),
	];

	const filter = mes => {
		console.log(mes);
	};

	return (
		<>
			<HeadSection>
				<TitleSection>
					Tratores
					<Filter
						label={'Todos'}
						itensMenu={itensMenuCombustivel}
						clickFunction={filter}
					/>
				</TitleSection>
				<ButtonIconAdd
					color={colors.neutral0}
					backgroundColor={colors.primary}
					textButton='Cadastrar'
					marginBottom={true}
				/>
			</HeadSection>
			{isLoading ? (
				<span>Carregando...</span>
			) : (
				<TableNormal
					data={tractor}
					columns={columns}
					putInIcon={true}
					description={false}
					deleteFunction={deleteTractor}
				/>
			)}
		</>
	);
};

export default Tratores;

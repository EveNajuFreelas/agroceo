import React, { useEffect } from 'react';
import { TitleSection } from '../../../components/Geral/styles';
import { HeadSection } from '../styles';

import { useTranslation } from 'react-i18next';
import { defaultTheme } from '../../../theme';

import { itensMenuCombustivel } from '../../../utils/dataMock/itensMenu';

import Filter from '../../../components/Filter';
import ButtonIconAdd from '../../../components/Geral/ButtonIcon';
import TableTarefas from '../../../components/Table/Manejo/tableTarefas';
import { manejoTask } from '../../../utils/dataMock/mock';

const Tarefas = () => {
	const { t } = useTranslation();
	const { colors } = defaultTheme;

	useEffect(() => {}, []);

	const columns = [
		'ID',
		t('title'),
		t('expectateStartDate'),
		t('costCenters'),
		t('status'),
		t('responsible'),
	];

	const filter = mes => {
		console.log(mes);
	};

	const deleteTask = id => {};

	return (
		<>
			<HeadSection>
				<TitleSection>
					Tarefas
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
			{/* {isLoading ? (
				<span>Carregando...</span>
			) : ( */}
			<TableTarefas
				data={manejoTask}
				columns={columns}
				deleteFunction={deleteTask}
			/>
			{/* )} */}
		</>
	);
};

export default Tarefas;

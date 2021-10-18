import React, { useEffect } from 'react';
import { TitleSection } from '../../../components/Geral/styles';
import { HeadSection, ProgressContainer } from '../styles';

import { useTranslation } from 'react-i18next';
import { defaultTheme } from '../../../theme';

import { itensMenuCombustivel } from '../../../utils/dataMock/itensMenu';

import Filter from '../../../components/Filter';
import ButtonIconAdd from '../../../components/Geral/ButtonIcon';
import TableTarefas from '../../../components/Table/Manejo/tableTarefas';
import { useTask } from '../../../context/taskContext';
import { CircularProgress } from '@material-ui/core';

const Tarefas = () => {
	const { t } = useTranslation();
	const { colors } = defaultTheme;
	const { getTasks, tasks, deleteTasks, isLoading } = useTask();

	useEffect(() => {
		getTasks();
	}, []);

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

	return (
		<>
			<HeadSection>
				<TitleSection>
					{t('assignments')}
					<Filter
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
				<ProgressContainer>
					<CircularProgress style={{ color: colors.primary }} />
				</ProgressContainer>
			) : (
				<TableTarefas
					data={tasks}
					columns={columns}
					deleteFunction={deleteTasks}
				/>
			)}
		</>
	);
};

export default Tarefas;

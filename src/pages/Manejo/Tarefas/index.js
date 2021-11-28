import { useEffect } from 'react';
import { TitleSection } from '../../../components/Geral/styles';
import { HeadSection } from '../styles';

import { useTranslation } from 'react-i18next';
import { defaultTheme } from '../../../theme';

import { itensMenuCombustivel } from '../../../utils/dataMock/itensMenu';

import Filter from '../../../components/Filter';
import ButtonIconAdd from '../../../components/Geral/ButtonIcon';
import TableTarefas from '../../../components/Table/Manejo/tableTarefas';
import { useTask } from '../../../context/taskContext';
import CircleLoading from '../../../components/LoadingCircle';

import { RegisterModalTask } from '../../../components/Modals/Management/task';
import { useModalsContainer } from '../../../context/modalsContext';
import { usePageContext } from '../../../context/pageContext';

const Tarefas = () => {
	const { setPageTitle, setBreadcrumbs } = usePageContext();
	const { t } = useTranslation();
	const { colors } = defaultTheme;
	const { getTasks, tasks, deleteTasks, isLoading } = useTask();
	const { openModal } = useModalsContainer();

	useEffect(() => {
		getTasks();
		setPageTitle('assignments');
		setBreadcrumbs([t('management'), t('assignments')]);
	}, []);

	const columns = [
		'ID',
		t('title'),
		t('expectateStartDate'),
		t('costCenters'),
		t('status'),
		t('responsible'),
	];

	const filter = (mes) => {
		console.log(mes);
	};

	return (
		<>
			<RegisterModalTask />
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
					textButton="Cadastrar"
					marginBottom={true}
					onClick={openModal}
				/>
			</HeadSection>
			{isLoading ? (
				<CircleLoading />
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

import { useEffect } from 'react';
import { TitleSection } from '../../../components/Geral/styles';
import { HeadSection } from '../styles';

import { useTranslation } from 'react-i18next';
import { defaultTheme } from '../../../theme';

import TableDemandas from '../../../components/Table/Manejo/tableDemandas';
import Filter from '../../../components/Filter';
import ButtonIconAdd from '../../../components/Geral/ButtonIcon';
import { itensMenuCombustivel } from '../../../utils/dataMock/itensMenu';
import { useDemand } from '../../../context/demandContext';
import CircleLoading from '../../../components/LoadingCircle';
import { DemandsModal } from '../../../components/Modals/Management/demands';
import { useModalsContainer } from '../../../context/modalsContext';

const Demandas = () => {
	const { t } = useTranslation();
	const { colors } = defaultTheme;
	const { demands, deleteDemands, getDemands, isLoading } = useDemand();
	const { openModal } = useModalsContainer();

	useEffect(() => {
		getDemands();
	}, []);

	const columns = [
		'ID',
		t('demand'),
		t('createBy'),
		t('demandPhoto'),
		t('task'),
	];

	const filter = (mes) => {
		console.log(mes);
	};

	return (
		<>
			<DemandsModal />
			<HeadSection>
				<TitleSection>
					{t('demand')}
					<Filter
						itensMenu={itensMenuCombustivel}
						clickFunction={filter}
					/>
				</TitleSection>
				<ButtonIconAdd
					color={colors.neutral0}
					backgroundColor={colors.primary}
					textButton="Registro"
					marginBottom={true}
					onClick={openModal}
				/>
			</HeadSection>
			{isLoading ? (
				<CircleLoading />
			) : (
				<TableDemandas
					data={demands}
					columns={columns}
					deleteFunction={deleteDemands}
				/>
			)}
		</>
	);
};

export default Demandas;

import { useEffect } from 'react';
import { TitleSection } from '../../../components/Geral/styles';
import { HeadSection } from '../styles';

import { useTranslation } from 'react-i18next';
import { defaultTheme } from '../../../theme';

import { itensMenuCombustivel } from '../../../utils/dataMock/itensMenu';

import Filter from '../../../components/Filter';
import ButtonIconAdd from '../../../components/Geral/ButtonIcon';
import TableNormal from '../../../components/Table/TableNormal';
import { useTractor } from '../../../context/tractorContext';
import CircleLoading from '../../../components/LoadingCircle';
import { RegisterModalVehicle } from '../../../components/Modals/Management/vehicleModals/RegisterModal';
import { useModalsContainer } from '../../../context/modalsContext';
import { UtilizationModal } from '../../../components/Modals/Management/vehicleModals/UtilzationModal';

const Tratores = () => {
	const { openModal } = useModalsContainer();
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

	const filter = (mes) => {
		console.log(mes);
	};

	return (
		<>
			<RegisterModalVehicle
				title={t('registerTractor')}
				breadcrumbs={[['management', 'tractor']]}
				description={false}
				odometerHourmeter="hourmeter"
			/>
			<UtilizationModal
				title={t('registerUsageReview')}
				breadcrumbs={[['management', 'tractor', 'truck']]}
				odometerHourmeter="hourmeter"
			/>

			<HeadSection>
				<TitleSection>
					{t('tractor')}
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
				<TableNormal
					data={tractor}
					columns={columns}
					putInIcon={true}
					description={false}
					deleteFunction={deleteTractor}
					title={t('tractor')}
				/>
			)}
		</>
	);
};

export default Tratores;

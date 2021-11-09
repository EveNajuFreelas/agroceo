import { useEffect } from 'react';
import { TitleSection } from '../../../components/Geral/styles';
import { HeadSection } from '../styles';

import { useTranslation } from 'react-i18next';
import { defaultTheme } from '../../../theme';

import { itensMenuCombustivel } from '../../../utils/dataMock/itensMenu';

import Filter from '../../../components/Filter';
import ButtonIconAdd from '../../../components/Geral/ButtonIcon';
import TableNormal from '../../../components/Table/TableNormal';
import { useVehicle } from '../../../context/vehiclesContext';
import CircleLoading from '../../../components/LoadingCircle';

import { RegisterModalVehicle } from '../../../components/Modals/Management/vehicleModals/RegisterModal';
//import { useManagementContainer } from '../../../context/managementContext';
import { useModalsContainer } from '../../../context/modalsContext';
import { UtilizationModal } from '../../../components/Modals/Management/vehicleModals/UtilzationModal';
import { usePageContext } from '../../../context/pageContext';

const Veiculos = () => {
	const { setPageTitle } = usePageContext();
	const { openModal } = useModalsContainer();
	const { t } = useTranslation();
	const { colors } = defaultTheme;
	const { isLoading, getVehicle, vehicle, deleteVehicle } = useVehicle();

	useEffect(() => {
		getVehicle();
		setPageTitle('vehicle');
	}, []);

	const columns = [
		'ID',
		t('description'),
		t('brand'),
		t('model'),
		t('color'),
		t('board'),
		t('owner'),
		t('lastRevision'),
	];

	const filter = (mes) => {
		//console.log(mes);
	};

	return (
		<>
			<RegisterModalVehicle
				title={t('registerVehicle')}
				breadcrumbs={[['management', 'vehicles']]}
				description={true}
				odometerHourmeter="odometer"
			/>
			<UtilizationModal
				title={t('registerUsageReview')}
				breadcrumbs={[['management', 'vehicle', 'truck']]}
				odometerHourmeter="odometer"
			/>
			<HeadSection>
				<TitleSection>
					{t('vehicle')}
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
			<div>
				{isLoading ? (
					<CircleLoading />
				) : (
					<TableNormal
						data={vehicle}
						columns={columns}
						putInIcon={true}
						description={true}
						deleteFunction={deleteVehicle}
						title={t('vehicle')}
					/>
				)}
			</div>
		</>
	);
};

export default Veiculos;

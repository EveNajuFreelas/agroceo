import { useEffect } from 'react';
import { TitleSection } from '../../../components/Geral/styles';
import { HeadSection } from '../styles';

import { useTranslation } from 'react-i18next';
import { defaultTheme } from '../../../theme';

import TableWithDescriptionIcon from '../../../components/Table/TableDescriptionWithIcon';
import Filter from '../../../components/Filter';
import { itensMenuCombustivel } from '../../../utils/dataMock/itensMenu';
import ButtonIconAdd from '../../../components/Geral/ButtonIcon';
import { useInput } from '../../../context/inputsContext';
import CircleLoading from '../../../components/LoadingCircle';
import { usePageContext } from '../../../context/pageContext';
import { InitialManagementModal } from '../../../components/Modals/Management';
import { EntranceSuppliesModal } from '../../../components/Modals/Management/supplies/entranceModal/index';
import { ExitSuppliesModal } from '../../../components/Modals/Management/supplies/exitModal/index';
import { useManagementContainer } from '../../../context/managementContext';

const Insumos = () => {
	const { setPageTitle } = usePageContext();
	const { t } = useTranslation();
	const { colors } = defaultTheme;
	const { inputs, getInputs, isLoading, filter } = useInput();
	const { openInitialModal } = useManagementContainer();

	useEffect(() => {
		getInputs();
		setPageTitle('input');
	}, []);

	const columns = [
		'ID',
		t('supplies'),
		t('quantity'),
		t('unitMeasurement'),
		t('presentation'),
		t('document'),
		t('whoReceived'),
	];

	return (
		<>
			<InitialManagementModal />
			<EntranceSuppliesModal />
			<ExitSuppliesModal />
			<HeadSection>
				<TitleSection>
					{t('input')}
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
					onClick={openInitialModal}
				/>
			</HeadSection>
			{isLoading ? (
				<CircleLoading />
			) : (
				<div>
					<TableWithDescriptionIcon
						data={inputs}
						columns={columns}
						yesNo={true}
						columnYesNo={'document'}
						title={t('input')}
					/>
				</div>
			)}
		</>
	);
};

export default Insumos;

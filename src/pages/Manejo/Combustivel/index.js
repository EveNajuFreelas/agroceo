import React, { useEffect } from 'react';
import { TitleSection } from '../../../components/Geral/styles';
import { HeadSection } from '../styles';

import { useTranslation } from 'react-i18next';
import { defaultTheme } from '../../../theme';

import TableWithDescriptionIcon from '../../../components/Table/TableDescriptionWithIcon';
import Filter from '../../../components/Filter';
import { itensMenuCombustivel } from '../../../utils/dataMock/itensMenu';
import { manejoCombustivel } from '../../../utils/dataMock/mock';
import ButtonIconAdd from '../../../components/Geral/ButtonIcon';
import { useManagementContainer } from '../../../context/managementContext';
import { InitialManagementModal } from '../../../components/Modals/Management';
import { EntranceManagementModal } from '../../../components/Modals/Management/fuel/entranceModal/index';
import { ExitManagementModal } from '../../../components/Modals/Management/fuel/exitModal/index';
import { usePageContext } from '../../../context/pageContext';

const Combustivel = () => {
	const { setPageTitle, setBreadcrumbs } = usePageContext();
	const { openInitialModal } = useManagementContainer();
	const { t } = useTranslation();
	const { colors } = defaultTheme;

	const columns = [
		'ID',
		t('description'),
		t('quantity'),
		t('invoice'),
		t('supplier'),
		t('supplyLocation'),
		t('driver'),
		t('vehicle'),
		t('dateTime'),
	];

	const filter = (mes) => {
		console.log(mes);
	};

	useEffect(() => {
		setPageTitle('fuel');
		setBreadcrumbs([t('management'), t('fuel')]);
	}, []);

	return (
		<>
			<InitialManagementModal />
			<EntranceManagementModal />
			<ExitManagementModal />
			<HeadSection>
				<TitleSection>
					{t('fuelRecords')}
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
			<div>
				<TableWithDescriptionIcon
					data={manejoCombustivel}
					columns={columns}
					yesNo={true}
					columnYesNo={'invoice'}
					title={t('fuel')}
				/>
			</div>
		</>
	);
};

export default Combustivel;

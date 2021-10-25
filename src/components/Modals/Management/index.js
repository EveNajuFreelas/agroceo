import { useTranslation } from 'react-i18next';
import { useManagementContainer } from '../../../context/managementContext';
import { ModalShell } from '../../Modal/index';
import { TypeManagementButton } from './managementStyles';

export const InitialManagementModal = () => {
	const { t } = useTranslation();
	const { closeModals, initialModalState, openEntranceModal, openExitModal } =
		useManagementContainer();

	return (
		<ModalShell
			isSmall
			open={initialModalState}
			handleClose={closeModals}
			title={t('registerType')}
		>
			{t('selectManagementModal')}
			<TypeManagementButton isEntry onClick={openEntranceModal}>
				{t('entrance')}
			</TypeManagementButton>
			<TypeManagementButton onClick={openExitModal}>
				{t('exit')}
			</TypeManagementButton>
		</ModalShell>
	);
};

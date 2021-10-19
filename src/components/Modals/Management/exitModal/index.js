import { ModalShell } from '../../../Modal/index';
import { useManagementContainer } from '../../../../context/managementContext';

export const ExitManagementModal = ({ title }) => {
    const { exitModalState, closeModals } = useManagementContainer();
    return (
        <ModalShell 
            open={exitModalState}
            handleClose={closeModals}
            title={title}
            breadcrumbs={['financial', 'expenses']}
            actionButtons={[
                {
                    onClick: () => closeModals(),
                    title: 'cancel',
                    color: 'secondary',
                    variant: 'outlined',
                },
                {
                    onClick: () => closeModals(),
                    title: 'save',
                    color: 'primary',
                    variant: 'contained',
                }
            ]}
        >
            teste aqui \exit\
        </ModalShell>)
};
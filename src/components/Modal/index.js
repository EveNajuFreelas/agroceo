import { Button } from '@material-ui/core';
import { 
    ModalWrapper, 
    ModalHeader, 
    CloseModal,
    HeaderBreadcrumb, 
    HeaderTitle,
    ModalFooter,
} from './styles';
import { useTranslation } from 'react-i18next';

export const ModalShell = ({ 
    open, 
    title, 
    breadcrumbs, 
    handleClose,
    actionButtons,
    children,
    ...props
}) => {
    const { t } = useTranslation();

    return (
    <ModalWrapper
        {...props}
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
    >
        <ModalHeader>
            <div>
                <HeaderBreadcrumb>
                    {breadcrumbs && breadcrumbs.map(b => (
                        <p>{t(b)}</p>
                    ))}
                </HeaderBreadcrumb>
                <HeaderTitle>{t(title)}</HeaderTitle>
            </div>
            <CloseModal onClick={handleClose} />
        </ModalHeader>
        {children}
        {actionButtons && (<ModalFooter>
            {actionButtons.map(ab => (
                <Button {...ab}>{t(ab.title)}</Button>
            ))}
        </ModalFooter>)}
    </ModalWrapper>)
}
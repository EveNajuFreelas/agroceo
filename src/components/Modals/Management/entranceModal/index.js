import { useEffect, useState } from 'react';
import { useManagementContainer } from '../../../../context/managementContext';
import { ModalShell } from '../../../Modal/index';
import { InputField, UploadField, SelectField, StyledMenuItem, InputFieldsWrapper } from '../../inputsStyles';
import { fuelTypes } from '../../../../utils/dataMock/mock';
import { useTranslation } from 'react-i18next';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormHelperText, InputLabel } from '@material-ui/core';

export const EntranceManagementModal = () => {
    const { t } = useTranslation();
    const { 
        entranceModalState, 
        openEntranceModal, 
        closeModals, 
        setActiveContent, 
        activeContent, 
    } = useManagementContainer();

    const [currentInfo, setCurrentInfo] = useState(activeContent);
    const [confirmDialogActive, setConfirmDialogActive] = useState(false);

    const handleInput = (info, inputName) => {
        setCurrentInfo(curr => ({ ...curr, [inputName]: info}));  
    }

    const handleSave = (opt) => {
        switch(opt) {
            case 'openDialog':
                setConfirmDialogActive(true);
            case 'save':
                setActiveContent(currentInfo);
                closeModals();
                break;
            case 'cancel':
                openEntranceModal();
                setConfirmDialogActive(false);
                break;
            default:
                setConfirmDialogActive(false);
                closeModals();
                break;
        }
    }

    const renderConfirmDialog = () => (
        <Dialog style={{ padding: '20px' }} onClose={() => handleSave('cancel')} open={confirmDialogActive}>
            <DialogTitle>{t('attention')}</DialogTitle>
            <DialogContent>
                <p>{t('receiptNotSent')}</p>
                <p>{t('confirmSendingWithoutReceipt')}</p>
            </DialogContent>
            <DialogActions>
                <Button 
                    color='primary' 
                    variant='outlined' 
                    onClick={() => handleSave('save')}
                >{t('yes')}</Button>
                <Button 
                    color='secondary' 
                    variant='outlined' 
                    onClick={() => handleSave('cancel')}
                >{t('no')}</Button>
            </DialogActions>
        </Dialog>
    )

    return (
        <>
        {renderConfirmDialog()}
        <ModalShell
            isSmall
            open={entranceModalState}
            handleClose={closeModals}
            title={t('entranceRegister')}
            breadcrumbs={['financial', 'expenses']}
            actionButtons={[
                {
                    onClick: () => handleSave(),
                    title: 'cancel',
                    color: 'secondary',
                    variant: 'outlined',
                },
                {
                    onClick: () => handleSave(currentInfo.receipt ? 'save' : 'openDialog'),
                    title: 'save',
                    color: 'primary',
                    variant: 'contained',
                }
            ]}
        >
            <InputFieldsWrapper style={{ flexDirection: 'column' }}>
                <InputLabel htmlFor="fuelType">{t('fuelType')}</InputLabel>
                <SelectField
                    id='fuelType'
                    name='fuelType'
                    defaultValue={currentInfo?.fuelType || ''}
                    onChange={e => handleInput(e.target.value, e.target.name)}
                >
                    <StyledMenuItem value=''>{`${t('select')}...`}</StyledMenuItem>
                    {fuelTypes.map(ft => (
                        <StyledMenuItem value={ft.value}>{t(ft.name)}</StyledMenuItem>
                    ))}
                </SelectField>
                <InputLabel htmlFor="quantity">{t('quantity')}</InputLabel>
                <InputField 
                    id='quantity'
                    name='quantity'
                    type='money'
                    defaultValue={currentInfo?.quantity}
                    onChange={e => handleInput(e.target.value, e.target.name)}
                />
                <FormHelperText htmlFor='quantity'>{t('litersnumber')}</FormHelperText>
                <InputLabel htmlFor="receipt">{t('receipt')}</InputLabel>
                <UploadField 
                    id='receipt'
                    docName=''
                    name='receipt'
                    buttonName={t('select')}
                    onChange={e => handleInput(e.target.value, e.target.name)}
                />
            </InputFieldsWrapper>
        </ModalShell>
        </>)
};
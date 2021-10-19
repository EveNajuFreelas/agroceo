import { useEffect, useState } from 'react';
import { useManagementContainer } from '../../../../context/managementContext';
import { ModalShell } from '../../../Modal/index';
import { InputField, UploadField, SelectField, StyledMenuItem, InputFieldsWrapper } from '../../inputsStyles';
import { fuelTypes } from '../../../../utils/dataMock/mock';
import { useTranslation } from 'react-i18next';
import { FormHelperText, InputLabel } from '@material-ui/core';

export const EntranceManagementModal = ({ title }) => {
    const { t } = useTranslation();
    const { entranceModalState, closeModals, setActiveContent, activeContent } = useManagementContainer();

    const [currentInfo, setCurrentInfo] = useState(activeContent);

    const handleInput = (info, inputName) => {
        setCurrentInfo(curr => ({ ...curr, [inputName]: info}));
    }

    return (
        <ModalShell
            isSmall
            open={entranceModalState}
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
                    onClick: () => setActiveContent(currentInfo),
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
        </ModalShell>)
};
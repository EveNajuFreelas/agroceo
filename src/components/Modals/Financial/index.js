import { useEffect, useState } from 'react';
import { ModalShell } from '../../Modal/index';
import { useTranslation } from 'react-i18next';
import { useExpensesContainer } from '../../../context/financesContext/expensesContext';
import { 
    PropertyDivisionWrapper, 
    PropertiesField,
} from './styles';
import {
    InputFieldsWrapper, 
    InputField, 
    SelectField,
    StyledMenuItem,
    UploadField,
    StyledSlider,
    ControlledInput
} from '../inputsStyles';
import { Checkbox, InputLabel } from '@material-ui/core';

export const FinancialModal = ({ title, breadcrumbs }) => {
    const { modalState, setModalState, activeContent, editActiveContent } = useExpensesContainer();
    const { t } = useTranslation();
    const [currentInfo, setCurrentInfo] = useState(activeContent);

    useEffect(() => {
        setCurrentInfo(activeContent);
    }, [activeContent]);

    const handleInput = (info, inputName) => {
        setCurrentInfo(curr => ({ ...curr, [inputName]: info}));
    }

    const handlePropertiesInput = (info, inputName, id) => {
        if(inputName == 'percentage') {
            // fazer equivalência valor total -> porcentagem aqui
        }
        const newArray = [...currentInfo.Properties];
        newArray[id] = {
            ...currentInfo.Properties[id],
            [inputName]: info,
        };
        setCurrentInfo(curr => ({...curr, Properties: newArray}));
    }

    const renderProperties = () => {
        return currentInfo.Properties?.map(prop => (
                <PropertiesField key={prop.id}>
                    <Checkbox />
                    <p>{prop.name}</p>
                    <StyledSlider
                        value={prop.percentage}
                        onChange={(e, val) => handlePropertiesInput(Number(val), "percentage", prop.id)}
                    />
                    <ControlledInput
                        value={prop.percentage}
                        onChange={e => handlePropertiesInput(Number(e.target.value), 'percentage', prop.id)}
                        type="number"
                    />
                    <ControlledInput
                        defaultValue={prop.value} 
                        onChange={e => handlePropertiesInput(Number(e.target.value), 'value', prop.id)}
                        type="number"
                    />
                </PropertiesField>
            ))
    };

    return (
        <ModalShell 
            open={modalState}
            handleClose={() => setModalState(false)}
            title={title}
            breadcrumbs={breadcrumbs}
            actionButtons={[
                {
                    onClick: () => setModalState(false),
                    title: 'cancel',
                    color: 'secondary',
                    variant: 'outlined',
                },
                {
                    onClick: () => setModalState(false),
                    title: 'save',
                    color: 'primary',
                    variant: 'contained',
                }
            ]}
        >
            <InputFieldsWrapper>
                <div style={{ width: '50%'}}>
                    <InputLabel htmlFor="description">{t('description')}</InputLabel>
                    <InputField
                        id='description'
                        name='Description'
                        defaultValue={currentInfo?.description}
                        onChange={e => handleInput(e.target.value, e.target.name)}
                    />
                    <InputLabel htmlFor="totalValue">{t('totalValue')}</InputLabel>
                    <InputField
                        id='totalValue'
                        name='TotalValue'
                        type='money'
                        defaultValue={currentInfo?.TotalValue}
                        onChange={e => handleInput(e.target.value, e.target.name)}
                    />
                    <InputLabel htmlFor="expensesDate">{t('expensesDate')}</InputLabel>
                    <InputField 
                        id='expensesDate'
                        name='DateDespesa'
                        type='date'
                        onChange={e => handleInput(e.target.value, e.target.name)}
                    />
                    <InputLabel htmlFor="receipt">{t('receipt')}</InputLabel>
                    <UploadField
                        id='receipt'
                        docName={currentInfo?.DocumentPicture !== '--' 
                            ? currentInfo?.DocumentPicture 
                            : null}
                        name='Receipt'
                        buttonName={t('select')}
                        onChange={e => handleInput(e.target.value, e.target.name)}
                    />
                </div>
                <div style={{ width: '50%' }}>
                    <InputLabel htmlFor="payment">{t('payment')}</InputLabel>
                    <SelectField
                        id='payment'
                        name='Payment'
                        value={currentInfo?.Payment}
                        onChange={e => handleInput(e.target.value, e.target.name)}
                    >
                        <StyledMenuItem value="Cartão de crédito">Cartão de Crédito</StyledMenuItem>
                    </SelectField>
                    <InputLabel htmlFor="parcels">{t('parcels')}</InputLabel>
                    <SelectField
                        id='parcels'
                        name='Parcela'
                        value={currentInfo?.Parcela}
                        onChange={e => handleInput(e.target.value, e.target.name)}
                    >
                        <StyledMenuItem value="10x">10x</StyledMenuItem>
                    </SelectField>
                    <InputLabel htmlFor="firstParcel">{t('firstParcel')}</InputLabel>
                    <InputField 
                        id='firstParcel'
                        type='date'
                        name='FirstParcela'
                        onChange={e => handleInput(e.target.value, e.target.name)}
                    />
                    <InputLabel htmlFor="accountPlan">{t('AccountPlan')}</InputLabel>
                    <SelectField
                        id='AccountPlan'
                        name='AccountPlan'
                        value={currentInfo?.AccountPlan}
                        onChange={e => handleInput(e.target.value, e.target.name)}
                    >
                        <StyledMenuItem value="Combustivel">Combustível</StyledMenuItem>
                    </SelectField>
                </div>
            </InputFieldsWrapper>
            {currentInfo.Properties && (<PropertyDivisionWrapper>
                Divisão entre propriedades
                {renderProperties()}
            </PropertyDivisionWrapper>)}
        </ModalShell>
    );
}
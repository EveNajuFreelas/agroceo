import { useState } from 'react';
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
} from '../inputsStyles';
import { Checkbox, Input, Slider } from '@material-ui/core';

export const FinancialModal = ({ title }) => {
    const { modalState, setModalState, activeContent } = useExpensesContainer();
    const { t } = useTranslation();
    const [currentInfo, setCurrentInfo] = useState(activeContent);

    const handleInput = (info, inputName) => {
        setCurrentInfo(curr => ({ ...curr, [inputName]: info}));
    }

    const handlePropertiesInput = (info, inputName, id) => {
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
                    <Slider
                        defaultValue={prop.percentage}
                        onChange={e => handlePropertiesInput(e.target.value, e.target.name, prop.id)}
                    />
                    <Input 
                        variant='outlined'
                        defaultValue={prop.percentage}
                        onChange={e => handlePropertiesInput(e.target.value, e.target.name, prop.id)}
                    />
                    <Input
                        variant='outlined'
                        defaultValue={prop.value} 
                        onChange={e => handlePropertiesInput(e.target.value, e.target.name, prop.id)}
                    />
                </PropertiesField>
            ))
    };

    return (
        <ModalShell 
            open={modalState}
            handleClose={() => setModalState(false)}
            title={title || "expenses"}
            breadcrumbs={['financial', 'expenses']}
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
                    <InputField
                        label={t('description')}
                        name='Description'
                        defaultValue={currentInfo.Description}
                        onChange={e => handleInput(e.target.value, e.target.name)}
                    />
                    <InputField
                        label={t('totalValue')}
                        name='TotalValue'
                        type='money'
                        defaultValue={currentInfo.TotalValue}
                        onChange={e => handleInput(e.target.value, e.target.name)}
                    />
                    <InputField 
                        label={t('expensesDate')}
                        name='DateDespesa'
                        type='date'
                        onChange={e => handleInput(e.target.value, e.target.name)}
                        InputLabelProps={{ shrink: true }}
                    />
                    <UploadField 
                        //label={t('receipt')}
                        //type='file'
                        writtenField="field lalal"
                        name='Receipt'
                        buttonName={t('select')}
                        onChange={e => handleInput(e.target.value, e.target.name)}
                        //InputLabelProps={{ shrink: true }}
                    />
                </div>
                <div style={{ width: '50%' }}>
                    <SelectField
                        label={t('payment')}
                        name='Payment'
                        value={currentInfo.Payment}
                        onChange={e => handleInput(e.target.value, e.target.name)}
                        InputLabelProps={{ shrink: true }}
                    >
                        <StyledMenuItem value="Credit Card">Cartão de Crédito</StyledMenuItem>
                    </SelectField>
                    <SelectField
                        label={t('parcels')}
                        name='Parcela'
                        value={currentInfo.Parcela}
                        onChange={e => handleInput(e.target.value, e.target.name)}
                        InputLabelProps={{ shrink: true }}
                    >
                        <StyledMenuItem value="10x">10x</StyledMenuItem>
                    </SelectField>
                    <InputField 
                        label={t('firstParcel')}
                        type='date'
                        name='FirstParcela'
                        onChange={e => handleInput(e.target.value, e.target.name)}
                        InputLabelProps={{ shrink: true }}
                    />
                    <SelectField
                        label={t('AccountPlan')}
                        name='AccountPlan'
                        value={currentInfo.AccountPlan}
                        onChange={e => handleInput(e.target.value, e.target.name)}
                        InputLabelProps={{ shrink: true }}
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
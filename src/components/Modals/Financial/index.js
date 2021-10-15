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
    StyledSlider,
    ControlledInput
} from '../inputsStyles';
import { Checkbox, Input } from '@material-ui/core';

export const FinancialModal = ({ title }) => {
    const { modalState, setModalState, activeContent } = useExpensesContainer();
    const { t } = useTranslation();
    const [currentInfo, setCurrentInfo] = useState(activeContent);

    const handleInput = (info, inputName) => {
        setCurrentInfo(curr => ({ ...curr, [inputName]: info}));
    }

    const handlePropertiesInput = (info, inputName, id) => {
        console.log(inputName);
        const newArray = [...currentInfo.Properties];
        newArray[id] = {
            ...currentInfo.Properties[id],
            [inputName]: info,
        };
        console.log(newArray[id]);
        setCurrentInfo(curr => ({...curr, Properties: newArray}));
    }

    const renderProperties = () => {
        return currentInfo.Properties?.map(prop => (
                <PropertiesField key={prop.id}>
                    <Checkbox />
                    <p>{prop.name}</p>
                    <StyledSlider
                        value={prop.percentage}
                        onChangeCommitted={(e, val) => handlePropertiesInput(Number(val), "percentage", prop.id)}
                    />
                    <ControlledInput
                        value={prop.percentage}
                        onChange={e => handlePropertiesInput(Number(e.target.value), 'percentage', prop.id)}
                        type="number"
                    />
                    <ControlledInput
                        defaultValue={prop.value} 
                        onChange={e => handlePropertiesInput(Number(e.target.value), e.target.name, prop.id)}
                        type="number"
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
                        defaultValue={currentInfo.data.description}
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
                    />
                    <UploadField 
                        label={t('receipt')}
                        docName={currentInfo.data.DocumentPicture !== '--' 
                            ? currentInfo.data.DocumentPicture 
                            : null}
                        name='Receipt'
                        buttonName={t('select')}
                        onChange={e => handleInput(e.target.value, e.target.name)}
                    />
                </div>
                <div style={{ width: '50%' }}>
                    <SelectField
                        label={t('payment')}
                        name='Payment'
                        value={currentInfo.data.Payment}
                        onChange={e => handleInput(e.target.value, e.target.name)}
                        InputLabelProps={{ shrink: true }}
                    >
                        <StyledMenuItem value="Cartão de crédito">Cartão de Crédito</StyledMenuItem>
                    </SelectField>
                    <SelectField
                        label={t('parcels')}
                        name='Parcela'
                        value={currentInfo.data.Parcela}
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
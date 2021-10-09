import { useState } from 'react';
import { ModalShell } from '../../../Modal/index';
import { useTranslation } from 'react-i18next';
import { useExpensesContainer } from '../../../../context/financesContext/expensesContext';
import { 
    InputFieldsWrapper, 
    PropertyDivisionWrapper, 
    InputField, 
    SelectField,
    StyledMenuItem,
 } from './styles';

export const ExpensesModal = ({ title }) => {
    const { modalState, setModalState, activeContent } = useExpensesContainer();
    const { t } = useTranslation();
    const [currentInfo, setCurrentInfo] = useState(activeContent);

    const handleInput = (info, inputName) => {
        console.log('info: ', info);
        console.log('input name: ', inputName);
        setCurrentInfo(curr => ({ ...curr, [inputName]: info}));
    }

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
                <div>
                    <InputField
                        label={t('description')}
                        name='Description'
                        defaultValue={currentInfo.Description}
                        onChange={e => handleInput(e.target.value, e.target.name)}
                    />
                    <InputField
                        label={t('totalValue')}
                        name='TotalValue'
                        type='number'
                        defaultValue={activeContent.TotalValue}
                        onChange={e => handleInput(e.target.value, e.target.name)}
                    />
                    <InputField 
                        label={t('expensesDate')}
                        name='DateDespesa'
                        type='date'
                        onChange={e => handleInput(e.target.value, e.target.name)}
                        InputLabelProps={{ shrink: true }}
                    />
                    <InputField 
                        label={t('receipt')}
                        type='file'
                        name='Receipt'
                        onChange={e => handleInput(e.target.value, e.target.name)}
                    />
                </div>
                <div>
                    <SelectField
                        label={t('payment')}
                        name='Payment'
                        value={activeContent.Payment}
                        onChange={e => handleInput(e.target.value, e.target.name)}
                    >
                        <StyledMenuItem value="Credit Card">Cartão de Crédito</StyledMenuItem>
                    </SelectField>
                    - Forma de Pagamento (dropdown)
                    - Parcelas (dropdown)
                    - Data da 1ª Parcela (date field)
                    - Plano de contas (dropdown)
                </div>
            </InputFieldsWrapper>
            <PropertyDivisionWrapper>
                Divisão entre propriedades
                nome prop - slider - campo % - valor equivalente (0,00)
            </PropertyDivisionWrapper>
        </ModalShell>
    );
}
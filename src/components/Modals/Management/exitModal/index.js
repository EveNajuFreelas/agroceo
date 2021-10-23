import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalShell } from '../../../Modal/index';
import { FuelTypeRadio } from '../managementStyles';
import { fuelTypes } from '../../../../utils/dataMock/mock';
import { InputFieldsWrapper, SelectField, InputField, StyledMenuItem, UploadField } from '../../inputsStyles';
import { useManagementContainer } from '../../../../context/managementContext';
import { 
    RadioGroup, 
    FormControl, 
    FormLabel, 
    InputLabel,
} from '@material-ui/core';

export const ExitManagementModal = ({ title }) => {
    const { t } = useTranslation();
    const { exitModalState, closeModals, activeContent } = useManagementContainer();
    
    const [whereWasFilled, setWhereWasFilled] = useState('atFarm');
    const [currentInfo, setCurrentInfo] = useState(activeContent);


    const handleInput = (info, inputName) => {
		setCurrentInfo(curr => ({ ...curr, [inputName]: info }));
	};

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
            <InputFieldsWrapper>
            <div style={{ width: '48%', display: 'flex', flexDirection: 'column' }}>
                <FormControl component='fieldset'>
                    <FormLabel htmlFor="filledUpTank">{t('whereWasFueled')}</FormLabel>
                    <RadioGroup 
                        row 
                        id="filledUpTank" 
                        name="filledUpTank" 
                        value={whereWasFilled}
                    >
                        <FuelTypeRadio
                            value="atFarm" 
                            label={t('atFarm')}
                            onClick={e => setWhereWasFilled(e.target.value)}
                        />{t('atFarm')}
                        <FuelTypeRadio
                            value="atCity" 
                            label={t('atCity')}
                            onClick={e => setWhereWasFilled(e.target.value)}
                        />{t('atCity')}
                    </RadioGroup>
                </FormControl>
                <FormLabel htmlFor="fuelType">{t('fuelType')}</FormLabel>
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
                    type='number'
                    defaultValue={currentInfo?.quantity}
                    onChange={e => handleInput(e.target.value, e.target.name)}
                />
                <div style={{ display: 'flex' }}>
                    <div>
                        <InputLabel htmlFor="fillDate">{t('fillDate')}</InputLabel>
                        <InputField
                            id="fillDate"
                            name="fillDate"
                            onChange={e => handleInput(e.target.value, e.target.name)}
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="fillHour">{t('fillHour')}</InputLabel>
                        <InputField
                            id="fillHour"
                            name="fillHour"
                            onChange={e => handleInput(e.target.value, e.target.name)}
                        />
                    </div>
                </div>
                {whereWasFilled === 'atFarm' && (
                    <>
                        <InputLabel htmlFor='whoFilledUp'>{t('whoFilledUp')}</InputLabel>
                        <SelectField
                            id='whoFilledUp'
                            name='whoFilledUp'
                            defaultValue={''}
                            onChange={e => handleInput(e.target.value, e.target.name)}
                        >
                            <StyledMenuItem value=''>{`${t('select')}...`}</StyledMenuItem>
                        </SelectField>
                    </>
                )}
            </div>
            <div style={{ width: '48%' }}>
                <InputLabel htmlFor="odometerHourmeterFile">{t('odometerHourmeterFile')}</InputLabel>
                <UploadField 
                    id='odometerHourmeterFile'
                    name='odometerHourmeterFile'
                    docName=''
                    buttonName={t('select')}
                    onChange={e => handleInput(e.target.value, e.target.name)}
                />
                <InputLabel htmlFor='odometerHourmeter'>{t('odometerHourmeter')}</InputLabel>
                <InputField 
                    id='odometerHourmeter'
                    name='odometerHourmeter'
                    onChange={e => handleInput(e.target.value, e.target.name)}
                />
                <InputLabel htmlFor='driver'>{t('driver')}</InputLabel>
                <SelectField
                    id='driver'
                    name='driver'
                    defaultValue={''}
                    onChange={e => handleInput(e.target.value, e.target.name)}
                >
                    <StyledMenuItem value=''>{`${t('select')}...`}</StyledMenuItem>
                </SelectField>
                <InputLabel htmlFor='vehicle'>{t('vehicle')}</InputLabel>
                <SelectField
                    id='vehicle'
                    name='vehicle'
                    defaultValue={''}
                    onChange={e => handleInput(e.target.value, e.target.name)}
                >
                    <StyledMenuItem value=''>{`${t('select')}...`}</StyledMenuItem>
                </SelectField>
            </div>
            </InputFieldsWrapper>
        </ModalShell>)
};
import { useState } from 'react';
import { useTranslation } from "react-i18next"
import { ModalShell } from "../../../../Modal"
import {
	InputField,
	InputLabelStyled,
    SelectField,
    StyledMenuItem
} from '../../../inputsStyles';
import { useModalsContainer } from '../../../../../context/modalsContext';
import { Checkbox, FormControl, FormControlLabel } from "@material-ui/core";

export const EditFunctionsModal = () => {
    const { t } = useTranslation();
    const { modalUtilizationState, closeUtilizationModal, activeContent } = useModalsContainer();
	const [currentInfo, setCurrentInfo] = useState(activeContent);

    const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const dayPeriods = ['morning', 'afternoon', 'night'];

    const handleInput = (info, inputName) => {
		setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
	};

    return (<ModalShell
        open={modalUtilizationState}
        handleClose={closeUtilizationModal}
        title={t('editFunction')}
        breadcrumbs={['management', 'manpower']}
        actionButtons={[
			{
				onClick: () => closeUtilizationModal(),
				title: 'cancel',
				color: 'secondary',
				variant: 'outlined',
			},
			{
				onClick: () => closeUtilizationModal(),
				title: 'save',
				color: 'primary',
				variant: 'contained',
			},
		]}
    >
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            <div style={{ width: '48%' }}>
                <InputLabelStyled htmlFor='functionName'>{t('functionName')}</InputLabelStyled>
                <InputField 
                    id='functionName'
                    name='functionName'
                    onChange={(e) =>
                        handleInput(e.target.value, e.target.name)
                    }
                    defaultValue={currentInfo?.functionName}
                />
            </div>
            <div style={{ width: '48%' }}>
                <InputLabelStyled htmlFor='obligationsList'>{t('obligationsList')}</InputLabelStyled>
                <SelectField 
                    id='obligationsList'
                    name='obligationsList'
                    onChange={(e) =>
                        handleInput(e.target.value, e.target.name)
                    }
                >
                    {currentInfo?.obligations?.map(o => (
                        <StyledMenuItem value={o}>{o}</StyledMenuItem>
                    ))}
                </SelectField>
            </div>
        </div>
        <div style={{ display: 'flex' }}>
            {weekdays.map(wd => (
                <FormControl style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <FormControlLabel
                            control={<Checkbox 
                                value={wd} 
                                onChange={(e) =>
                                    handleInput(e.target.value, e.target.name)
                                }
                                name={wd} 
                            />}
                            label={wd}
                        />
                    </div>
                    {dayPeriods.map(dp => (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                        value={`${wd} ${dp}`} 
                                        disabled 
                                        onChange={(e) =>
                                            handleInput(e.target.value, e.target.name)
                                        }
                                        name={dp}
                                    />}
                                label={dp}
                            />
                        </div>
                    ))}
                </FormControl>
            ))}
        </div>
    </ModalShell>);
}
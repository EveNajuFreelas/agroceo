import { useTranslation } from "react-i18next"
import { ModalShell } from "../../../../Modal"
import {
	InputFieldsWrapper,
	InputLabelRadio,
	FormControlStyled,
	InputField,
	InputLabelStyled,
	UploadField,
} from '../../../inputsStyles';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { useModalsContainer } from '../../../../../context/modalsContext';

export const EditEmployeeModal = () => {
    const { t } = useTranslation();
	const { modalEditState, closeEditModal, activeContent } = useModalsContainer();

    const handleInput = (info, inputName) => {
		//setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
	};

	console.log(activeContent);

    return (<ModalShell
		isSmall
        title={t('editEmployee')}
        breadcrumbs={['management', 'manpower']}
        open={modalEditState}
        handleClose={closeEditModal}
		actionButtons={[
			{
				onClick: () => closeEditModal(),
				title: 'cancel',
				color: 'secondary',
				variant: 'outlined',
			},
			{
				onClick: () => closeEditModal(),
				title: 'save',
				color: 'primary',
				variant: 'contained',
			},
		]}
    >
        <InputFieldsWrapper>
        <div
			style={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<FormControlStyled component="fieldset">
				<InputLabelRadio
					required
					component="legend"
					htmlFor="typeContract"
				>
					{t('typeContract')}
				</InputLabelRadio>
				<RadioGroup row id="typeContract" name="typeContract" defaultValue={activeContent?.contract}>
					<FormControlLabel
						value="Temporário"
						label={t('temporary')}
						control={<Radio />}
					/>
					<FormControlLabel
						value="Permanente"
						label={t('permanent')}
						control={<Radio />}
					/>
				</RadioGroup>
			</FormControlStyled>

			<InputLabelStyled required htmlFor="fullName">
				{t('fullName')}
			</InputLabelStyled>
			<InputField
				id="fullName"
				name="fullName"
				onChange={(e) =>
					handleInput(e.target.value, e.target.name)
				}
				placeholder={t('typeSomething')}
				defaultValue={`${activeContent?.name} ${activeContent?.surName}`}
			/>

			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<div style={{ width: '48%' }}>
					<InputLabelStyled htmlFor="nickname">
						{t('nickname')}
					</InputLabelStyled>
					<InputField
						id="nickname"
						name="nickname"
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
					/>
				</div>
				<div style={{ width: '48%' }}>
					<InputLabelStyled htmlFor="phone">
						{t('phone')}
					</InputLabelStyled>
					<InputField
						id="phone"
						name="phone"
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						defaultValue={activeContent?.phone}
					/>
				</div>
			</div>
			<InputLabelStyled htmlFor="employeePhoto">{t('employeePhoto')}</InputLabelStyled>
			<UploadField id='employeePhoto' buttonName={t('select')} />
        </div>
        </InputFieldsWrapper>
    </ModalShell>);
}
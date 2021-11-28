import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalShell } from '../../../../Modal/index';
import {
	InputFieldsWrapper,
	InputLabelRadio,
	FormControlStyled,
	SelectField,
	InputField,
	StyledMenuItem,
	InputLabelStyled,
	UploadField,
} from '../../../inputsStyles';
import { fuelTypes } from '../../../../../utils/dataMock/mock';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { useModalsContainer } from '../../../../../context/modalsContext';
import { ContainerSelectCountry } from '../../../Profile/styles';
import { iconList } from '../../../../../assets/Icons/icon-list';
import InputMask from 'react-input-mask';
import ItemSelect from '../../../SelectField';

export const EmployeesModal = () => {
	const { t } = useTranslation();
	const { modalState, closeModals, activeContent } = useModalsContainer();
	const [currentInfo, setCurrentInfo] = useState(activeContent);

	const countries = [
		{
			number: 55,
			icon: 'Brasil',
		},
		{
			number: 1,
			icon: 'Usa',
		},
		{
			number: 61,
			icon: 'Australia',
		},
	];

	const handleInput = (info, inputName) => {
		setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
	};

	return (
		<ModalShell
			isSmall
			open={modalState}
			handleClose={closeModals}
			title={t('registerEmployee')}
			breadcrumbs={['management', 'manpower']}
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
						<RadioGroup row id="typeContract" name="typeContract">
							<FormControlLabel
								value="temporary"
								label={t('temporary')}
								control={<Radio />}
							/>
							<FormControlLabel
								value="permanent"
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
					/>

					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<div style={{ width: '52%' }}>
							<InputLabelStyled htmlFor="nickname">
								{t('nickname')}
							</InputLabelStyled>
							<InputField
								id="nickname"
								name="nickname"
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
								placeholder={t('typeSomething')}
							/>
						</div>
						<div style={{ width: '46%' }}>
							<InputLabelStyled htmlFor="cpf">
								CPF
							</InputLabelStyled>
							<InputMask
								mask="999.999.999-99"
								maskChar=" "
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
							>
								{() => (
									<InputField
										id="cpf"
										name="cpf"
										placeholder="000.000.000-00"
									/>
								)}
							</InputMask>
						</div>
					</div>

					<InputLabelStyled htmlFor="employeePhoto">
						{t('employeePhoto')}
					</InputLabelStyled>
					<UploadField
						id="employeePhoto"
						docName={
							currentInfo?.DocumentPicture !== '--'
								? currentInfo?.DocumentPicture
								: null
						}
						name="employeePhoto"
						buttonName={t('select')}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						accept="image/*"
					/>

					<InputLabelStyled required htmlFor="occupation">
						{t('occupation')}
					</InputLabelStyled>
					<SelectField
						id="occupation"
						name="occupation"
						defaultValue={currentInfo?.fuelType || ''}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
					>
						<StyledMenuItem>
							<ItemSelect value="" />
						</StyledMenuItem>
						{fuelTypes.map((ft) => (
							<StyledMenuItem value={ft.value}>
								{t(ft.name)}
							</StyledMenuItem>
						))}
					</SelectField>

					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<div style={{ width: '20%' }}>
							<InputLabelStyled required htmlFor="country">
								{t('country')}
							</InputLabelStyled>
							<SelectField
								id="country"
								name="country"
								defaultValue={currentInfo?.country || 'Brasil'}
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
							>
								{countries.map((country) => (
									<StyledMenuItem value={country.icon}>
										<ContainerSelectCountry>
											<img
												src={iconList[country.icon]}
												alt={country.icon}
											/>
											<span>{country.icon}</span>
										</ContainerSelectCountry>
									</StyledMenuItem>
								))}
							</SelectField>
						</div>
						<div style={{ width: '78%' }}>
							<InputLabelStyled required htmlFor="telephone">
								{t('telephone')}
							</InputLabelStyled>
							<InputMask
								mask="(99) 9 9999-9999"
								maskChar=" "
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
							>
								{() => (
									<InputField
										id="telephone"
										name="telephone"
										helperText={t('justNumbers')}
										placeholder="(00) 0 0000-0000"
									/>
								)}
							</InputMask>
						</div>
					</div>
				</div>
			</InputFieldsWrapper>
		</ModalShell>
	);
};

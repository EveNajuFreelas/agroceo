import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalShell } from '../../../../Modal/index';
import { FuelTypeRadio } from '../../managementStyles';
import { fuelTypes } from '../../../../../utils/dataMock/mock';
import {
	InputFieldsWrapper,
	SelectField,
	InputField,
	StyledMenuItem,
	UploadField,
	InputLabelStyled,
} from '../../../inputsStyles';
import { useManagementContainer } from '../../../../../context/managementContext';
import {
	RadioGroup,
	FormControl,
	InputLabel,
	FormControlLabel,
	Radio,
	FormLabel,
} from '@material-ui/core';
import { useModalsContainer } from '../../../../../context/modalsContext';

export const RegisterModal = ({ title }) => {
	const { t } = useTranslation();
	const { openModal, closeModals } = useModalsContainer();

	const [whereWasFilled, setWhereWasFilled] = useState('atFarm');

	const handleInput = (info, inputName) => {
		console.log(inputName);
		//setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
	};

	return (
		<ModalShell
			open={openModal}
			handleClose={closeModals}
			title={t('registerVehicle')}
			breadcrumbs={['management', 'vehicles']}
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
						width: '48%',
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					{/* <FormControl component="fieldset">
						<InputLabel htmlFor="filledUpTank">
							{t('whereWasFueled')}
						</InputLabel>
						<RadioGroup
							row
							id="filledUpTank"
							name="filledUpTank"
							value={whereWasFilled}
						>
							<FuelTypeRadio
								value="atFarm"
								label={t('atFarm')}
								onClick={(e) =>
									setWhereWasFilled(e.target.value)
								}
							/>
							{t('atFarm')}
							<FuelTypeRadio
								value="atCity"
								label={t('atCity')}
								onClick={(e) =>
									setWhereWasFilled(e.target.value)
								}
							/>
							{t('atCity')}
						</RadioGroup>
					</FormControl> */}
					<InputLabelStyled htmlFor="description">
						{t('description')}
					</InputLabelStyled>
					<InputField
						id="description"
						name="description"
						type="text"
						//defaultValue={currentInfo?.quantity}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						placeholder={t('typeSomething')}
					/>
					<InputLabelStyled htmlFor="brand">
						{t('brand')}
					</InputLabelStyled>
					<SelectField
						id="brand"
						name="brand"
						//defaultValue={currentInfo?.fuelType || ''}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
					>
						<StyledMenuItem value="">{`${t(
							'select'
						)}...`}</StyledMenuItem>
						{fuelTypes.map((ft) => (
							<StyledMenuItem value={ft.value}>
								{t(ft.name)}
							</StyledMenuItem>
						))}
					</SelectField>
					<InputLabelStyled htmlFor="model">
						{t('model')}
					</InputLabelStyled>
					<SelectField
						id="model"
						name="model"
						//defaultValue={currentInfo?.fuelType || ''}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
					>
						<StyledMenuItem value="">{`${t(
							'select'
						)}...`}</StyledMenuItem>
						{fuelTypes.map((ft) => (
							<StyledMenuItem value={ft.value}>
								{t(ft.name)}
							</StyledMenuItem>
						))}
					</SelectField>
					<InputLabelStyled htmlFor="vehicleFile">
						{t('vehicleFile')}
					</InputLabelStyled>
					<UploadField
						id="vehicleFile"
						// docName={
						// 	currentInfo?.DocumentPicture !== '--'
						// 		? currentInfo?.DocumentPicture
						// 		: null
						// }
						name="vehicleFile"
						buttonName={t('select')}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						//placeholder={t('sendFile')}
					/>
					<div style={{ display: 'flex', gap: 20 }}>
						<div>
							<InputLabelStyled htmlFor="color">
								{t('color')}
							</InputLabelStyled>
							<InputField
								id="color"
								name="color"
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
								helperText={t('justNumbers')}
								placeholder={t('typeSomething')}
							/>
						</div>
						<div>
							<InputLabelStyled htmlFor="manufacture">
								{t('manufacture')}
							</InputLabelStyled>
							<InputField
								id="manufactureYear"
								name="manufactureYear"
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
								helperText={t('justNumbers')}
								placeholder="0000/00"
							/>
						</div>
					</div>
				</div>
				<div style={{ width: '48%' }}>
					<div style={{ display: 'flex', gap: 20 }}>
						<div>
							<InputLabelStyled htmlFor="board">
								{t('board')}
							</InputLabelStyled>
							<InputField
								id="board"
								name="board"
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
								placeholder={t('typeSomething')}
							/>
						</div>
						<div>
							<InputLabelStyled htmlFor="yearAcquisition">
								{t('yearAcquisition')}
							</InputLabelStyled>
							<InputField
								id="yearAcquisition"
								name="yearAcquisition"
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
								placeholder="DD/MM/AAAA"
							/>
						</div>
					</div>
					<div style={{ display: 'flex', gap: 20 }}>
						<div>
							<InputLabelStyled htmlFor="currentOdometer">
								{t('currentOdometer')}
							</InputLabelStyled>
							<InputField
								id="currentOdometer"
								name="currentOdometer"
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
								placeholder="00000000"
							/>
						</div>
						<div>
							<InputLabelStyled htmlFor="reviewEveryKm">
								{t('reviewEveryKm')}
							</InputLabelStyled>
							<InputField
								id="reviewEveryKm"
								name="reviewEveryKm"
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
								placeholder="00000000"
							/>
						</div>
					</div>
					<InputLabelStyled htmlFor="odometerFile">
						{t('odometerFile')}
					</InputLabelStyled>
					<UploadField
						id="odometerFile"
						name="odometerFile"
						docName=""
						buttonName={t('select')}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
					/>
					<div style={{ display: 'flex', gap: 20 }}>
						<div>
							<InputLabelStyled htmlFor="lastRevisionOdometer">
								{t('lastRevisionOdometer')}
							</InputLabelStyled>
							<InputField
								id="lastRevisionOdometer"
								name="lastRevisionOdometer"
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
								placeholder="00000000"
							/>
						</div>
						<div>
							<InputLabelStyled htmlFor="lastRevision">
								{t('lastRevision')}
							</InputLabelStyled>
							<InputField
								id="lastRevision"
								name="lastRevision"
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
								placeholder="00000000"
							/>
						</div>
					</div>
					<FormControl component="fieldset">
						<FormLabel component="legend">{t('owner')}</FormLabel>
						<RadioGroup row id="ownerVehicle" name="filledUpTank">
							<FormControlLabel
								value="farm"
								control={<Radio />}
								label={t('farm')}
							/>
							<FormControlLabel
								value="subcontractors"
								control={<Radio />}
								label={t('subcontractors')}
							/>
						</RadioGroup>
					</FormControl>
				</div>
			</InputFieldsWrapper>
		</ModalShell>
	);
};

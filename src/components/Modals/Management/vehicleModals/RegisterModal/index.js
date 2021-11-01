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
	InputLabelRadio,
	FormControlStyled,
} from '../../../inputsStyles';
import { useManagementContainer } from '../../../../../context/managementContext';
import {
	RadioGroup,
	FormControlLabel,
	Radio,
	Divider,
} from '@material-ui/core';
import { useModalsContainer } from '../../../../../context/modalsContext';

export const RegisterModalVehicle = ({
	title,
	breadcrumbs,
	description,
	odometerHourmeter,
}) => {
	const { t } = useTranslation();
	const { modalState, closeModals } = useModalsContainer();

	const handleInput = (info, inputName) => {
		console.log(inputName);
		//setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
	};

	const groupBoardYearField = () => {
		return (
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div style={{ width: '48%' }}>
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
				<div style={{ width: '48%' }}>
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
		);
	};

	return (
		<ModalShell
			open={modalState}
			handleClose={closeModals}
			title={title}
			breadcrumbs={breadcrumbs}
			actionButtons={[
				{
					onClick: () => closeModals(),
					title: 'cancel',
					color: 'secondary',
					variant: 'outlined',
				},
				{
					onClick: () => closeModals(),
					title: 'continue',
					color: 'primary',
					variant: 'outlined',
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
					{description && (
						<>
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
						</>
					)}
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
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<div style={{ width: '48%' }}>
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
						<div style={{ width: '48%' }}>
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
					{!description && groupBoardYearField()}
				</div>

				<Divider orientation="vertical" flexItem component="div" />

				<div style={{ width: '48%' }}>
					{description && groupBoardYearField()}
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<div style={{ width: '48%' }}>
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
						<div style={{ width: '48%' }}>
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
					<InputLabelStyled htmlFor="uploadFile">
						{t(`${odometerHourmeter}File`)}
					</InputLabelStyled>
					<UploadField
						id="uploadFile"
						name="uploadFile"
						docName=""
						buttonName={t('select')}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
					/>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<div style={{ width: '48%' }}>
							<InputLabelStyled htmlFor="lastRevision">
								{t(`${odometerHourmeter}LastRevision`)}
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
						<div style={{ width: '48%' }}>
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
					<FormControlStyled component="fieldset">
						<InputLabelRadio component="legend">
							{t('owner')}
						</InputLabelRadio>
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
					</FormControlStyled>
				</div>
			</InputFieldsWrapper>
		</ModalShell>
	);
};

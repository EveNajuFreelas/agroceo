import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalShell } from '../../../../Modal/index';
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
import {
	RadioGroup,
	FormControlLabel,
	Radio,
	Divider,
	InputAdornment,
} from '@material-ui/core';
import { useModalsContainer } from '../../../../../context/modalsContext';
import { iconList } from '../../../../../assets/Icons/icon-list';

export const RegisterModalVehicle = ({
	title,
	breadcrumbs,
	description,
	odometerHourmeter,
}) => {
	const { t } = useTranslation();
	const { modalState, closeModals, activeContent } = useModalsContainer();
	const [currentInfo, setCurrentInfo] = useState(activeContent);

	const handleInput = (info, inputName) => {
		setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
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
						defaultValue={currentInfo?.board}
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
						defaultValue={currentInfo?.yearAcquisition}
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
								defaultValue={currentInfo?.description}
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
						defaultValue={currentInfo?.brand || ''}
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
						defaultValue={currentInfo?.model || ''}
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
								defaultValue={currentInfo?.color}
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
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
								type="number"
								defaultValue={currentInfo?.manufactureYear}
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
								defaultValue={currentInfo?.currentOdometer}
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
								placeholder="00000000"
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<img
												alt="icon money"
												src={iconList.odometerInput}
											/>
										</InputAdornment>
									),
								}}
							/>
						</div>
						<div style={{ width: '48%' }}>
							<InputLabelStyled htmlFor="reviewEveryKm">
								{t('reviewEveryKm')}
							</InputLabelStyled>
							<InputField
								id="reviewEveryKm"
								name="reviewEveryKm"
								defaultValue={currentInfo?.reviewEveryKm}
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
								placeholder="00000000"
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<img
												alt="icon money"
												src={iconList.odometerInput}
											/>
										</InputAdornment>
									),
								}}
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
								defaultValue={currentInfo?.lastRevision}
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
								placeholder="00000000"
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<img
												alt="icon money"
												src={iconList.odometerInput}
											/>
										</InputAdornment>
									),
								}}
							/>
						</div>
						<div style={{ width: '48%' }}>
							<InputLabelStyled htmlFor="lastRevision">
								{t('lastRevision')}
							</InputLabelStyled>
							<InputField
								id="lastRevision"
								name="lastRevision"
								defaultValue={currentInfo?.yearAcquisition}
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
								placeholder="00000000"
							/>
						</div>
					</div>
					<FormControlStyled component="fieldset">
						<InputLabelRadio component="legend" htmlFor="ownerVehicle">
							{t('owner')}
						</InputLabelRadio>
						<RadioGroup 
							row 
							id="ownerVehicle" 
							name="ownerVehicle" 
							defaultValue={currentInfo?.ownerVehicle}
						>
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

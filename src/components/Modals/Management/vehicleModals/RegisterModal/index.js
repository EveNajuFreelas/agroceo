import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalShell } from '../../../../Modal/index';
import { fuelTypes } from '../../../../../utils/dataMock/mock';
import {
	InputFieldsWrapper,
	SelectField,
	InputField,
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
	MenuItem,
} from '@material-ui/core';
import { useModalsContainer } from '../../../../../context/modalsContext';
import { iconList } from '../../../../../assets/Icons/icon-list';
import ItemSelect from '../../../SelectField';
import InputMask from 'react-input-mask';
import DateInput from '../../inputs/dateInput';

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
					<InputLabelStyled required htmlFor="board">
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
					<InputLabelStyled required htmlFor="yearAcquisition">
						{t('yearAcquisition')}
					</InputLabelStyled>
					<InputMask
						mask="9999"
						maskChar=" "
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
					>
						{() => (
							<InputField
								id="yearAcquisition"
								name="yearAcquisition"
								defaultValue={currentInfo?.yearAcquisition}
								placeholder="0000"
							/>
						)}
					</InputMask>
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
						width: '45%',
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					{description && (
						<>
							<InputLabelStyled required htmlFor="description">
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
					<InputLabelStyled required htmlFor="brand">
						{t('brand')}
					</InputLabelStyled>
					<SelectField
						id="brand"
						name="brand"
						defaultValue={'' || currentInfo?.brand}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
					>
						<MenuItem disabled>
							<ItemSelect value="" />
						</MenuItem>
						{fuelTypes.map((ft) => (
							<MenuItem value={ft.value}>{t(ft.name)}</MenuItem>
						))}
					</SelectField>
					<InputLabelStyled required htmlFor="model">
						{t('model')}
					</InputLabelStyled>
					<SelectField
						id="model"
						name="model"
						defaultValue={'' || currentInfo?.model}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
					>
						<MenuItem disabled>
							<ItemSelect value="" />
						</MenuItem>
						{fuelTypes.map((ft) => (
							<MenuItem value={ft.value}>{t(ft.name)}</MenuItem>
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
						accept="image/*"
						docName={currentInfo?.vehicleFile?.split('\\').pop()}
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
							<InputLabelStyled required htmlFor="color">
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
							<InputLabelStyled required htmlFor="manufacture">
								{t('manufacture')}
							</InputLabelStyled>
							<InputMask
								mask="9999/99"
								maskChar=" "
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
							>
								{() => (
									<InputField
										id="manufactureYear"
										name="manufactureYear"
										defaultValue={
											currentInfo?.manufactureYear
										}
										helperText={t('justNumbers')}
										placeholder="0000/00"
									/>
								)}
							</InputMask>
						</div>
					</div>
					{!description && groupBoardYearField()}
				</div>

				<Divider orientation="vertical" flexItem component="div" />

				<div style={{ width: '52%' }}>
					{description && groupBoardYearField()}
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<div style={{ width: '48%' }}>
							<InputLabelStyled
								required
								htmlFor="currentOdometer"
							>
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
							<InputLabelStyled required htmlFor="reviewEveryKm">
								{t('reviewEveryKm')}
							</InputLabelStyled>
							<InputField
								required
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
					<InputLabelStyled htmlFor="odometerFile">
						{t(`${odometerHourmeter}File`)}
					</InputLabelStyled>
					<UploadField
						id="odometerFile"
						name="odometerFile"
						accept="image/*"
						docName={currentInfo?.odometerFile?.split('\\').pop()}
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
							<InputLabelStyled required htmlFor="lastRevision">
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
							<InputLabelStyled required htmlFor="lastRevision">
								{t('lastRevision')}
							</InputLabelStyled>
							<DateInput
								name="lastRevision"
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
							/>
						</div>
					</div>
					<FormControlStyled component="fieldset">
						<InputLabelRadio
							component="legend"
							htmlFor="ownerVehicle"
						>
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

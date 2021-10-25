import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalShell } from '../../../Modal/index';
import { FuelTypeRadio } from '../managementStyles';
import { fuelTypes } from '../../../../utils/dataMock/mock';
import {
	InputFieldsWrapper,
	SelectField,
	InputField,
	StyledMenuItem,
	UploadField,
	InputLabelStyled,
} from '../../inputsStyles';
import { useManagementContainer } from '../../../../context/managementContext';
import { RadioGroup, FormControl, InputLabel } from '@material-ui/core';

export const ExitManagementModal = ({ title }) => {
	const { t } = useTranslation();
	const { exitModalState, closeModals, activeContent } =
		useManagementContainer();

	const [whereWasFilled, setWhereWasFilled] = useState('atFarm');
	const [currentInfo, setCurrentInfo] = useState(activeContent);

	const handleInput = (info, inputName) => {
		setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
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
					<FormControl component="fieldset">
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
					</FormControl>
					<InputLabelStyled htmlFor="fuelType">
						{t('fuelType')}
					</InputLabelStyled>
					<SelectField
						id="fuelType"
						name="fuelType"
						defaultValue={currentInfo?.fuelType || ''}
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
					<InputLabelStyled htmlFor="quantity">
						{t('quantity')}
					</InputLabelStyled>
					<InputField
						id="quantity"
						name="quantity"
						type="number"
						defaultValue={currentInfo?.quantity}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						helperText={t('justNumbers')}
						placeholder="0,00"
					/>
					<div style={{ display: 'flex', gap: 20 }}>
						<div>
							<InputLabelStyled htmlFor="fillDate">
								{t('fillDate')}
							</InputLabelStyled>
							<InputField
								id="fillDate"
								name="fillDate"
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
								helperText={t('justNumbers')}
							/>
						</div>
						<div>
							<InputLabelStyled htmlFor="fillHour">
								{t('fillHour')}
							</InputLabelStyled>
							<InputField
								id="fillHour"
								name="fillHour"
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
								helperText={t('justNumbers')}
							/>
						</div>
					</div>
					{whereWasFilled === 'atFarm' && (
						<>
							<InputLabelStyled htmlFor="whoFilledUp">
								{t('whoFilledUp')}
							</InputLabelStyled>
							<SelectField
								id="whoFilledUp"
								name="whoFilledUp"
								defaultValue={''}
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
							>
								<StyledMenuItem value="">{`${t(
									'select'
								)}...`}</StyledMenuItem>
							</SelectField>
						</>
					)}
				</div>
				<div style={{ width: '48%' }}>
					<InputLabelStyled htmlFor="odometerHourmeterFile">
						{t('odometerHourmeterFile')}
					</InputLabelStyled>
					<UploadField
						id="odometerHourmeterFile"
						name="odometerHourmeterFile"
						docName=""
						buttonName={t('select')}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
					/>
					<InputLabelStyled htmlFor="odometerHourmeter">
						{t('odometerHourmeter')}
					</InputLabelStyled>
					<InputField
						id="odometerHourmeter"
						name="odometerHourmeter"
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						helperText={t('justNumbers')}
						placeholder="Selecione"
					/>
					<InputLabelStyled htmlFor="driver">
						{t('driver')}
					</InputLabelStyled>
					<SelectField
						id="driver"
						name="driver"
						defaultValue={''}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
					>
						<StyledMenuItem value="">{`${t(
							'select'
						)}...`}</StyledMenuItem>
					</SelectField>
					<InputLabelStyled htmlFor="vehicle">
						{t('vehicle')}
					</InputLabelStyled>
					<SelectField
						id="vehicle"
						name="vehicle"
						defaultValue={''}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
					>
						<StyledMenuItem value="">{`${t(
							'select'
						)}...`}</StyledMenuItem>
					</SelectField>
				</div>
			</InputFieldsWrapper>
		</ModalShell>
	);
};

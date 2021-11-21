import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalShell } from '../../../../Modal/index';
import { FuelTypeRadio, FuelLabelRadio } from '../../managementStyles';
import { fuelTypes } from '../../../../../utils/dataMock/mock';
import {
	InputFieldsWrapper,
	SelectField,
	InputField,
	StyledMenuItem,
	UploadField,
	InputLabelStyled,
	FormControlStyled,
	InputLabelRadio,
} from '../../../inputsStyles';
import { useManagementContainer } from '../../../../../context/managementContext';
import { RadioGroup, Divider } from '@material-ui/core';
import { employeesSelect } from '../../../../../utils/dataMock/selectMock';
import { iconList } from '../../../../../assets/Icons/icon-list';
import InputMask from 'react-input-mask';
import ItemSelect from '../../../SelectField';

export const ExitManagementModal = () => {
	const { t } = useTranslation();
	const { exitModalState, closeModals, activeContent } =
		useManagementContainer();

	const [whereWasFilled, setWhereWasFilled] = useState('atFarm');
	const [currentInfo, setCurrentInfo] = useState(activeContent);
	const [employeeSelected, setEmployeeSelected] = useState();

	const handleEmployeeSelected = (event) => {
		setEmployeeSelected(event.target.value);
	};

	const handleInput = (info, inputName) => {
		setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
	};

	return (
		<ModalShell
			open={exitModalState}
			handleClose={closeModals}
			title={t('checkout')}
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
					<FormControlStyled component="fieldset">
						<InputLabelRadio htmlFor="filledUpTank">
							{t('whereWasFueled')}
						</InputLabelRadio>
						<RadioGroup
							row
							id="filledUpTank"
							name="filledUpTank"
							value={whereWasFilled}
						>
							<FuelTypeRadio
								type="radio"
								name="filledUpTank"
								id="atFarm"
								value="atFarm"
								onClick={(e) =>
									setWhereWasFilled(e.target.value)
								}
							/>
							<FuelLabelRadio for="atFarm">
								<img src={iconList.manage} />
								{t('atFarm')}
							</FuelLabelRadio>

							<FuelTypeRadio
								type="radio"
								name="filledUpTank"
								id="atCity"
								value="atCity"
								onClick={(e) =>
									setWhereWasFilled(e.target.value)
								}
							/>
							<FuelLabelRadio for="atCity">
								<img src={iconList.gasStation} />
								{t('atCity')}
							</FuelLabelRadio>
						</RadioGroup>
					</FormControlStyled>
					<InputLabelStyled required htmlFor="fuelType">
						{t('fuelType')}
					</InputLabelStyled>
					<SelectField
						id="fuelType"
						name="fuelType"
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
					<InputLabelStyled required htmlFor="quantity">
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
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<div style={{ width: '48%' }}>
							<InputLabelStyled required htmlFor="fillDate">
								{t('fillDate')}
							</InputLabelStyled>
							<InputMask
								mask="99 / 99 / 9999"
								maskChar=" "
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
							>
								{() => (
									<InputField
										id="fillDate"
										name="fillDate"
										helperText={t('justNumbers')}
										placeholder="DD/MM/AAAA"
									/>
								)}
							</InputMask>
						</div>
						<div style={{ width: '48%' }}>
							<InputLabelStyled required htmlFor="fillHour">
								{t('fillHour')}
							</InputLabelStyled>
							<InputMask
								mask="99 : 99"
								maskPlaceholder="00 : 00"
								maskChar=" "
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
							>
								{() => (
									<InputField
										id="fillHour"
										name="fillHour"
										helperText={t('justNumbers')}
										placeholder="00:00"
									/>
								)}
							</InputMask>
						</div>
					</div>
					{whereWasFilled === 'atFarm' && (
						<>
							<InputLabelStyled required htmlFor="whoFilledUp">
								{t('whoFilledUp')}
							</InputLabelStyled>
							<SelectField
								id="whoFilledUp"
								name="whoFilledUp"
								value={employeeSelected}
								onChange={handleEmployeeSelected}
							>
								<StyledMenuItem>
									<ItemSelect value="" />
								</StyledMenuItem>
								{employeesSelect.map((employee) => (
									<StyledMenuItem value={employee}>
										{t(employee.name)}
									</StyledMenuItem>
								))}
							</SelectField>
						</>
					)}
				</div>

				<Divider orientation="vertical" flexItem component="div" />

				<div style={{ width: '48%' }}>
					<InputLabelStyled htmlFor="odometerHourmeterFile">
						{t('odometerHourmeterFile')}
					</InputLabelStyled>
					<UploadField
						id="odometerHourmeterFile"
						name="odometerHourmeterFile"
						buttonName={t('select')}
						accept="image/*"
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						docName={currentInfo?.odometerHourmeterFile
							?.split('\\')
							.pop()}
					/>
					<InputLabelStyled required htmlFor="odometerHourmeter">
						{t('odometerHourmeter')}
					</InputLabelStyled>
					<InputField
						id="odometerHourmeter"
						name="odometerHourmeter"
						type="number"
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						helperText={t('justNumbers')}
						placeholder="Selecione"
					/>
					<InputLabelStyled required htmlFor="driver">
						{t('driver')}
					</InputLabelStyled>
					<SelectField
						id="driver"
						name="driver"
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
					<InputLabelStyled required htmlFor="vehicle">
						{t('vehicle')}
					</InputLabelStyled>
					<SelectField
						id="vehicle"
						name="vehicle"
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
				</div>
			</InputFieldsWrapper>
		</ModalShell>
	);
};

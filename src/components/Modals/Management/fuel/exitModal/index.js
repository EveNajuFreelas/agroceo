import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalShell } from '../../../../Modal/index';
import { FuelTypeRadio, FuelLabelRadio } from '../../managementStyles';
import { fuelTypes } from '../../../../../utils/dataMock/mock';
import {
	InputFieldsWrapper,
	SelectField,
	InputField,
	UploadField,
	InputLabelStyled,
	FormControlStyled,
	InputLabelRadio,
} from '../../../inputsStyles';
import { useManagementContainer } from '../../../../../context/managementContext';
import { RadioGroup, Divider, MenuItem } from '@material-ui/core';
import { employeesSelect } from '../../../../../utils/dataMock/selectMock';
import { iconList } from '../../../../../assets/Icons/icon-list';
import ItemSelect from '../../../SelectField';
import HourInput from '../../inputs/hourInput';
import DateInput from '../../inputs/dateInput';

export const ExitManagementModal = () => {
	const { t } = useTranslation();
	const { exitModalState, closeModals, activeContent } =
		useManagementContainer();

	const [currentInfo, setCurrentInfo] = useState(activeContent);

	useEffect(() => {
		setCurrentInfo(activeContent);
	}, [activeContent])

	const handleInput = (info, inputName) => {
		console.log('name: ', inputName, ', info: ', info);
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
						<InputLabelRadio htmlFor="whereWasFilled">
							{t('whereWasFueled')}
						</InputLabelRadio>
						<RadioGroup
							row
							id="whereWasFilled"
							defaultValue={currentInfo?.local}
							defaultChecked={currentInfo?.local}
						>
							<FuelTypeRadio
								type="radio"
								name="local"
								id="atFarm"
								value="Na fazenda"
								onClick={(e) => handleInput(e.target.value, e.target.name)}
							/>
							<FuelLabelRadio htmlFor="atFarm">
								<img src={iconList.manage} alt="" />
								{t('atFarm')}
							</FuelLabelRadio>

							<FuelTypeRadio
								type="radio"
								name="local"
								id="atCity"
								value="Na cidade"
								onClick={(e) => handleInput(e.target.value, e.target.name)}
							/>
							<FuelLabelRadio for="atCity">
								<img src={iconList.gasStation} alt="" />
								{t('atCity')}
							</FuelLabelRadio>
						</RadioGroup>
					</FormControlStyled>
					<InputLabelStyled required htmlFor="fuelType">
						{t('fuelType')}
					</InputLabelStyled>
					<SelectField
						id="fuelType"
						name="description"
						defaultValue={currentInfo?.description}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
					>
						<MenuItem disabled>
							<ItemSelect value="" />
						</MenuItem>
						{fuelTypes.map((ft) => (
							<MenuItem value={t(ft.name)}>{t(ft.name)}</MenuItem>
						))}
					</SelectField>
					<InputLabelStyled required htmlFor="quantity">
						{t('quantity')}
					</InputLabelStyled>
					<InputField
						id="quantity"
						name="quantidade"
						type="number"
						defaultValue={currentInfo?.quantidade?.replace(/[^0-9]/g,'')}
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
							<DateInput
								name="fillDate"
								defaultValue={currentInfo?.data?.split('-')[0].trim()}
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
							/>
						</div>
						<div style={{ width: '48%' }}>
							<InputLabelStyled required htmlFor="fillHour">
								{t('fillHour')}
							</InputLabelStyled>
							<HourInput
								name="fillHour"
								defaultValue={currentInfo?.data?.split('-')[1].trim()}
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
							/>
						</div>
					</div>
					{currentInfo?.local === "Na fazenda" && (
						<>
							<InputLabelStyled required htmlFor="whoFilledUp">
								{t('whoFilledUp')}
							</InputLabelStyled>
							<SelectField
								id="whoFilledUp"
								name="fornecedor"
								value={currentInfo?.fornecedor}
								onChange={e => handleInput(e.target.value, e.target.name)}
							>
								<MenuItem disabled>
									<ItemSelect value="" />
								</MenuItem>
								{employeesSelect.map((employee) => (
									<MenuItem value={employee}>
										{t(employee.name)}
									</MenuItem>
								))}
								<MenuItem value={currentInfo?.fornecedor}>
									{currentInfo?.fornecedor}
								</MenuItem>
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
						name="motorista"
						defaultValue={currentInfo?.motorista}
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
						<MenuItem value={currentInfo?.motorista}>
							{currentInfo?.motorista}
						</MenuItem>
					</SelectField>
					<InputLabelStyled required htmlFor="vehicle">
						{t('vehicle')}
					</InputLabelStyled>
					<SelectField
						id="vehicle"
						name="vehicle"
						defaultValue={currentInfo?.veiculo}
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
						<MenuItem value={currentInfo?.veiculo}>
							{currentInfo?.veiculo}
						</MenuItem>
					</SelectField>
				</div>
			</InputFieldsWrapper>
		</ModalShell>
	);
};

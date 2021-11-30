import { useEffect, useState } from 'react';
import { ModalShell } from '../../Modal/index';
import { useTranslation } from 'react-i18next';
import { useExpensesContainer } from '../../../context/financesContext/expensesContext';
import {
	PropertyDivisionWrapper,
	PropertiesField,
	Subtitle,
	ParcelButton,
} from './styles';
import {
	InputFieldsWrapper,
	InputField,
	SelectField,
	UploadField,
	StyledSlider,
	ControlledInput,
	InputLabelStyled,
} from '../inputsStyles';
import {
	Checkbox,
	Divider,
	InputAdornment,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	MenuItem,
} from '@material-ui/core';
import { timesParcels } from '../../../utils/dataMock/mock.js';
import { iconList } from '../../../assets/Icons/icon-list';
import ReactInputMask from 'react-input-mask';
import DateInput from '../Management/inputs/dateInput';
import { paymentList } from '../../../utils/dataMock/selectMock';
import ItemSelect from '../SelectField';

export const FinancialModal = ({ title, breadcrumbs }) => {
	const { modalState, setModalState, activeContent } = useExpensesContainer();
	const { t } = useTranslation();
	const [currentInfo, setCurrentInfo] = useState(activeContent);
	const [editParcelModal, setEditParcelModal] = useState(false);
	const [currentParcel, setCurrentParcel] = useState();

	useEffect(() => {
		setCurrentInfo(activeContent);
	}, [activeContent]);

	const handleInput = (info, inputName) => {
		setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
	};

	const handlePropertiesInput = (info, inputName, id) => {
		if (inputName === 'percentage') {
			console.log(info, inputName, id);
			// fazer equivalência valor total -> porcentagem aqui
		}
		const newArray = [...currentInfo.Properties];
		newArray[id] = {
			...currentInfo.Properties[id],
			[inputName]: info,
		};
		setCurrentInfo((curr) => ({ ...curr, Properties: newArray }));
	};

	const editParcelStatusModal = () => {
		return (
			<ModalShell
				open={editParcelModal}
				handleClose={() => setEditParcelModal(false)}
				title={t('updatePayment')}
				actionButtons={[
					{
						onClick: () => setEditParcelModal(false),
						title: 'cancel',
						color: 'secondary',
						variant: 'outlined',
					},
					{
						onClick: () => setEditParcelModal(false),
						title: 'save',
						color: 'primary',
						variant: 'contained',
					},
				]}
			>
				<p style={{ marginBottom: '10px' }}>{currentParcel?.details}</p>
				<InputLabelStyled htmlFor="parcelDate">
					{t('parcelDate')}
				</InputLabelStyled>
				<InputField
					id="parcelDate"
					type="date"
					name="parcelDate"
					onChange={(e) => handleInput(e.target.value, e.target.name)}
				/>
				<InputLabelStyled htmlFor="payedValue">
					{t('payedValue')}
				</InputLabelStyled>
				<InputField id="payedValue" type="number" />
			</ModalShell>
		);
	};

	const handleParcelEditClick = (parcel) => {
		console.log(parcel);
		if (!parcel.status) {
			setEditParcelModal(true);
			setCurrentParcel(parcel);
		}
	};

	const renderSelectedProperties = () => {
		const { numberParcels, parcelsValue, payedParcels } =
			currentInfo.selectedProperties;
		const tableRows = [];

		for (let i = 1; i <= numberParcels; i++) {
			const newRow = {
				details: `${t('parcel')} ${i}x${numberParcels}`,
				value: `R$ ${parcelsValue}`,
				status: !!payedParcels.find((p) => p === i),
			};

			tableRows.push(newRow);
		}

		return (
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>{t('details')}</TableCell>
						<TableCell>{t('value')}</TableCell>
						<TableCell>{t('status')}</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{tableRows.map((row) => (
						<TableRow>
							<TableCell>{row.details}</TableCell>
							<TableCell>{row.value}</TableCell>
							<TableCell>
								<ParcelButton
									onClick={() => handleParcelEditClick(row)}
									disabled={row.status}
								>
									{t(row.status ? 'payed' : 'notPayed')}
								</ParcelButton>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		);
	};

	const renderProperties = () => {
		return currentInfo.Properties?.map((prop) => (
			<PropertiesField key={prop.id}>
				<Checkbox
					style={{
						transform: 'scale(2)',
					}}
				/>
				<p>{prop.name}</p>
				<StyledSlider
					value={prop.percentage}
					onChange={(e, val) =>
						handlePropertiesInput(
							Number(val),
							'percentage',
							prop.id
						)
					}
				/>
				<ControlledInput
					value={prop.percentage}
					onChange={(e) =>
						handlePropertiesInput(
							Number(e.target.value),
							'percentage',
							prop.id
						)
					}
					type="number"
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<span
									style={{
										fontSize: '25px',
										color: 'rgba(0, 0, 0, 0.54)',
									}}
								>
									%
								</span>
							</InputAdornment>
						),
					}}
				/>
				<ControlledInput
					defaultValue={prop.value}
					onChange={(e) =>
						handlePropertiesInput(
							Number(e.target.value),
							'value',
							prop.id
						)
					}
					type="number"
					InputProps={{
						style: { textAlign: 'end' },
						startAdornment: (
							<InputAdornment position="start">R$</InputAdornment>
						),
					}}
				/>
			</PropertiesField>
		));
	};

	return (
		<>
			{editParcelStatusModal()}
			<ModalShell
				open={modalState}
				handleClose={() => setModalState(false)}
				title={currentInfo?.description || title}
				breadcrumbs={breadcrumbs}
				actionButtons={[
					{
						onClick: () => setModalState(false),
						title: 'cancel',
						color: 'secondary',
						variant: 'outlined',
					},
					{
						onClick: () => setModalState(false),
						title: 'save',
						color: 'primary',
						variant: 'contained',
					},
				]}
			>
				<InputFieldsWrapper>
					<div style={{ width: '48%' }}>
						<InputLabelStyled htmlFor="description">
							{t('description')}
						</InputLabelStyled>
						<InputField
							id="description"
							name="Description"
							defaultValue={currentInfo?.description}
							onChange={(e) =>
								handleInput(e.target.value, e.target.name)
							}
							placeholder={t('typeSomething')}
						/>
						<InputLabelStyled htmlFor="totalValue">
							{t('totalValue')}
						</InputLabelStyled>
						<ReactInputMask
							mask="99,99"
							maskChar=" "
							onChange={(e) =>
								handleInput(e.target.value, e.target.name)
							}
							value={currentInfo?.TotalValue}
						>
							{() => (
								<InputField
									id="totalValue"
									name="TotalValue"
									placeholder="00,00"
									style={{ marginBottom: '0px' }}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<img
													alt="icon money"
													src={iconList.moneyInput}
												/>
											</InputAdornment>
										),
									}}
								/>
							)}
						</ReactInputMask>
						<InputLabelStyled htmlFor="expensesDate">
							{t('expensesDate')}
						</InputLabelStyled>
						<DateInput
							name="DateDespesa"
							onChange={(e) =>
								handleInput(e.target.value, e.target.name)
							}
						/>
						<InputLabelStyled htmlFor="receipt">
							{t('receipt')}
						</InputLabelStyled>
						<UploadField
							id="receipt"
							name="receipt"
							accept="application/pdf, text/xml"
							docName={
								currentInfo?.receipt
									? currentInfo?.receipt?.split('\\').pop()
									: null
							}
							buttonName={t('select')}
							onChange={(e) =>
								handleInput(e.target.value, e.target.name)
							}
						/>
					</div>

					<Divider orientation="vertical" flexItem component="div" />

					<div style={{ width: '48%' }}>
						<InputLabelStyled htmlFor="payment">
							{t('payment')}
						</InputLabelStyled>
						<SelectField
							id="payment"
							name="Payment"
							value={currentInfo?.Payment}
							onChange={(e) =>
								handleInput(e.target.value, e.target.name)
							}
						>
							<MenuItem disabled>
								<ItemSelect value="" />
							</MenuItem>
							{paymentList.map((item) => (
								<MenuItem value={item.name} key={item.id}>
									{item.name}
								</MenuItem>
							))}
						</SelectField>
						<InputLabelStyled htmlFor="parcels">
							{t('parcels')}
						</InputLabelStyled>
						<SelectField
							id="parcels"
							name="Parcela"
							defaultValue={currentInfo?.Parcela}
							onChange={(e) =>
								handleInput(e.target.value, e.target.name)
							}
						>
							<MenuItem disabled>
								<ItemSelect value="" />
							</MenuItem>
							{timesParcels.map((p) => (
								<MenuItem value={p}>{p}</MenuItem>
							))}
						</SelectField>
						<InputLabelStyled htmlFor="firstParcel">
							{t('firstParcel')}
						</InputLabelStyled>
						<DateInput
							name="firstParcel"
							onChange={(e) =>
								handleInput(e.target.value, e.target.name)
							}
						/>
						<InputLabelStyled htmlFor="accountPlan">
							{t('accountPlan')}
						</InputLabelStyled>
						<SelectField
							id="accountPlan"
							name="accountPlan"
							value={currentInfo?.accountPlan}
							onChange={(e) =>
								handleInput(e.target.value, e.target.name)
							}
						>
							<MenuItem disabled>
								<ItemSelect value="" />
							</MenuItem>
							<MenuItem value="Combustivel">Combustível</MenuItem>
						</SelectField>
					</div>
				</InputFieldsWrapper>
				{console.log(!currentInfo?.selectedProperties)}
				{!currentInfo?.selectedProperties ? (
					<PropertyDivisionWrapper>
						<Subtitle>Divisão entre propriedades</Subtitle>
						{renderProperties()}
					</PropertyDivisionWrapper>
				) : (
					renderSelectedProperties()
				)}
			</ModalShell>
		</>
	);
};

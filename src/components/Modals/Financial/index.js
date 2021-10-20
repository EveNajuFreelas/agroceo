import { useEffect, useState } from 'react';
import { ModalShell } from '../../Modal/index';
import { useTranslation } from 'react-i18next';
import { useExpensesContainer } from '../../../context/financesContext/expensesContext';
import { PropertyDivisionWrapper, PropertiesField, Subtitle } from './styles';
import {
	InputFieldsWrapper,
	InputField,
	SelectField,
	StyledMenuItem,
	UploadField,
	StyledSlider,
	ControlledInput,
	InputLabelStyled,
} from '../inputsStyles';
import { Checkbox, Divider, InputAdornment } from '@material-ui/core';

export const FinancialModal = ({ title, breadcrumbs }) => {
	const { modalState, setModalState, activeContent, editActiveContent } =
		useExpensesContainer();
	const { t } = useTranslation();
	const [currentInfo, setCurrentInfo] = useState(activeContent);

	useEffect(() => {
		setCurrentInfo(activeContent);
	}, [activeContent]);

	const handleInput = (info, inputName) => {
		setCurrentInfo(curr => ({ ...curr, [inputName]: info }));
	};

	const handlePropertiesInput = (info, inputName, id) => {
		if (inputName == 'percentage') {
			// fazer equivalência valor total -> porcentagem aqui
		}
		const newArray = [...currentInfo.Properties];
		newArray[id] = {
			...currentInfo.Properties[id],
			[inputName]: info,
		};
		setCurrentInfo(curr => ({ ...curr, Properties: newArray }));
	};

	const renderProperties = () => {
		return currentInfo.Properties?.map(prop => (
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
					onChange={e =>
						handlePropertiesInput(
							Number(e.target.value),
							'percentage',
							prop.id
						)
					}
					type='number'
					InputProps={{
						endAdornment: (
							<InputAdornment position='end'>
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
					onChange={e =>
						handlePropertiesInput(
							Number(e.target.value),
							'value',
							prop.id
						)
					}
					type='number'
					InputProps={{
						style: { textAlign: 'end' },
						startAdornment: (
							<InputAdornment position='start'>R$</InputAdornment>
						),
					}}
				/>
			</PropertiesField>
		));
	};

	return (
		<ModalShell
			open={modalState}
			handleClose={() => setModalState(false)}
			title={title}
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
					<InputLabelStyled htmlFor='description'>
						{t('description')}
					</InputLabelStyled>
					<InputField
						id='description'
						name='Description'
						defaultValue={currentInfo?.description}
						onChange={e =>
							handleInput(e.target.value, e.target.name)
						}
					/>
					<InputLabelStyled htmlFor='totalValue'>
						{t('totalValue')}
					</InputLabelStyled>
					<InputField
						id='totalValue'
						name='TotalValue'
						type='money'
						defaultValue={currentInfo?.TotalValue}
						onChange={e =>
							handleInput(e.target.value, e.target.name)
						}
					/>
					<InputLabelStyled htmlFor='expensesDate'>
						{t('expensesDate')}
					</InputLabelStyled>
					<InputField
						id='expensesDate'
						name='DateDespesa'
						type='date'
						onChange={e =>
							handleInput(e.target.value, e.target.name)
						}
					/>
					<InputLabelStyled htmlFor='receipt'>
						{t('receipt')}
					</InputLabelStyled>
					<UploadField
						id='receipt'
						docName={
							currentInfo?.DocumentPicture !== '--'
								? currentInfo?.DocumentPicture
								: null
						}
						name='Receipt'
						buttonName={t('select')}
						onChange={e =>
							handleInput(e.target.value, e.target.name)
						}
					/>
				</div>

				<Divider orientation='vertical' flexItem component='div' />

				<div style={{ width: '48%' }}>
					<InputLabelStyled htmlFor='payment'>
						{t('payment')}
					</InputLabelStyled>
					<SelectField
						id='payment'
						name='Payment'
						value={currentInfo?.Payment}
						onChange={e =>
							handleInput(e.target.value, e.target.name)
						}
					>
						<StyledMenuItem value='Cartão de crédito'>
							Cartão de Crédito
						</StyledMenuItem>
					</SelectField>
					<InputLabelStyled htmlFor='parcels'>
						{t('parcels')}
					</InputLabelStyled>
					<SelectField
						id='parcels'
						name='Parcela'
						value={currentInfo?.Parcela}
						onChange={e =>
							handleInput(e.target.value, e.target.name)
						}
					>
						<StyledMenuItem value='10x'>10x</StyledMenuItem>
					</SelectField>
					<InputLabelStyled htmlFor='firstParcel'>
						{t('firstParcel')}
					</InputLabelStyled>
					<InputField
						id='firstParcel'
						type='date'
						name='FirstParcela'
						onChange={e =>
							handleInput(e.target.value, e.target.name)
						}
					/>
					<InputLabelStyled htmlFor='accountPlan'>
						{t('AccountPlan')}
					</InputLabelStyled>
					<SelectField
						id='AccountPlan'
						name='AccountPlan'
						value={currentInfo?.AccountPlan}
						onChange={e =>
							handleInput(e.target.value, e.target.name)
						}
					>
						<StyledMenuItem value='Combustivel'>
							Combustível
						</StyledMenuItem>
					</SelectField>
				</div>
			</InputFieldsWrapper>
			{currentInfo.Properties && (
				<PropertyDivisionWrapper>
					<Subtitle>Divisão entre propriedades</Subtitle>
					{renderProperties()}
				</PropertyDivisionWrapper>
			)}
		</ModalShell>
	);
};

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalShell } from '../../../../Modal/index';
import { manejoMaoFuncionario } from '../../../../../utils/dataMock/mock';
import {
	InputFieldsWrapper,
	SelectField,
	InputField,
	StyledMenuItem,
	InputLabelStyled,
} from '../../../inputsStyles';
import { useManagementContainer } from '../../../../../context/managementContext';
import { ItemTableRowSupplies, TitleTableRowSupplies } from './styles';
import { InputAdornment } from '@material-ui/core';
import { AccessTime } from '@material-ui/icons';
import ItemSelect from '../../../SelectField';
import { employeesSelect } from '../../../../../utils/dataMock/selectMock';
import DateInput from '../../inputs/dateInput';
import HourInput from '../../inputs/hourInput';

export const ExitSuppliesModal = () => {
	const { t } = useTranslation();
	const { exitModalState, closeModals, activeContent, submitNewSupplyEntry } =
		useManagementContainer();

	const [currentInfo, setCurrentInfo] = useState(activeContent);

	const handleInput = (info, inputName) => {
		setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
	};

	const handleSave = () => {
		submitNewSupplyEntry(currentInfo);
	};

	return (
		<ModalShell
			isSmall
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
					onClick: () => handleSave(),
					title: 'save',
					color: 'primary',
					variant: 'contained',
				},
			]}
		>
			<InputFieldsWrapper style={{ flexDirection: 'column' }}>
				<div style={{ marginBottom: '20px' }}>
					<table style={{ width: '100%' }}>
						<thead>
							<TitleTableRowSupplies>
								<th>Qtd</th>
								<th>{t('presentation')}</th>
								<th>{t('measurementUnit')}</th>
							</TitleTableRowSupplies>
						</thead>
						<tbody>
							<ItemTableRowSupplies>
								<td>{activeContent?.quantity}</td>
								<td> {activeContent?.presentation}</td>
								<td> {activeContent?.measurementUnit}</td>
							</ItemTableRowSupplies>
						</tbody>
					</table>
				</div>

				<InputLabelStyled required htmlFor="whoWithdrew">
					{t('whoWithdrew')}
				</InputLabelStyled>
				<SelectField
					id="whoWithdrew"
					name="whoWithdrew"
					defaultValue={'' || currentInfo?.whoWithdrew}
					onChange={(e) => handleInput(e.target.value, e.target.name)}
				>
					<StyledMenuItem>
						<ItemSelect value="" />
					</StyledMenuItem>
					{employeesSelect.map((ft) => (
						<StyledMenuItem value={ft}>{t(ft.name)}</StyledMenuItem>
					))}
				</SelectField>

				<div
					style={{ display: 'flex', justifyContent: 'space-between' }}
				>
					<div style={{ width: '48%' }}>
						<InputLabelStyled required htmlFor="receivedDate">
							{t('receivedDate')}
						</InputLabelStyled>
						<DateInput
							name="receivedDate"
							defaultValue={currentInfo?.receivedDate}
							onChange={(e) =>
								handleInput(e.target.value, e.target.name)
							}
						/>
					</div>
					<div style={{ width: '48%' }}>
						<InputLabelStyled required htmlFor="receivedHour">
							{t('receivedHour')}
						</InputLabelStyled>
						<HourInput
							name="receivedHour"
							defaultValue={currentInfo?.receivedHour}
							onChange={(e) =>
								handleInput(e.target.value, e.target.name)
							}
						/>
					</div>
				</div>

				<InputLabelStyled required htmlFor="quantity">
					{t('quantity')}
				</InputLabelStyled>
				<InputField
					id="quantity"
					name="quantity"
					type="number"
					defaultValue={currentInfo?.quantity}
					onChange={(e) => handleInput(e.target.value, e.target.name)}
					helperText={t('justNumbers')}
					placeholder={t('typeSomething')}
				/>
			</InputFieldsWrapper>
		</ModalShell>
	);
};

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
				<div>
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

				<InputLabelStyled htmlFor="whoWithdrew">
					{t('whoWithdrew')}
				</InputLabelStyled>
				<SelectField
					id="whoWithdrew"
					name="whoWithdrew"
					defaultValue={currentInfo?.whoWithdrew}
					onChange={(e) => handleInput(e.target.value, e.target.name)}
				>
					{manejoMaoFuncionario.map((ft) => (
						<StyledMenuItem value={ft.id}>
							{t(ft.Apelido)}
						</StyledMenuItem>
					))}
				</SelectField>

				<div
					style={{ display: 'flex', justifyContent: 'space-between' }}
				>
					<div style={{ width: '48%' }}>
						<InputLabelStyled htmlFor="receivedDate">
							{t('receivedDate')}
						</InputLabelStyled>
						<InputField
							id="receivedDate"
							name="receivedDate"
							type="date"
							onChange={(e) =>
								handleInput(e.target.value, e.target.name)
							}
						/>
					</div>
					<div style={{ width: '48%' }}>
						<InputLabelStyled htmlFor="receivedHour">
							{t('receivedHour')}
						</InputLabelStyled>
						<InputField
							id="receivedHour"
							name="receivedHour"
							type="hour"
							onChange={(e) =>
								handleInput(e.target.value, e.target.name)
							}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<AccessTime
											style={{ color: '#A3a3a3' }}
										/>
									</InputAdornment>
								),
							}}
						/>
					</div>
				</div>

				<InputLabelStyled htmlFor="quantity">
					{t('quantity')}
				</InputLabelStyled>
				<InputField
					id="quantity"
					name="quantity"
					type="number"
					onChange={(e) => handleInput(e.target.value, e.target.name)}
					helperText={t('justNumbers')}
					placeholder={t('typeSomething')}
				/>
			</InputFieldsWrapper>
		</ModalShell>
	);
};

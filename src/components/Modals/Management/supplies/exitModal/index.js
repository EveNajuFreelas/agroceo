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

export const ExitSuppliesModal = () => {
	const { t } = useTranslation();
	const { exitModalState, closeModals, activeContent, submitNewSupplyEntry } = useManagementContainer();

	const [currentInfo, setCurrentInfo] = useState(activeContent);

	const handleInput = (info, inputName) => {
		setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
	};

	const handleSave = () => {
		submitNewSupplyEntry(currentInfo);
	}

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
			<InputFieldsWrapper style={{ flexDirection: 'column' }}>

				<div style={{ display: 'flex' }}>
					<div>
						<p>{t('qtd')}</p>
						{activeContent?.quantity}
					</div>
					<div>
						<p>{t('presentation')}</p>
						{activeContent?.presentation}
					</div>
					<div>
						<p>{t('measurementUnit')}</p>
						{activeContent?.measurementUnit}
					</div>
				</div>
				<InputLabelStyled htmlFor="whoWithdrew">
					{t('whoWithdrew')}
				</InputLabelStyled>
				<SelectField
					id="whoWithdrew"
					name="whoWithdrew"
					defaultValue={currentInfo?.whoWithdrew}
					onChange={(e) =>
						handleInput(e.target.value, e.target.name)
					}
				>
					<StyledMenuItem value="">{`${t(
						'select'
					)}...`}</StyledMenuItem>
					{manejoMaoFuncionario.map((ft) => (
						<StyledMenuItem value={ft.id}>
							{t(ft.Apelido)}
						</StyledMenuItem>
					))}
				</SelectField>

				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
					onChange={(e) =>
						handleInput(e.target.value, e.target.name)
					}
					helperText={t('justNumbers')}
				/>
			</InputFieldsWrapper>
		</ModalShell>
	);
};

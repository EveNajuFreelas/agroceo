import { useState } from 'react';
import { useManagementContainer } from '../../../../../context/managementContext';
import { ModalShell } from '../../../../Modal/index';
import {
	InputField,
	UploadField,
	SelectField,
	InputFieldsWrapper,
	InputLabelStyled,
} from '../../../inputsStyles';
import { unidadeDeMedida } from '../../../../../utils/dataMock/mock';
import { useTranslation } from 'react-i18next';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	InputAdornment,
	MenuItem,
} from '@material-ui/core';
import { iconList } from '../../../../../assets/Icons/icon-list';
import { defaultTheme } from '../../../../../theme';
import ItemSelect from '../../../SelectField';
import DateInput from '../../inputs/dateInput';
import HourInput from '../../inputs/hourInput';
import { employeesSelect } from '../../../../../utils/dataMock/selectMock';

export const EntranceSuppliesModal = () => {
	const { t } = useTranslation();
	const {
		entranceModalState,
		openEntranceModal,
		closeModals,
		setActiveContent,
		activeContent,
	} = useManagementContainer();

	const { colors } = defaultTheme;

	const [currentInfo, setCurrentInfo] = useState(activeContent);
	const [confirmDialogActive, setConfirmDialogActive] = useState(false);

	const handleInput = (info, inputName) => {
		setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
	};

	const handleSave = (opt) => {
		switch (opt) {
			case 'openDialog':
				setConfirmDialogActive(true);
				break;
			case 'save':
				setActiveContent(currentInfo);
				closeModals();
				break;
			case 'cancel':
				openEntranceModal();
				setConfirmDialogActive(false);
				break;
			default:
				setConfirmDialogActive(false);
				closeModals();
				break;
		}
	};

	const renderConfirmDialog = () => (
		<Dialog
			style={{ padding: '20px' }}
			onClose={() => handleSave('cancel')}
			open={confirmDialogActive}
		>
			<DialogTitle>{t('attention')}</DialogTitle>
			<DialogContent>
				<p>{t('receiptNotSent')}</p>
				<p>{t('confirmSendingWithoutReceipt')}</p>
			</DialogContent>
			<DialogActions style={{ justifyContent: 'center' }}>
				<Button
					style={{
						borderColor: `${colors.primary}`,
						color: `${colors.primary}`,
					}}
					variant="outlined"
					onClick={() => handleSave('save')}
				>
					{t('yes')}
				</Button>
				<Button
					color="secondary"
					variant="outlined"
					onClick={() => handleSave('cancel')}
				>
					{t('no')}
				</Button>
			</DialogActions>
		</Dialog>
	);

	return (
		<>
			{renderConfirmDialog()}
			<ModalShell
				isSmall
				open={entranceModalState}
				handleClose={closeModals}
				title={t('entranceRegister')}
				breadcrumbs={['management', 'supplies']}
				actionButtons={[
					{
						onClick: () => handleSave(),
						title: 'cancel',
						color: 'secondary',
						variant: 'outlined',
					},
					{
						onClick: () =>
							handleSave(
								currentInfo.receipt ? 'save' : 'openDialog'
							),
						title: 'save',
						color: 'primary',
						variant: 'contained',
					},
				]}
			>
				<InputFieldsWrapper style={{ flexDirection: 'column' }}>
					<InputLabelStyled required htmlFor="whoReceived">
						{t('whoReceived')}
					</InputLabelStyled>
					<SelectField
						id="whoReceived"
						name="whoReceived"
						defaultValue={'' || currentInfo?.whoReceived}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
					>
						<MenuItem disabled>
							<ItemSelect value="" />
						</MenuItem>
						{employeesSelect.map((ft) => (
							<MenuItem value={ft}>{t(ft.name)}</MenuItem>
						))}
					</SelectField>

					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<div style={{ width: '48%' }}>
							<InputLabelStyled required htmlFor="receivedDate">
								{t('receivedDate')}
							</InputLabelStyled>
							<DateInput
								name="receivedDate"
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
								defaultValue={currentInfo?.receivedDate}
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

					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<div style={{ width: '48%' }}>
							<InputLabelStyled required htmlFor="quantity">
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
								defaultValue={currentInfo?.quantity}
							/>
						</div>
						<div style={{ width: '48%' }}>
							<InputLabelStyled
								required
								htmlFor="measurementUnit"
							>
								{t('measurementUnit')}
							</InputLabelStyled>
							<SelectField
								id="measurementUnit"
								name="measurementUnit"
								defaultValue={
									'' || currentInfo?.measurementUnit
								}
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
							>
								<MenuItem disabled>
									<ItemSelect value="" />
								</MenuItem>
								{unidadeDeMedida.map((ft) => (
									<MenuItem value={ft.value}>
										{t(ft.name)}
									</MenuItem>
								))}
							</SelectField>
						</div>
					</div>

					<InputLabelStyled htmlFor="presentation">
						{t('presentation')}
					</InputLabelStyled>
					<InputField
						id="suppliesValue"
						name="suppliesValue"
						type="money"
						defaultValue={currentInfo?.suppliesValue}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						helperText={t('example20kg')}
						placeholder={t('typeSomething')}
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

					<InputLabelStyled htmlFor="document">
						{t('document')}
					</InputLabelStyled>
					<UploadField
						id="document"
						name="document"
						docName={currentInfo?.document?.split('\\').pop()}
						accept="application/pdf, text/xml"
						buttonName={t('select')}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
					/>
				</InputFieldsWrapper>
			</ModalShell>
		</>
	);
};

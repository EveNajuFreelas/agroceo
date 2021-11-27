import { useState } from 'react';
import { useManagementContainer } from '../../../../../context/managementContext';
import { ModalShell } from '../../../../Modal/index';
import {
	InputField,
	UploadField,
	SelectField,
	StyledMenuItem,
	InputFieldsWrapper,
	InputLabelStyled,
} from '../../../inputsStyles';
import { fuelTypes } from '../../../../../utils/dataMock/mock';
import { useTranslation } from 'react-i18next';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	InputAdornment,
} from '@material-ui/core';
import { iconList } from '../../../../../assets/Icons/icon-list';
import { defaultTheme } from '../../../../../theme';
import ItemSelect from '../../../SelectField';

export const EntranceManagementModal = () => {
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
		console.log(currentInfo);
	};

	const handleSave = (opt) => {
		switch (opt) {
			case 'openDialog':
				setConfirmDialogActive(true);
				break;
			case 'save':
				setActiveContent(currentInfo);
				setConfirmDialogActive(false);
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
		<Dialog onClose={() => handleSave('cancel')} open={confirmDialogActive}>
			<DialogTitle>{t('attention')}</DialogTitle>
			<DialogContent>
				<p>{t('receiptNotSent')}</p>
				<p>{t('confirmSendingWithoutReceipt')}</p>
			</DialogContent>
			<DialogActions style={{ justifyContent: 'center', gap: '10px' }}>
				<Button
					color="secondary"
					variant="outlined"
					style={{ fontWeight: 'bold', width: '30%' }}
					onClick={() => handleSave('cancel')}
				>
					{t('no')}
				</Button>
				<Button
					style={{
						borderColor: `${colors.primary}`,
						color: `${colors.primary}`,
						fontWeight: 'bold',
						width: '30%',
					}}
					variant="outlined"
					onClick={() => handleSave('save')}
				>
					{t('yes')}
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
				breadcrumbs={['financial', 'expenses']}
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
						title: 'continue',
						color: 'primary',
						variant: 'outlined',
					},
				]}
			>
				<InputFieldsWrapper style={{ flexDirection: 'column' }}>
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
						style={{ marginBottom: '0px' }}
						placeholder={t('typeSomething')}
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

					<InputLabelStyled htmlFor="receipt">
						{t('receipt')}
					</InputLabelStyled>
					<UploadField
						id="receipt"
						name="receipt"
						buttonName={t('select')}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						docName={currentInfo?.receipt?.split('\\').pop()}
						accept="application/pdf, text/xml"
						helperText="formato"
					/>
				</InputFieldsWrapper>
			</ModalShell>
		</>
	);
};

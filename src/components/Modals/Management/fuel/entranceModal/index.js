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
	SvgIcon,
} from '@material-ui/core';
import { iconList } from '../../../../../assets/Icons/icon-list';
import { defaultTheme } from '../../../../../theme';

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
						title: 'save',
						color: 'primary',
						variant: 'contained',
					},
				]}
			>
				<InputFieldsWrapper style={{ flexDirection: 'column' }}>
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
						type="money"
						defaultValue={currentInfo?.quantity}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						helperText={t('justNumbers')}
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

					<InputLabelStyled htmlFor="receipt">
						{t('receipt')}
					</InputLabelStyled>
					<UploadField
						id="receipt"
						docName=""
						name="receipt"
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

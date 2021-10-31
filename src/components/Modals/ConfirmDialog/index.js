import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from '@material-ui/core';

export const ConfirmDialog = ({ t }) => {
	return (
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
			<DialogActions>
				<Button
					color="primary"
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
};

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalShell } from '../../../Modal/index';

import {
	InputFieldsWrapper,
	InputLabelStyled,
	InputField,
	UploadField,
	TextArea,
} from '../../inputsStyles';
import { useModalsContainer } from '../../../../context/modalsContext';

export const DemandsModal = ({ title, breadcrumbs }) => {
	const { t } = useTranslation();
	const { modalState, closeModals } = useModalsContainer();
	const [currentInfo, setCurrentInfo] = useState({});

	const handleInput = (info, inputName) => {
		setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
	};

	return (
		<ModalShell
			isSmall
			open={modalState}
			handleClose={closeModals}
			title={t('registerDemand')}
			breadcrumbs={['management', 'demands']}
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
						display: 'flex',
						flexDirection: 'column',
						width: '100%',
					}}
				>
					<InputLabelStyled required htmlFor="demands">
						{t('demands')}
					</InputLabelStyled>
					<TextArea
						style={{ width: '95%' }}
						id="demands"
						name="demands"
						defaultValue={currentInfo?.demands}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						placeholder={t('typeSomething')}
					/>

					<InputLabelStyled htmlFor="demandPhoto">
						{t('demandPhoto')}
					</InputLabelStyled>
					<UploadField
						id="demandPhoto"
						accept="image/*"
						docName={
							currentInfo?.demandPhoto !== '--'
								? currentInfo?.demandPhoto?.split('\\').pop()
								: null
						}
						name="demandPhoto"
						buttonName={t('select')}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						placeholder={t('sendFile')}
					/>
				</div>
			</InputFieldsWrapper>
		</ModalShell>
	);
};

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuthentication } from '../../../context/authContext';
import { ModalShell } from '../../Modal';
import {
	AddPictureSection,
	InputField,
	InputFieldsWrapper,
	InputLabelStyled,
} from '../inputsStyles';

export const ProfileModal = () => {
	const { t } = useTranslation();
	const { showProfileModal, setShowProfileModal } = useAuthentication();
	const [currentInfo, setCurrentInfo] = useState();

	const handleInput = (info, inputName) => {
		setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
	};

	return (
		<ModalShell
			isSmall
			open={showProfileModal}
			handleClose={() => setShowProfileModal(false)}
			title={t('profile')}
			breadcrumbs={['settings', 'profile']}
			actionButtons={[
				{
					onClick: () => setShowProfileModal(false),
					title: 'cancel',
					color: 'secondary',
					variant: 'outlined',
				},
				{
					onClick: () => setShowProfileModal(false),
					title: 'save',
					color: 'primary',
					variant: 'contained',
				},
			]}
		>
			<InputFieldsWrapper style={{ flexDirection: 'column' }}>
				<AddPictureSection />
				<InputLabelStyled htmlFor="name">{t('name')}</InputLabelStyled>
				<InputField
					id="name"
					name="name"
					defaultValue={currentInfo?.name}
					onChange={(e) => handleInput(e.target.value, e.target.name)}
				/>
				<InputLabelStyled htmlFor="nickname">
					{t('nickname')}
				</InputLabelStyled>
				<InputField
					id="nickname"
					name="nickname"
					defaultValue={currentInfo?.nickname}
					onChange={(e) => handleInput(e.target.value, e.target.name)}
				/>

				<div
					style={{ display: 'flex', justifyContent: 'space-between' }}
				>
					<div style={{ width: '48%' }}>
						<InputLabelStyled htmlFor="country">
							{t('country')}
						</InputLabelStyled>
						<InputField
							id="country"
							name="country"
							type="number"
							onChange={(e) =>
								handleInput(e.target.value, e.target.name)
							}
						/>
					</div>
					<div style={{ width: '48%' }}>
						<InputLabelStyled htmlFor="phone">
							{t('phone')}
						</InputLabelStyled>
						<InputField
							id="phone"
							name="phone"
							type="phone"
							onChange={(e) =>
								handleInput(e.target.value, e.target.name)
							}
						/>
					</div>
				</div>

				<InputLabelStyled htmlFor="email">
					{t('email')}
				</InputLabelStyled>
				<InputField
					id="email"
					name="email"
					defaultValue={currentInfo?.email}
					onChange={(e) => handleInput(e.target.value, e.target.name)}
				/>
				<InputLabelStyled htmlFor="address">
					{t('address')}
				</InputLabelStyled>
				<InputField
					id="address"
					name="address"
					defaultValue={currentInfo?.address}
					onChange={(e) => handleInput(e.target.value, e.target.name)}
				/>
			</InputFieldsWrapper>
		</ModalShell>
	);
};

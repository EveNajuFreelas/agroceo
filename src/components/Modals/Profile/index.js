import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { iconList } from '../../../assets/Icons/icon-list';
import { useAuthentication } from '../../../context/authContext';
import { ModalShell } from '../../Modal';
import {
	AddPictureSection,
	InputField,
	InputFieldsWrapper,
	InputLabelStyled,
	SelectField,
	StyledMenuItem,
} from '../inputsStyles';
import { ContainerSelectCountry } from './styles';

export const ProfileModal = () => {
	const { t } = useTranslation();
	const { showProfileModal, setShowProfileModal } = useAuthentication();
	const [currentInfo, setCurrentInfo] = useState();
	const [image, setImage] = useState({});

	const countries = [
		{
			number: 55,
			icon: 'Brasil',
		},
		{
			number: 1,
			icon: 'Usa',
		},
		{
			number: 61,
			icon: 'Australia',
		},
	];

	const handleInput = (info, inputName) => {
		setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
	};

	useEffect(() => {
		console.log(image);
	}, [image]);

	const handleImgChange = ({ target }) => {
		console.log(target.files[0]);
		setImage({
			preview: URL.createObjectURL(target.files[0]),
			raw: target.files[0],
		});
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
				<AddPictureSection
					img={image.preview}
					onChange={handleImgChange}
				/>
				<InputLabelStyled htmlFor="name">{t('name')}</InputLabelStyled>
				<InputField
					id="name"
					name="name"
					defaultValue={currentInfo?.name}
					onChange={(e) => handleInput(e.target.value, e.target.name)}
					placeholder={t('typeSomething')}
				/>
				<InputLabelStyled htmlFor="nickname">
					{t('nickname')}
				</InputLabelStyled>
				<InputField
					id="nickname"
					name="nickname"
					defaultValue={currentInfo?.nickname}
					onChange={(e) => handleInput(e.target.value, e.target.name)}
					placeholder={t('typeSomething')}
				/>

				<div
					style={{ display: 'flex', justifyContent: 'space-between' }}
				>
					<div style={{ width: '30%' }}>
						<InputLabelStyled htmlFor="country">
							{t('country')}
						</InputLabelStyled>
						<SelectField
							id="country"
							name="country"
							onChange={(e) =>
								handleInput(e.target.value, e.target.name)
							}
						>
							{countries.map((country) => (
								<StyledMenuItem value={country.icon}>
									<ContainerSelectCountry>
										<img src={iconList[country.icon]} />
										<span>+{country.number}</span>
									</ContainerSelectCountry>
								</StyledMenuItem>
							))}
						</SelectField>
					</div>
					<div style={{ width: '68%' }}>
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
							placeholder={t('typeSomething')}
						/>
					</div>
				</div>

				<InputLabelStyled htmlFor="email">Email</InputLabelStyled>
				<InputField
					id="email"
					name="email"
					defaultValue={currentInfo?.email}
					onChange={(e) => handleInput(e.target.value, e.target.name)}
					placeholder={t('typeSomething')}
				/>
				<InputLabelStyled htmlFor="address">
					{t('address')}
				</InputLabelStyled>
				<InputField
					id="address"
					name="address"
					defaultValue={currentInfo?.address}
					onChange={(e) => handleInput(e.target.value, e.target.name)}
					placeholder={t('typeSomething')}
				/>
			</InputFieldsWrapper>
		</ModalShell>
	);
};

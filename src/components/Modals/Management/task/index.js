import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalShell } from '../../../../components/Modal/index';
import { fuelTypes } from '../../../../utils/dataMock/mock';
import {
	InputFieldsWrapper,
	SelectField,
	InputField,
	StyledMenuItem,
	UploadField,
	InputLabelStyled,
} from '../../../Modals/inputsStyles';
import { Divider } from '@material-ui/core';
import { useModalsContainer } from '../../../../context/modalsContext';

export const RegisterModalTask = () => {
	const { t } = useTranslation();
	const { modalState, closeModals } = useModalsContainer();

	const handleInput = (info, inputName) => {
		console.log(inputName);
		//setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
	};

	return (
		<ModalShell
			open={modalState}
			handleClose={closeModals}
			title={t('registerTask')}
			breadcrumbs={['management', 'task']}
			actionButtons={[
				{
					onClick: () => closeModals(),
					title: 'cancel',
					color: 'secondary',
					variant: 'outlined',
				},
				{
					onClick: () => closeModals(),
					title: 'continue',
					color: 'primary',
					variant: 'outlined',
				},
			]}
		>
			<InputFieldsWrapper>
				<div
					style={{
						width: '48%',
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<InputLabelStyled htmlFor="title">
						{t('title')}
					</InputLabelStyled>
					<InputField
						id="title"
						name="title"
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						placeholder={t('typeSomething')}
					/>

					<InputLabelStyled htmlFor="description">
						{t('description')}
					</InputLabelStyled>
					<InputField
						id="description"
						name="description"
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						placeholder={t('typeSomething')}
					/>

					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<div style={{ width: '40%' }}>
							<InputLabelStyled htmlFor="expectateStartDate">
								{t('expectateStartDate')}
							</InputLabelStyled>
							<InputField
								id="expectateStartDate"
								name="expectateStartDate"
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
								placeholder="DD/MM/AAAA"
							/>
						</div>
						<div style={{ width: '58%' }}>
							<InputLabelStyled htmlFor="assignTo">
								{t('assignTo')}
							</InputLabelStyled>
							<SelectField
								id="assignTo"
								name="assignTo"
								//defaultValue={currentInfo?.fuelType || ''}
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
						</div>
					</div>

					<InputLabelStyled htmlFor="costCenters">
						{t('costCenters')}
					</InputLabelStyled>
					<SelectField
						id="costCenters"
						name="costCenters"
						//defaultValue={currentInfo?.fuelType || ''}
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
				</div>

				<Divider orientation="vertical" flexItem component="div" />

				<div style={{ width: '48%' }}>
					<InputLabelStyled htmlFor="photoBeforeStarting">
						{t('photoBeforeStarting')}
					</InputLabelStyled>
					<UploadField
						id="photoBeforeStarting"
						// docName={
						// 	currentInfo?.DocumentPicture !== '--'
						// 		? currentInfo?.DocumentPicture
						// 		: null
						// }
						name="photoBeforeStarting"
						buttonName={t('select')}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						//placeholder={t('sendFile')}
					/>
				</div>
			</InputFieldsWrapper>
		</ModalShell>
	);
};

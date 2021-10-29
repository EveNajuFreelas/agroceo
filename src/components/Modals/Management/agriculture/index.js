import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalShell } from '../../../Modal/index';

import { InputFieldsWrapper } from '../../inputsStyles';

import { useModalsContainer } from '../../../../context/modalsContext';
import {
	InputField,
	InputLabelStyled,
	SelectField,
	StyledMenuItem,
} from '../../inputsStyles';

export const AgricultureModal = ({}) => {
	const { t } = useTranslation();
	const { modalState, closeModals } = useModalsContainer();

	const handleInput = (info, inputName) => {
		//setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
	};

	return (
		<ModalShell
			isSmall
			open={modalState}
			handleClose={closeModals}
			title={t('registerAgriculture')}
			breadcrumbs={['management', 'agricultures']}
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
					}}
				>
					<InputLabelStyled required htmlFor="subarea">
						{t('subarea')}
					</InputLabelStyled>
					<SelectField
						id="subarea"
						name="subarea"
						// defaultValue={currentInfo?.fuelType || ''}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						helperText={t('onlyFarm')}
					>
						<StyledMenuItem value="">{`${t(
							'select'
						)}...`}</StyledMenuItem>
						{/* {fuelTypes.map((ft) => (
							<StyledMenuItem value={ft.value}>
								{t(ft.name)}
							</StyledMenuItem>
						))} */}
					</SelectField>
					<InputLabelStyled required htmlFor="typeAgriculture">
						{t('typeAgriculture')}
					</InputLabelStyled>
					<InputField
						id="typeAgriculture"
						name="typeAgriculture"
						type="number"
						//defaultValue={currentInfo?.quantity}
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
						<div style={{ width: '48%' }}>
							<InputLabelStyled required htmlFor="quantity">
								{t('quantity')}
							</InputLabelStyled>
							<InputField
								id="quantity"
								name="quantity"
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
								helperText={t('justNumbers')}
								placeholder="0"
							/>
						</div>
						<div style={{ width: '48%' }}>
							<InputLabelStyled required htmlFor="weightPerBag">
								{t('weightPerBag')}
							</InputLabelStyled>
							<InputField
								id="weightPerBag"
								name="weightPerBag"
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
								helperText={t('justNumbers')}
								placeholder="0"
							/>
						</div>
					</div>
				</div>
			</InputFieldsWrapper>
		</ModalShell>
	);
};

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalShell } from '../../../Modal/index';

import { InputFieldsWrapper } from '../../inputsStyles';

import { useModalsContainer } from '../../../../context/modalsContext';
import {
	InputField,
	InputLabelStyled,
	SelectField,
} from '../../inputsStyles';
import { WrapperInputText } from './styles';
import { InputAdornment, ListItemText, MenuItem } from '@material-ui/core';
import { iconList } from '../../../../assets/Icons/icon-list';
import { TitleTask } from '../vehicleModals/UtilzationModal/UtilizationOption/styles';
import { subareas } from '../../../../utils/dataMock/selectMock';

export const AgricultureModal = () => {
	const { t } = useTranslation();
	const { modalState, closeModals, activeContent } = useModalsContainer();

	const [currentInfo, setCurrentInfo] = useState(activeContent);
	console.log(currentInfo);

	useEffect(() => {
		setCurrentInfo(activeContent);
	}, [activeContent]);

	const handleSave = () => {
		setCurrentInfo({});
		closeModals();
	}

	const handleInput = (info, inputName) => {
		setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
	};

	return (
		<ModalShell
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
					onClick: () => handleSave(),
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
						onChange={e => handleInput(e.target.value, e.target.name)}
						defaultValue={currentInfo?.subarea}
					>
						{subareas?.map((subarea) => (
							<MenuItem key={subarea.id} value={subarea.subareaName}>
								<ListItemText>
									<TitleTask>
										{subarea.subareaName}
									</TitleTask>
								</ListItemText>
							</MenuItem>
						))}
					</SelectField>
					<InputLabelStyled required htmlFor="typeAgriculture">
						{t('typeAgriculture')}
					</InputLabelStyled>
					<InputField
						id="typeAgriculture"
						name="typeAgriculture"
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						placeholder={t('typeSomething')}
						defaultValue={currentInfo?.typeAgriculture}
					/>
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<div style={{ width: '48%' }}>
							<InputLabelStyled required htmlFor="quantity">
								{t('quantity')}
							</InputLabelStyled>
							<WrapperInputText>
								<InputField
									id="quantity"
									name="numberBags"
									type="number"
									onChange={(e) => handleInput(e.target.value, e.target.name)}
									defaultValue={currentInfo?.numberBags?.replace(/[^0-9]/g,'')}
									helperText={t('justNumbers')}
									placeholder="0"
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<img
													alt="icon money"
													src={iconList.bagInput}
												/>
											</InputAdornment>
										),
									}}
								/>
								<span>{t('bags')}</span>
							</WrapperInputText>
						</div>
						<div style={{ width: '48%' }}>
							<InputLabelStyled required htmlFor="weightPerBag">
								{t('weightPerBag')}
							</InputLabelStyled>
							<WrapperInputText>
								<InputField
									id="weightPerBag"
									name="weightPerBag"
									type="number"
									defaultValue={Number(currentInfo?.weightPerBag?.replace(/[^0-9]/g,''))}
									onChange={(e) => handleInput(e.target.value, e.target.name)}
									helperText={t('justNumbers')}
									placeholder="0"
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<img
													alt="icon money"
													src={iconList.weightInput}
												/>
											</InputAdornment>
										),
									}}
								/>
								<span>{t('kilos')}</span>
							</WrapperInputText>
						</div>
					</div>
				</div>
			</InputFieldsWrapper>
		</ModalShell>
	);
};

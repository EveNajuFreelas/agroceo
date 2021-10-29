import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalShell } from '../../../Modal/index';

import {
	InputFieldsWrapper,
	InputLabelRadio,
	FormControlStyled,
} from '../../inputsStyles';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { useModalsContainer } from '../../../../context/modalsContext';
import { ModuleOption } from './moduleOption';
import { SubAreaOption } from './subareaOption';

export const AreaModal = ({ title, breadcrumbs }) => {
	const { t } = useTranslation();
	const { modalState, closeModals } = useModalsContainer();

	const [register, setRegister] = useState('subarea');

	const handleInput = (info, inputName) => {
		//setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
	};

	return (
		<ModalShell
			isSmall
			open={modalState}
			handleClose={closeModals}
			title={title}
			breadcrumbs={breadcrumbs}
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
					<FormControlStyled component="fieldset">
						<InputLabelRadio
							required
							component="legend"
							htmlFor="typeRegister"
						>
							{t('typeRegister')}
						</InputLabelRadio>
						<RadioGroup
							row
							id="typeRegister"
							name="typeRegister"
							value={register}
						>
							<FormControlLabel
								value="subarea"
								label={t('subarea')}
								control={<Radio />}
								onClick={(e) => setRegister(e.target.value)}
							/>
							<FormControlLabel
								value="module"
								label={t('module')}
								control={<Radio />}
								onClick={(e) => setRegister(e.target.value)}
							/>
						</RadioGroup>
					</FormControlStyled>

					{register === 'subarea' && <SubAreaOption t={t} />}
					{register === 'module' && <ModuleOption t={t} />}
				</div>
			</InputFieldsWrapper>
		</ModalShell>
	);
};

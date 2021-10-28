import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalShell } from '../../../../Modal/index';

import {
	InputFieldsWrapper,
	InputLabelRadio,
	FormControlStyled,
} from '../../../inputsStyles';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { useModalsContainer } from '../../../../../context/modalsContext';
import { UtilizationFirst, UtilizationSecond } from './UtilizationOption';
import { RevisionFirst, RevisionSecond } from './RevisionOption';

export const UtilizationModal = ({ title, breadcrumbs, odometerHourmeter }) => {
	const { t } = useTranslation();
	const { modalUtilizationState, closeUtilizationModal } =
		useModalsContainer();

	const [register, setRegister] = useState('utilization');

	const handleInput = (info, inputName) => {
		//setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
	};

	return (
		<ModalShell
			open={modalUtilizationState}
			handleClose={closeUtilizationModal}
			title={title}
			breadcrumbs={breadcrumbs}
			actionButtons={[
				{
					onClick: () => closeUtilizationModal(),
					title: 'cancel',
					color: 'secondary',
					variant: 'outlined',
				},
				{
					onClick: () => closeUtilizationModal(),
					title: 'save',
					color: 'primary',
					variant: 'contained',
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
					<FormControlStyled component="fieldset">
						<InputLabelRadio
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
								value="utilization"
								label={t('utilization')}
								control={<Radio />}
								onClick={(e) => setRegister(e.target.value)}
							/>
							<FormControlLabel
								value="revision"
								label={t('revision')}
								control={<Radio />}
								onClick={(e) => setRegister(e.target.value)}
							/>
						</RadioGroup>
					</FormControlStyled>

					{register === 'utilization' && (
						<UtilizationFirst
							odometerHourmeter={odometerHourmeter}
							t={t}
						/>
					)}
					{register === 'revision' && (
						<RevisionFirst
							odometerHourmeter={odometerHourmeter}
							t={t}
						/>
					)}
				</div>
				<div style={{ width: '48%' }}>
					{register === 'utilization' && <UtilizationSecond t={t} />}
					{register === 'revision' && <RevisionSecond t={t} />}
				</div>
			</InputFieldsWrapper>
		</ModalShell>
	);
};

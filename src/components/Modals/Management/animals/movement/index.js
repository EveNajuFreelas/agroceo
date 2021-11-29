import {
	SelectField,
	InputLabelStyled,
	InputLabelRadio,
	FormControlStyled,
} from '../../../inputsStyles';

import {
	RadioGroup,
	FormControlLabel,
	Radio,
	MenuItem,
} from '@material-ui/core';
import { useState } from 'react';
import { EntranceModal } from './EntranceModal';
import { ExitModal } from './ExitModal';

export const ModalMovements = ({ t }) => {
	const [typeEntrance, setTypeEntrance] = useState('birth');
	const [typeExit, setTypeExit] = useState('death');
	const [typeRegister, setTypeRegister] = useState('entrance');

	return (
		<div
			style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
				}}
			>
				<div
					style={{
						width: '40%',
					}}
				>
					<FormControlStyled component="fieldset">
						<InputLabelRadio
							required
							component="legend"
							htmlFor="registerType"
						>
							{t('registerType')}
						</InputLabelRadio>
						<RadioGroup row id="registerType" name="registerType">
							<FormControlLabel
								value="entrance"
								label={t('entrance')}
								control={<Radio />}
								checked={typeRegister === 'entrance'}
								onClick={(e) => setTypeRegister(e.target.value)}
								defaultChecked
							/>
							<FormControlLabel
								value="exit"
								label={t('exit')}
								control={<Radio />}
								onClick={(e) => setTypeRegister(e.target.value)}
							/>
						</RadioGroup>
					</FormControlStyled>
				</div>
				{typeRegister === 'entrance' && (
					<div style={{ width: '58%' }}>
						<InputLabelStyled required htmlFor="inputType">
							{t('inputType')}
						</InputLabelStyled>
						<SelectField
							id="inputType"
							name="inputType"
							value={typeEntrance}
							onChange={(e) => setTypeEntrance(e.target.value)}
							defaultValue={typeEntrance}
						>
							<MenuItem value="birth">{t('birth')}</MenuItem>

							<MenuItem value="purchase">
								{t('purchase')}
							</MenuItem>

							<MenuItem value="transferFarmsSameOwner">
								{t('transferFarmsSameOwner')}
							</MenuItem>
						</SelectField>
					</div>
				)}
				{typeRegister === 'exit' && (
					<div style={{ width: '58%' }}>
						<InputLabelStyled required htmlFor="outputType">
							{t('outputType')}
						</InputLabelStyled>
						<SelectField
							id="outputType"
							name="outputType"
							value={typeExit}
							onChange={(e) => setTypeExit(e.target.value)}
						>
							<MenuItem value="death">{t('death')}</MenuItem>

							<MenuItem value="sale">{t('sale')}</MenuItem>

							<MenuItem value="departureFarmBySameOwner">
								{t('departureFarmBySameOwner')}
							</MenuItem>
						</SelectField>
					</div>
				)}
			</div>

			<div
				style={{
					display: 'flex',
					width: '100%',
					justifyContent: 'space-between',
				}}
			>
				{typeRegister === 'entrance' && typeEntrance && (
					<EntranceModal t={t} typeEntrance={typeEntrance} />
				)}

				{typeRegister === 'exit' && typeExit && (
					<ExitModal t={t} typeExit={typeExit} />
				)}
			</div>
		</div>
	);
};

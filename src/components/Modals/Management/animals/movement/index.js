import {
	SelectField,
	StyledMenuItem,
	InputLabelStyled,
	InputLabelRadio,
	FormControlStyled,
} from '../../../inputsStyles';

import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { useState } from 'react';
import { EntranceModal } from './EntranceModal';
import { ExitModal } from './ExitModal';

export const ModalMovements = ({ t }) => {
	const [typeEntrance, setTypeEntrance] = useState('');
	const [typeExit, setTypeExit] = useState('');
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
							<StyledMenuItem value="birth">
								{t('birth')}
							</StyledMenuItem>

							<StyledMenuItem value="purchase">
								{t('purchase')}
							</StyledMenuItem>

							<StyledMenuItem value="transferFarmsSameOwner">
								{t('transferFarmsSameOwner')}
							</StyledMenuItem>
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
							<StyledMenuItem value="death">
								{t('death')}
							</StyledMenuItem>

							<StyledMenuItem value="sale">
								{t('sale')}
							</StyledMenuItem>

							<StyledMenuItem value="departureFarmBySameOwner">
								{t('departureFarmBySameOwner')}
							</StyledMenuItem>
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

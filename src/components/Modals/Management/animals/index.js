import { useState } from 'react';
import { ModalShell } from '../../../Modal/index';

import {
	InputFieldsWrapper,
	InputLabelRadio,
	FormControlStyled,
} from '../../inputsStyles';
import {
	RadioGroup,
	FormControlLabel,
	Radio,
	Divider,
} from '@material-ui/core';
import { useModalsContainer } from '../../../../context/modalsContext';
import { AnimalsFirst, AnimalsSecond, ModalAnimals } from './animal';
import { ModalLot } from './lot';
import { ModalMovements } from './movement';

export const AnimalsModal = ({ t }) => {
	const { modalState, closeModals } = useModalsContainer();

	const [register, setRegister] = useState('animals');

	const handleInput = (info, inputName) => {
		//setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
	};

	return (
		<ModalShell
			open={modalState}
			handleClose={closeModals}
			title={t('registerAnimals')}
			breadcrumbs={['management', 'animals']}
			actionButtons={[
				{
					onClick: () => closeModals(),
					title: 'cancel',
					color: 'secondary',
					variant: 'outlined',
				},
				{
					onClick: () => closeModals(),
					title: 'register',
					color: 'primary',
					variant: 'outlined',
				},
			]}
		>
			<FormControlStyled style={{ width: '90%' }} component="fieldset">
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
					style={{ justifyContent: 'space-between' }}
				>
					<FormControlLabel
						value="animals"
						label={t('animals')}
						control={<Radio />}
						onClick={(e) => setRegister(e.target.value)}
					/>
					<FormControlLabel
						value="lot"
						label={t('lot')}
						control={<Radio />}
						onClick={(e) => setRegister(e.target.value)}
					/>
					<FormControlLabel
						value="movement"
						label={t('movement')}
						control={<Radio />}
						onClick={(e) => setRegister(e.target.value)}
					/>
					<FormControlLabel
						value="weighing"
						label={t('weighing')}
						control={<Radio />}
						onClick={(e) => setRegister(e.target.value)}
					/>
				</RadioGroup>
			</FormControlStyled>
			<InputFieldsWrapper>
				{register === 'animals' && <ModalAnimals t={t} />}
				{register === 'lot' && <ModalLot t={t} />}
				{register === 'movement' && <ModalMovements t={t} />}
			</InputFieldsWrapper>
		</ModalShell>
	);
};

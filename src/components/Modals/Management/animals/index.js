import { useState, useEffect } from 'react';
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
} from '@material-ui/core';
import { useModalsContainer } from '../../../../context/modalsContext';
import { ModalAnimals } from './animal';
import { ModalLot } from './lot';
import { ModalMovements } from './movement';
import { ModalWeighing } from './weighing';

export const AnimalsModal = ({ t, activeTab }) => {
	const { modalState, closeModals, activeContent } = useModalsContainer();

	const [register, setRegister] = useState('animals');

	useEffect(() => {
		switch(activeTab) {
			case 0: 
				setRegister('animals');
				break;
			case 1:
				setRegister('lot');
				break;
			case 2:
				setRegister('movement');
				break;
			case 3:
				setRegister('weighing');
				break;
			default:
				setRegister('animals');
				break;
		}
	}, [activeTab])

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
				{register === 'animals' && <ModalAnimals t={t} activeContent={activeContent} />}
				{register === 'lot' && <ModalLot t={t} activeContent={activeContent} />}
				{register === 'movement' && <ModalMovements t={t} activeContent={activeContent} />}
				{register === 'weighing' && <ModalWeighing t={t} activeContent={activeContent} />}
			</InputFieldsWrapper>
		</ModalShell>
	);
};

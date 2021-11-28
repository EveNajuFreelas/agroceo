import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalShell } from '../../../../Modal/index';

import {
	InputFieldsWrapper,
	InputLabelRadio,
	FormControlStyled,
} from '../../../inputsStyles';
import {
	RadioGroup,
	FormControlLabel,
	Radio,
	Divider,
} from '@material-ui/core';
import { useModalsContainer } from '../../../../../context/modalsContext';
import { UtilizationFirst, UtilizationSecond } from './UtilizationOption';
import { RevisionFirst, RevisionSecond } from './RevisionOption';
import { useRole } from '../../../../../context/rolesContext';
import { useTask } from '../../../../../context/taskContext';
import { employeesSelect } from '../../../../../utils/dataMock/selectMock';

export const UtilizationModal = ({ title, breadcrumbs, odometerHourmeter }) => {
	const { t } = useTranslation();
	const { tasks } = useTask();
	const { modalUtilizationState, closeUtilizationModal } =
		useModalsContainer();

	const [register, setRegister] = useState('utilization');
	const [currentInfo, setCurrentInfo] = useState(null);

	const handleInput = (info, inputName) => {
		setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
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
							employees={employeesSelect}
							t={t}
							currentInfo={currentInfo}
							handleInput={handleInput}
						/>
					)}
					{register === 'revision' && (
						<RevisionFirst
							odometerHourmeter={odometerHourmeter}
							t={t}
							handleInput={handleInput}
						/>
					)}
				</div>

				<Divider orientation="vertical" flexItem component="div" />

				<div style={{ width: '48%' }}>
					{register === 'utilization' && (
						<UtilizationSecond
							t={t}
							tasks={tasks}
							handleInput={handleInput}
						/>
					)}
					{register === 'revision' && (
						<RevisionSecond
							t={t}
							handleInput={handleInput}
							employees={employeesSelect}
						/>
					)}
				</div>
			</InputFieldsWrapper>
		</ModalShell>
	);
};

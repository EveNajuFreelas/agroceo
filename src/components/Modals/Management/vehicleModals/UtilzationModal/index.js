import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalShell } from '../../../../Modal/index';
import { FuelTypeRadio } from '../../managementStyles';
import { fuelTypes } from '../../../../../utils/dataMock/mock';
import {
	InputFieldsWrapper,
	SelectField,
	InputField,
	StyledMenuItem,
	UploadField,
	InputLabelStyled,
} from '../../../inputsStyles';
import { RadioGroup, FormControl, InputLabel } from '@material-ui/core';
import { useModalsContainer } from '../../../../../context/modalsContext';

export const UtilizationModal = ({ title, breadcrumbs, odometerHourmeter }) => {
	const { t } = useTranslation();
	const { modalUtilizationState, closeUtilizationModal } =
		useModalsContainer();

	const [register, setRegister] = useState('');
	const [task, setTask] = useState('');

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
					<FormControl component="fieldset">
						<InputLabel htmlFor="typeRegister">
							{t('typeRegister')}
						</InputLabel>
						<RadioGroup
							row
							id="typeRegister"
							name="typeRegister"
							value={register}
						>
							<FuelTypeRadio
								value="utilization"
								label={t('utilization')}
								onClick={(e) => setRegister(e.target.value)}
							/>
							{t('utilization')}
							<FuelTypeRadio
								value="revision"
								label={t('revision')}
								onClick={(e) => setRegister(e.target.value)}
							/>
							{t('revision')}
						</RadioGroup>
					</FormControl>
					<InputLabelStyled htmlFor="whoUsed">
						{t('whoUsed')}
					</InputLabelStyled>
					<SelectField
						id="whoUsed"
						name="whoUsed"
						//defaultValue={currentInfo?.fuelType || ''}
						// onChange={(e) =>
						// 	handleInput(e.target.value, e.target.name)
						// }
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
					<div style={{ display: 'flex', gap: 20 }}>
						<div>
							<InputLabelStyled htmlFor="dateUse">
								{t('dateUse')}
							</InputLabelStyled>
							<InputField
								id="dateUse"
								name="dateUse"
								// onChange={(e) =>
								// 	handleInput(e.target.value, e.target.name)
								// }
							/>
						</div>
						<div>
							<InputLabelStyled htmlFor="hour">
								{t('hour')}
							</InputLabelStyled>
							<InputField
								id="hour"
								name="hour"
								// onChange={(e) =>
								// 	handleInput(e.target.value, e.target.name)
								// }
							/>
						</div>
					</div>
					<InputLabelStyled htmlFor="initialPicture">
						{t(`${odometerHourmeter}InitialFile`)}
					</InputLabelStyled>
					<UploadField
						id="initialPicture"
						name="initialPicture"
						docName=""
						buttonName={t('select')}
						// onChange={(e) =>
						// 	handleInput(e.target.value, e.target.name)
						// }
					/>
					<InputLabelStyled htmlFor="finalPicture">
						{t(`${odometerHourmeter}FinalFile`)}
					</InputLabelStyled>
					<UploadField
						id="finalPicture"
						name="finalPicture"
						docName=""
						buttonName={t('select')}
						// onChange={(e) =>
						// 	handleInput(e.target.value, e.target.name)
						// }
					/>
				</div>
				<div style={{ width: '48%' }}>
					{register === 'utilization' && (
						<FormControl component="fieldset">
							<InputLabel htmlFor="involvesTask">
								{t('involvesTask')}
							</InputLabel>
							<RadioGroup
								row
								id="involvesTask"
								name="involvesTask"
								value={task}
							>
								<FuelTypeRadio
									value="yes"
									label={t('yes')}
									onClick={(e) => setTask(e.target.value)}
								/>
								{t('yes')}
								<FuelTypeRadio
									value="no"
									label={t('no')}
									onClick={(e) => setTask(e.target.value)}
								/>
								{t('no')}
							</RadioGroup>
						</FormControl>
					)}
					{register === 'revision' && (
						<>
							<InputLabelStyled htmlFor="responsible">
								{t('responsible')}
							</InputLabelStyled>
							<SelectField
								id="responsible"
								name="responsible"
								defaultValue={''}
								// onChange={(e) =>
								// 	handleInput(e.target.value, e.target.name)
								// }
							>
								<StyledMenuItem value="">{`${t(
									'select'
								)}...`}</StyledMenuItem>
							</SelectField>

							<InputLabelStyled htmlFor="revisedItens">
								{t('revisedItens')}
							</InputLabelStyled>
							<SelectField
								id="revisedItens"
								name="revisedItens"
								defaultValue={''}
								// onChange={(e) =>
								// 	handleInput(e.target.value, e.target.name)
								// }
							>
								<StyledMenuItem value="">{`${t(
									'select'
								)}...`}</StyledMenuItem>
							</SelectField>

							<div>
								<h6>{t('itemsReview')}</h6>
								<ul>
									<li>Filtro de ar</li>
									<li>Filtro de combustível</li>
									<li>Troca de óleo</li>
								</ul>
							</div>
						</>
					)}

					{task === 'no' && (
						<>
							<InputLabelStyled htmlFor="justification">
								{t('justification')}
							</InputLabelStyled>
							<InputField
								id="justification"
								name="justification"
								// onChange={(e) =>
								// 	handleInput(e.target.value, e.target.name)
								// }
							/>
						</>
					)}

					{task === 'yes' && (
						<>
							<InputLabelStyled htmlFor="tasksInvolved">
								{t('tasksInvolved')}
							</InputLabelStyled>
							<SelectField
								id="tasksInvolved"
								name="tasksInvolved"
								defaultValue={''}
								// onChange={(e) =>
								// 	handleInput(e.target.value, e.target.name)
								// }
							>
								<StyledMenuItem value="">{`${t(
									'select'
								)}...`}</StyledMenuItem>
							</SelectField>

							<div>
								<table>
									<tr>
										<th>Descrição da tarefa</th>
										<th>Status</th>
									</tr>
									<tr>
										<td>Consertar porteira</td>
										<td>Consertar tábua</td>
									</tr>
									<tr>
										<td style={{ color: 'green' }}>
											Concluído
										</td>
										<td style={{ color: 'lighBlue' }}>
											Iniciado
										</td>
									</tr>
								</table>
							</div>
						</>
					)}
				</div>
			</InputFieldsWrapper>
		</ModalShell>
	);
};

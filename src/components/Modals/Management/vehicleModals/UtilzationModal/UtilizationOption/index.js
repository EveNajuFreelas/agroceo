import { useState } from 'react';
import { fuelTypes } from '../../../../../../utils/dataMock/mock';

import {
	SelectField,
	InputField,
	StyledMenuItem,
	UploadField,
	InputLabelStyled,
	InputLabelRadio,
	FormControlStyled,
} from '../../../../inputsStyles';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { ItemRow, TitleRow } from './styles';

const UtilizationFirst = ({ odometerHourmeter, t }) => {
	const handleInput = (info, inputName) => {
		//setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
	};
	return (
		<>
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
				<StyledMenuItem value="">{`${t('select')}...`}</StyledMenuItem>
				{fuelTypes.map((ft) => (
					<StyledMenuItem value={ft.value}>
						{t(ft.name)}
					</StyledMenuItem>
				))}
			</SelectField>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<div style={{ width: '49%' }}>
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
				<div style={{ width: '49%' }}>
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
		</>
	);
};

const UtilizationSecond = ({ t }) => {
	const [task, setTask] = useState('');

	return (
		<>
			<FormControlStyled component="fieldset">
				<InputLabelRadio component="legend">
					{t('involvesTask')}
				</InputLabelRadio>
				<RadioGroup
					row
					id="involvesTask"
					name="involvesTask"
					value={task}
				>
					<FormControlLabel
						value="yes"
						label={t('yes')}
						control={<Radio />}
						onClick={(e) => setTask(e.target.value)}
					/>
					<FormControlLabel
						value="no"
						label={t('no')}
						control={<Radio />}
						onClick={(e) => setTask(e.target.value)}
					/>
				</RadioGroup>
			</FormControlStyled>

			{task === 'no' && (
				<>
					<InputLabelStyled htmlFor="justification">
						{t('justification')}
					</InputLabelStyled>
					<InputField
						id="justification"
						name="justification"
						placeholder={t('typeSomething')}
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
							<thead>
								<TitleRow>
									<th>Descrição da tarefa</th>
									<th>Status</th>
								</TitleRow>
							</thead>
							<tbody>
								<ItemRow>
									<td>Consertar porteira</td>
									<td style={{ color: 'green' }}>
										Concluído
									</td>
								</ItemRow>
								<ItemRow>
									<td>Consertar tábua</td>
									<td style={{ color: 'blue' }}>Iniciado</td>
								</ItemRow>
							</tbody>
						</table>
					</div>
				</>
			)}
		</>
	);
};

export { UtilizationFirst, UtilizationSecond };

import { useState } from 'react';
import {
	SelectField,
	InputField,
	StyledMenuItem,
	UploadField,
	InputLabelStyled,
	InputLabelRadio,
	FormControlStyled,
} from '../../../../inputsStyles';
import {
	RadioGroup,
	FormControlLabel,
	Radio,
	InputAdornment,
	MenuItem,
	Checkbox,
	ListItemText,
} from '@material-ui/core';
import { ItemRow, StatusTask, TitleRow, TitleTask } from './styles';
import { iconList } from '../../../../../../assets/Icons/icon-list';
import { defaultTheme } from '../../../../../../theme';

const UtilizationFirst = ({ odometerHourmeter, t, employees, handleInput }) => {
	const [employeeSelected, setEmployeeSelected] = useState();

	const handleEmployeeSelected = (event) => {
		setEmployeeSelected(event.target.value);
	};

	return (
		<>
			<InputLabelStyled required htmlFor="whoUsed">
				{t('whoUsed')}
			</InputLabelStyled>
			<SelectField
				id="whoUsed"
				name="whoUsed"
				value={employeeSelected}
				onChange={handleEmployeeSelected}
			>
				{employees.map((employee) => (
					<StyledMenuItem value={employee}>
						{t(employee.name)}
					</StyledMenuItem>
				))}
			</SelectField>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<div style={{ width: '48%' }}>
					<InputLabelStyled required htmlFor="dateUse">
						{t('dateUse')}
					</InputLabelStyled>
					<InputField
						id="dateUse"
						name="dateUse"
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
					/>
				</div>
				<div style={{ width: '48%' }}>
					<InputLabelStyled required htmlFor="hour">
						{t('hour')}
					</InputLabelStyled>
					<InputField
						id="hour"
						name="hour"
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
					/>
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<div style={{ width: '48%' }}>
					<InputLabelStyled required htmlFor="initialOdometer">
						{t('initialOdometer')}
					</InputLabelStyled>
					<InputField
						id="initialOdometer"
						name="initialOdometer"
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						placeholder="00000000"
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<img
										alt="icon money"
										src={iconList.odometerInput}
									/>
								</InputAdornment>
							),
						}}
					/>
				</div>
				<div style={{ width: '48%' }}>
					<InputLabelStyled required htmlFor="finalOdometer">
						{t('finalOdometer')}
					</InputLabelStyled>
					<InputField
						id="finalOdometer"
						name="finalOdometer"
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						placeholder="00000000"
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<img
										alt="icon money"
										src={iconList.odometerInput}
									/>
								</InputAdornment>
							),
						}}
					/>
				</div>
			</div>
			<InputLabelStyled required htmlFor="initialPicture">
				{t(`${odometerHourmeter}InitialFile`)}
			</InputLabelStyled>
			<UploadField
				id="initialPicture"
				name="initialPicture"
				docName=""
				buttonName={t('select')}
				onChange={(e) =>
					handleInput(e.target.value, e.target.name)
				}
			/>
			<InputLabelStyled required htmlFor="finalPicture">
				{t(`${odometerHourmeter}FinalFile`)}
			</InputLabelStyled>
			<UploadField
				id="finalPicture"
				name="finalPicture"
				docName=""
				buttonName={t('select')}
				onChange={(e) =>
					handleInput(e.target.value, e.target.name)
				}
			/>
		</>
	);
};

const UtilizationSecond = ({ t, tasks }) => {
	const [tasksSelected, setTasksSelected] = useState([]);
	const [taskOption, setTaskOption] = useState('');
	const { colors } = defaultTheme;

	const colorsStatus = {
		open: '#44CFEE',
		done: colors.primary,
		unstarted: colors.secondaryAccent,
	};

	const handleTaskSelected = (event) => {
		setTasksSelected(event.target.value);
	};

	return (
		<>
			<FormControlStyled component="fieldset">
				<InputLabelRadio required component="legend">
					{t('involvesTask')}
				</InputLabelRadio>
				<RadioGroup
					row
					id="involvesTask"
					name="involvesTask"
					value={taskOption}
				>
					<FormControlLabel
						value="yes"
						label={t('yes')}
						control={<Radio />}
						onClick={(e) => setTaskOption(e.target.value)}
					/>
					<FormControlLabel
						value="no"
						label={t('no')}
						control={<Radio />}
						onClick={(e) => setTaskOption(e.target.value)}
					/>
				</RadioGroup>
			</FormControlStyled>

			{taskOption === 'no' && (
				<>
					<InputLabelStyled required htmlFor="justification">
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

			{taskOption === 'yes' && (
				<>
					<InputLabelStyled required htmlFor="tasksInvolved">
						{t('tasksInvolved')}
					</InputLabelStyled>
					<SelectField
						id="tasksInvolved"
						name="tasksInvolved"
						value={tasksSelected}
						multiple
						onChange={handleTaskSelected}
						renderValue={(selected) => selected.join(', ')}
						style={{ width: '100%' }}
					>
						{tasks.map((task) => (
							<MenuItem key={task.id} value={task}>
								<Checkbox
									checked={tasksSelected.indexOf(task) > -1}
									style={{ color: 'green' }}
								/>
								<ListItemText>
									<TitleTask>{task.title}</TitleTask>
									<StatusTask
										style={{
											marginLeft: '10px',
											color: colorsStatus[task.status],
										}}
									>
										{t(task.status)}
									</StatusTask>
								</ListItemText>
							</MenuItem>
						))}
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
								{tasksSelected.map((task) => (
									<ItemRow>
										<td>{task.title}</td>
										<td
											style={{
												color: colorsStatus[
													task.status
												],
											}}
										>
											{t(task.status)}
										</td>
									</ItemRow>
								))}
							</tbody>
						</table>
					</div>
				</>
			)}
		</>
	);
};

export { UtilizationFirst, UtilizationSecond };

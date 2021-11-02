import { Checkbox, ListItemText, MenuItem } from '@material-ui/core';
import { useState } from 'react';
import { fuelTypes } from '../../../../../utils/dataMock/mock';
import { areas, subareas } from '../../../../../utils/dataMock/selectMock';

import {
	SelectField,
	InputField,
	StyledMenuItem,
	InputLabelStyled,
} from '../../../inputsStyles';
import { ListItems, TitleList } from '../../styles';
import { TitleTask } from '../../vehicleModals/UtilzationModal/UtilizationOption/styles';

export const ModuleOption = ({ t }) => {
	const [areaSelected, setAreaSelected] = useState([]);
	const [subareasSelected, setSubareasSelected] = useState([]);

	const handleAreasSelected = (event) => {
		setAreaSelected(event.target.value);
	};
	const handleSubareaSelected = (event) => {
		setSubareasSelected(event.target.value);
	};

	return (
		<>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<div style={{ width: '49%' }}>
					<InputLabelStyled required htmlFor="moduleName">
						{t('moduleName')}
					</InputLabelStyled>
					<InputField
						id="moduleName"
						name="moduleName"
						// onChange={(e) =>
						// 	handleInput(e.target.value, e.target.name)
						// }
					/>
				</div>
				<div style={{ width: '49%' }}>
					<InputLabelStyled required htmlFor="moduleNickname">
						{t('moduleNickname')}
					</InputLabelStyled>
					<InputField
						id="moduleNickname"
						name="moduleNickname"

						// onChange={(e) =>
						// 	handleInput(e.target.value, e.target.name)
						// }
					/>
				</div>
			</div>

			<InputLabelStyled required htmlFor="destination">
				{t('destination')}
			</InputLabelStyled>
			<SelectField
				id="destination"
				name="destination"
				value={areaSelected}
				onChange={handleAreasSelected}
			>
				{areas.map((area) => (
					<MenuItem key={area.id} value={area.name}>
						<ListItemText>
							<TitleTask>{area.name}</TitleTask>
						</ListItemText>
					</MenuItem>
				))}
			</SelectField>

			<InputLabelStyled required htmlFor="subareas">
				{t('subareas')}
			</InputLabelStyled>
			<SelectField
				id="subareas"
				name="subareas"
				value={subareasSelected}
				multiple
				onChange={handleSubareaSelected}
				renderValue={(selected) => selected.join(', ')}
				style={{ width: '100%' }}
			>
				{subareas.map((subarea) => (
					<MenuItem key={subarea.id} value={subarea}>
						<Checkbox
							checked={subareasSelected.indexOf(subarea) > -1}
							style={{ color: 'green' }}
						/>
						<ListItemText>
							<TitleTask>
								{subarea.destination} {subarea.pastures} -{' '}
								{subarea.size}
							</TitleTask>
						</ListItemText>
					</MenuItem>
				))}
			</SelectField>

			<div>
				<TitleList>{t('subareas')}</TitleList>
				<ListItems>
					{subareasSelected.map((subarea) => (
						<li>
							{subarea.destination} {subarea.pastures} -{' '}
							{subarea.size}
						</li>
					))}
				</ListItems>
			</div>
		</>
	);
};

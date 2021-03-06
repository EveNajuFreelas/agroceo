import { Checkbox, ListItemText, MenuItem } from '@material-ui/core';
import { useState } from 'react';
import { areas, subareas } from '../../../../../utils/dataMock/selectMock';

import {
	SelectField,
	InputField,
	InputLabelStyled,
} from '../../../inputsStyles';
import ItemSelect from '../../../SelectField';
import { ListItems, TitleList } from '../../styles';
import { TitleTask } from '../../vehicleModals/UtilzationModal/UtilizationOption/styles';

export const ModuleOption = ({ t, activeContent }) => {
	const [currentInfo, setCurrentInfo] = useState(activeContent); 
	const [subareasSelected, setSubareasSelected] = useState(currentInfo?.pastures);

	const handleInput = (info, inputName) => {
		setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
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
						name="name"
						value={currentInfo?.name}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						placeholder={t('typeSomething')}
					/>
				</div>
				<div style={{ width: '49%' }}>
					<InputLabelStyled required htmlFor="moduleNickname">
						{t('moduleNickname')}
					</InputLabelStyled>
					<InputField
						id="moduleNickname"
						name="nickname"
						value={currentInfo?.nickname}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						placeholder={t('typeSomething')}
					/>
				</div>
			</div>
			{console.log(currentInfo)}
			<InputLabelStyled required htmlFor="destination">
				{t('destination')}
			</InputLabelStyled>
			<SelectField
				id="destination"
				name="destination"
				value={currentInfo?.destination}
				onChange={(e) => handleInput(e.target.value, e.target.name)}
			>
				<MenuItem disabled>
					<ItemSelect value="" />
				</MenuItem>
				{areas.map((area) => (
					<MenuItem key={area.id} value={area.name}>
						<ListItemText>
							<TitleTask>{area.name}</TitleTask>
						</ListItemText>
					</MenuItem>
				))}
				<MenuItem key={currentInfo?.destination} value={currentInfo?.destination}>
						<ListItemText>
							<TitleTask>{currentInfo?.destination}</TitleTask>
						</ListItemText>
					</MenuItem>
			</SelectField>

			<InputLabelStyled required htmlFor="subareas">
				{t('subareas')}
			</InputLabelStyled>
			<SelectField
				id="subareas"
				name="pastures"
				value={subareasSelected}
				multiple
				onChange={handleSubareaSelected}
				renderValue={(selected) => {
					if (selected.length === 0) {
						return <ItemSelect value="" />;
					}

					return selected
						.map((item) => {
							return item.destination;
						})
						.join(', ');
				}}
				style={{ width: '100%' }}
			>
				<MenuItem disabled>
					<ItemSelect value="" />
				</MenuItem>
				{subareas.map((subarea) => (
					<MenuItem key={subarea.id} value={subarea}>
						<Checkbox
							checked={subareasSelected.indexOf(subarea) > -1}
							style={{ color: 'green' }}
						/>
						<ListItemText>
							<TitleTask>
								{currentInfo.destination} {subarea}
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
							{currentInfo.destination} {subarea}
						</li>
					))}
				</ListItems>
			</div>
		</>
	);
};

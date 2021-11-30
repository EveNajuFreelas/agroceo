import { InputAdornment, ListItemText, MenuItem } from '@material-ui/core';
import { useState } from 'react';
import { iconList } from '../../../../../assets/Icons/icon-list';
import { areas } from '../../../../../utils/dataMock/selectMock';

import {
	SelectField,
	InputField,
	InputLabelStyled,
} from '../../../inputsStyles';
import ItemSelect from '../../../SelectField';
import { TitleTask } from '../../vehicleModals/UtilzationModal/UtilizationOption/styles';

export const SubAreaOption = ({ t, activeContent }) => {
	const [currentInfo, setCurrentInfo] = useState(activeContent);
	console.log(currentInfo);

	const handleInput = (info, inputName) => {
		setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
	};

	return (
		<>
			<div
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<div style={{ width: '48%' }}>
					<InputLabelStyled required htmlFor="totalArea">
						{t('totalArea')}
					</InputLabelStyled>
					<InputField
						id="totalArea"
						name="totalArea"
						disabled
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<img
										alt="icon money"
										src={iconList.areaInput}
									/>
								</InputAdornment>
							),
						}}
						defaultValue={currentInfo?.totalArea}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
					/>
				</div>
				<div style={{ width: '48%' }}>
					<InputLabelStyled required htmlFor="availableArea">
						{t('availableArea')}
					</InputLabelStyled>
					<InputField
						id="availableArea"
						name="availableArea"
						disabled
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<img
										alt="icon money"
										src={iconList.mapInput}
									/>
								</InputAdornment>
							),
						}}
						defaultValue={currentInfo?.availableArea}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
					/>
				</div>
			</div>

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

			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<div style={{ width: '38%' }}>
					<InputLabelStyled required htmlFor="subareaSize">
						{t('subareaSize')}
					</InputLabelStyled>
					<InputField
						id="subareaSize"
						name="subareaSize"
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<img
										alt="icon money"
										src={iconList.areaInput}
									/>
								</InputAdornment>
							),
						}}
						helperText={t('inHectares')}
						defaultValue={currentInfo?.size?.replace(/[^0-9]/g,'')}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						placeholder="ha"
					/>
				</div>
				<div style={{ width: '58%' }}>
					<InputLabelStyled required htmlFor="subareaDescription">
						{t('subareaDescription')}
					</InputLabelStyled>
					<InputField
						id="subareaDescription"
						name="name"
						defaultValue={currentInfo?.name}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						placeholder={t('typeSomething')}
					/>
				</div>
			</div>
		</>
	);
};

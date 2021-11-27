import {
	InputAdornment,
	ListItemText,
	MenuItem,
} from '@material-ui/core';
import { useState } from 'react';
import { iconList } from '../../../../../assets/Icons/icon-list';
import { areas } from '../../../../../utils/dataMock/selectMock';

import {
	SelectField,
	InputField,
	InputLabelStyled,
} from '../../../inputsStyles';
import { TitleTask } from '../../vehicleModals/UtilzationModal/UtilizationOption/styles';

export const SubAreaOption = ({ t }) => {
	const [currentInfo, setCurrentInfo] = useState({});

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
						value={currentInfo?.totalArea}
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
						value={currentInfo?.availableArea}
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
				onChange={(e) =>
					handleInput(e.target.value, e.target.name)
				}
			>
				{areas.map((area) => (
					<MenuItem key={area.id} value={area.name}>
						<ListItemText>
							<TitleTask>{area.name}</TitleTask>
						</ListItemText>
					</MenuItem>
				))}
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
						value={currentInfo?.subareaSize}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
					/>
				</div>
				<div style={{ width: '58%' }}>
					<InputLabelStyled required htmlFor="subareaDescription">
						{t('subareaDescription')}
					</InputLabelStyled>
					<InputField
						id="subareaDescription"
						name="subareaDescription"
						value={currentInfo?.subareaDescription}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
					/>
				</div>
			</div>
		</>
	);
};

import {
	SelectField,
	InputField,
	StyledMenuItem,
	InputLabelStyled,
	InputLabelRadio,
	FormControlStyled,
	UploadField,
} from '../../../../inputsStyles';

import { fuelTypes } from '../../../../../../utils/dataMock/mock';
import {
	RadioGroup,
	FormControlLabel,
	Radio,
	InputAdornment,
	MenuItem,
	ListItemText,
} from '@material-ui/core';
import { iconList } from '../../../../../../assets/Icons/icon-list';
import { useState } from 'react';
import {
	categorySelect,
	speciesSelect,
} from '../../../../../../utils/dataMock/selectMock';
import { TitleTask } from '../../../vehicleModals/UtilzationModal/UtilizationOption/styles';

export const EntranceModal = ({ t, typeEntrance }) => {
	const [specieSelected, setSpecieSelected] = useState([]);
	const [categorySelected, setCategorySelected] = useState([]);

	const handleSpecieSelected = (event) => {
		setSpecieSelected(event.target.value);
	};
	const handleCategorySelected = (event) => {
		setCategorySelected(event.target.value);
	};

	return (
		<>
			<div
				style={{
					width: '48%',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<InputLabelStyled required htmlFor="specie">
					{t('specie')}
				</InputLabelStyled>
				<SelectField
					id="specie"
					name="specie"
					value={specieSelected}
					onChange={handleSpecieSelected}
				>
					{speciesSelect.map((specie) => (
						<MenuItem key={specie.id} value={specie.name}>
							<ListItemText>
								<TitleTask>{specie.name}</TitleTask>
							</ListItemText>
						</MenuItem>
					))}
				</SelectField>
				<FormControlStyled component="fieldset">
					<InputLabelRadio required component="legend" htmlFor="sex">
						{t('sex')}
					</InputLabelRadio>
					<RadioGroup row id="sex" name="sex">
						<FormControlLabel
							value="male"
							label={t('male')}
							control={<Radio />}
						/>
						<FormControlLabel
							value="female"
							label={t('female')}
							control={<Radio />}
						/>
					</RadioGroup>
				</FormControlStyled>

				<InputLabelStyled required htmlFor="age">
					{t('age')}
				</InputLabelStyled>
				<InputField
					id="age"
					name="age"
					type="number"
					//defaultValue={currentInfo?.quantity}
					//onChange={(e) => handleInput(e.target.value, e.target.name)}
					placeholder={t('typeSomething')}
					helperText={t('inMonths')}
				/>

				{typeEntrance === 'birth' && (
					<>
						<InputLabelStyled required htmlFor="weaningPrediction">
							{t('weaningPrediction')}
						</InputLabelStyled>
						<InputField
							id="weaningPrediction"
							name="weaningPrediction"
							type="number"
							//defaultValue={currentInfo?.quantity}
							//onChange={(e) => handleInput(e.target.value, e.target.name)}
							placeholder={t('typeSomething')}
							helperText={t('inMonths')}
						/>
					</>
				)}

				{typeEntrance !== 'birth' && (
					<>
						<InputLabelStyled htmlFor="invoice">
							{t('invoice')}
						</InputLabelStyled>
						<UploadField
							id="invoice"
							docName=""
							name="invoice"
							buttonName={t('select')}
							// onChange={(e) =>
							// 	handleInput(e.target.value, e.target.name)
							// }
						/>

						<InputLabelStyled htmlFor="animalTransitGuide">
							{t('animalTransitGuide')}
						</InputLabelStyled>
						<UploadField
							id="animalTransitGuide"
							docName=""
							name="animalTransitGuide"
							buttonName={t('select')}
							// onChange={(e) =>
							// 	handleInput(e.target.value, e.target.name)
							// }
						/>
					</>
				)}
			</div>

			<div
				style={{
					width: '48%',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<InputLabelStyled required htmlFor="category">
					{t('category')}
				</InputLabelStyled>
				<SelectField
					id="category"
					name="category"
					value={categorySelected}
					onChange={handleCategorySelected}
				>
					{categorySelect.map((category) => (
						<MenuItem key={category.id} value={category.name}>
							<ListItemText>
								<TitleTask>{category.name}</TitleTask>
							</ListItemText>
						</MenuItem>
					))}
				</SelectField>

				<InputLabelStyled required htmlFor="quantity">
					{t('quantity')}
				</InputLabelStyled>
				<InputField
					id="quantity"
					name="quantity"
					type="number"
					//defaultValue={currentInfo?.quantity}
					//onChange={(e) => handleInput(e.target.value, e.target.name)}
					placeholder={t('typeSomething')}
					helperText={t('justNumbers')}
				/>

				<InputLabelStyled required htmlFor="averageWeight">
					{t('averageWeight')}
				</InputLabelStyled>
				<InputField
					id="averageWeight"
					name="averageWeight"
					type="number"
					//defaultValue={currentInfo?.quantity}
					//onChange={(e) => handleInput(e.target.value, e.target.name)}
					placeholder={t('typeSomething')}
					helperText={t('justNumbers')}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<img
									alt="icon money"
									src={iconList.weightInput}
								/>
							</InputAdornment>
						),
					}}
				/>

				<InputLabelStyled required htmlFor="observation">
					{t('observation')}
				</InputLabelStyled>
				<InputField
					id="observation"
					name="observation"
					type="textArea"
					//defaultValue={currentInfo?.quantity}
					//onChange={(e) => handleInput(e.target.value, e.target.name)}
					placeholder={t('typeSomething')}
					helperText={t('justNumbers')}
				/>
			</div>
		</>
	);
};

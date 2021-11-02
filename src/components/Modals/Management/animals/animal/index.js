import { fuelTypes } from '../../../../../utils/dataMock/mock';

import {
	SelectField,
	InputField,
	StyledMenuItem,
	InputLabelStyled,
	InputLabelRadio,
	FormControlStyled,
} from '../../../inputsStyles';

import {
	RadioGroup,
	FormControlLabel,
	Radio,
	MenuItem,
	ListItemText,
} from '@material-ui/core';
import { useState } from 'react';
import { TitleTask } from '../../vehicleModals/UtilzationModal/UtilizationOption/styles';
import {
	categorySelect,
	speciesSelect,
} from '../../../../../utils/dataMock/selectMock';

export const ModalAnimals = ({ t }) => {
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
				/>
			</div>
		</>
	);
};

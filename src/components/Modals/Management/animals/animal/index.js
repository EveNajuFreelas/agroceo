import {
	SelectField,
	InputField,
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
import { useEffect, useState } from 'react';
import { TitleTask } from '../../vehicleModals/UtilzationModal/UtilizationOption/styles';
import {
	categorySelect,
	speciesSelect,
} from '../../../../../utils/dataMock/selectMock';
import ItemSelect from '../../../SelectField';

export const ModalAnimals = ({ t, activeContent }) => {
	const [currentInfo, setCurrentInfo] = useState(activeContent);
	console.log(currentInfo);

	useEffect(() => {
		setCurrentInfo(activeContent);
	}, [activeContent])

	const handleInput = (info, inputName) => {
		setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
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
					value={currentInfo?.specie}
					onChange={(e) => handleInput(e.target.value, e.target.name)}
				>
					<MenuItem>
						<ItemSelect value="" />
					</MenuItem>
					{speciesSelect.map((specie) => (
						<MenuItem key={specie.id} value={specie.name}>
							<ListItemText>
								<TitleTask>{specie.name}</TitleTask>
							</ListItemText>
						</MenuItem>
					))}
					<MenuItem key={currentInfo?.specie} value={currentInfo?.specie}>
						<ListItemText>
							<TitleTask>{currentInfo?.specie}</TitleTask>
						</ListItemText>
					</MenuItem>
				</SelectField>
				<FormControlStyled component="fieldset">
					<InputLabelRadio required component="legend" htmlFor="sex">
						{t('sex')}
					</InputLabelRadio>
					<RadioGroup row id="sex" name="sex" defaultValue={currentInfo?.sex}>
						<FormControlLabel
							value="Macho"
							label={t('male')}
							control={<Radio />}
							defaultChecked={currentInfo?.sex === 'male'}
						/>
						<FormControlLabel
							value="Fêmea"
							label={t('female')}
							control={<Radio />}
							defaultChecked={currentInfo?.sex === 'female'}
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
					defaultValue={currentInfo?.age?.replace(/[^0-9]/g,'')}
					onChange={(e) => handleInput(e.target.value, e.target.name)}
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
					value={currentInfo?.category}
					onChange={(e) => handleInput(e.target.value, e.target.name)}
				>
					<MenuItem>
						<ItemSelect value="" />
					</MenuItem>
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
					defaultValue={currentInfo?.theAmount}
					onChange={(e) => handleInput(e.target.value, e.target.name)}
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
					defaultValue={currentInfo?.averageWeight}
					onChange={(e) => handleInput(e.target.value, e.target.name)}
					placeholder={t('typeSomething')}
					helperText={t('justNumbers')}
				/>
			</div>
		</>
	);
};

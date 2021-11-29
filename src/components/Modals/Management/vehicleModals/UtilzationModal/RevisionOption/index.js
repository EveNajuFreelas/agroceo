import {
	Checkbox,
	ListItemText,
	MenuItem,
	InputAdornment,
} from '@material-ui/core';
import { useState } from 'react';
import { fuelTypes } from '../../../../../../utils/dataMock/mock';
import { itemsRevised } from '../../../../../../utils/dataMock/selectMock';

import {
	SelectField,
	InputField,
	UploadField,
	InputLabelStyled,
} from '../../../../inputsStyles';
import { ListItems, TitleList } from '../../../styles';
import { TitleTask } from '../UtilizationOption/styles';
import { iconList } from '../../../../../../assets/Icons/icon-list';
import InputMask from 'react-input-mask';
import ItemSelect from '../../../../SelectField';
import DateInput from '../../../inputs/dateInput';

const RevisionFirst = ({ odometerHourmeter, t, currentInfo, handleInput }) => (
	<>
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
			}}
		>
			<div style={{ width: '42%' }}>
				<InputLabelStyled required htmlFor="dateRevision">
					{t('dateRevision')}
				</InputLabelStyled>
				<DateInput
					name="dateRevision"
					onChange={(e) => handleInput(e.target.value, e.target.name)}
					defaultValue={currentInfo?.firstRevision?.dateRevision}
				/>
			</div>
			<div style={{ width: '56%' }}>
				<InputLabelStyled required htmlFor="odometerRevision">
					{t(`${odometerHourmeter}Revision`)}
				</InputLabelStyled>
				<InputField
					id="odometerRevision"
					name="odometerRevision"
					defaultValue={currentInfo?.firstRevision?.odometerRevision}
					onChange={(e) => handleInput(e.target.value, e.target.name)}
					placeholder="00000000"
					type="number"
					helperText={t('justNumbers')}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<img
									alt="icon odometer"
									src={iconList.odometerInput}
								/>
							</InputAdornment>
						),
					}}
				/>
			</div>
		</div>

		<InputLabelStyled required htmlFor="nextRevision">
			{t('nextRevision')}
		</InputLabelStyled>
		<InputField
			id="nextRevision"
			name="nextRevision"
			defaultValue={currentInfo?.firstRevision?.lastRevision}
			onChange={(e) => handleInput(e.target.value, e.target.name)}
			placeholder="00000000"
			helperText={t('justNumbers')}
			type="number"
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						<img alt="icon odometer" src={iconList.odometerInput} />
					</InputAdornment>
				),
			}}
		/>
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
			}}
		>
			<div style={{ width: '42%' }}>
				<InputLabelStyled required htmlFor="lastRevision">
					{t('lastRevision')}
				</InputLabelStyled>
				<DateInput
					name="lastRevision"
					onChange={(e) => handleInput(e.target.value, e.target.name)}
					defaultValue={currentInfo?.firstRevision?.lastRevision}
				/>
			</div>
			<div style={{ width: '56%' }}>
				<InputLabelStyled required htmlFor="odometerLastRevision">
					{t(`${odometerHourmeter}LastRevision`)}
				</InputLabelStyled>
				<InputField
					id="odometerLastRevision"
					name="odometerLastRevision"
					defaultValue={
						currentInfo?.firstRevision?.odometerLastRevision
					}
					onChange={(e) => handleInput(e.target.value, e.target.name)}
					placeholder="00000000"
					helperText={t('justNumbers')}
					type="number"
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<img
									alt="icon odometer"
									src={iconList.odometerInput}
								/>
							</InputAdornment>
						),
					}}
				/>
			</div>
		</div>
		<InputLabelStyled required htmlFor="pictureReview">
			{t(`${odometerHourmeter}PhotoReview`)}
		</InputLabelStyled>
		<UploadField
			id="pictureReview"
			name="pictureReview"
			accept="image/*"
			docName={currentInfo?.pictureReview?.split('\\').pop()}
			buttonName={t('select')}
			onChange={(e) => handleInput(e.target.value, e.target.name)}
		/>
	</>
);

//Revisar este
const RevisionSecond = ({ t, handleInput, employees }) => {
	const [itemsSelected, setItemsSelected] = useState([]);

	const handleItemsSelected = (event) => {
		setItemsSelected(event.target.value);
	};
	return (
		<>
			<InputLabelStyled required htmlFor="responsible">
				{t('responsible')}
			</InputLabelStyled>
			<SelectField
				id="responsible"
				name="responsible"
				onChange={(e) => handleInput(e.target.value, e.target.name)}
			>
				<MenuItem disabled>
					<ItemSelect value="" />
				</MenuItem>
				{employees.map((employee) => (
					<MenuItem value={employee}>{t(employee.name)}</MenuItem>
				))}{' '}
			</SelectField>

			<InputLabelStyled required htmlFor="revisedItens">
				{t('revisedItens')}
			</InputLabelStyled>
			<SelectField
				id="revisedItens"
				name="revisedItens"
				multiple
				value={itemsSelected}
				onChange={handleItemsSelected}
				renderValue={(selected) => selected.join(', ')}
				style={{ width: '100%' }}
			>
				{itemsRevised.sort().map((item) => (
					<MenuItem key={item.id} value={item.name}>
						<Checkbox
							checked={itemsSelected.indexOf(item.name) > -1}
						/>
						<ListItemText>
							<TitleTask>{item.name}</TitleTask>
						</ListItemText>
					</MenuItem>
				))}
			</SelectField>

			<div>
				<TitleList>{t('itemsReview')}</TitleList>
				<ListItems>
					{itemsSelected.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ListItems>
			</div>
		</>
	);
};

export { RevisionFirst, RevisionSecond };

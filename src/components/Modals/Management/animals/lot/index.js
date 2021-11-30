import {
	SelectField,
	InputField,
	InputLabelStyled,
} from '../../../inputsStyles';
import CloseIcon from '@material-ui/icons/Close';

import { ItemTableRow, TitleTableRow } from './styles';
import { useState } from 'react';
import { lotSelect, subareas } from '../../../../../utils/dataMock/selectMock';
import {
	ListItemText,
	MenuItem,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Button,
} from '@material-ui/core';
import ItemSelect from '../../../SelectField';
import DateInput from '../../inputs/dateInput';

export const ModalLot = ({ t }) => {
	const [inventorySelected, setInventorySelected] = useState([]);
	const [currentInfo, setCurrentInfo] = useState({});
	const [openDialogAnimals, setDialogAnimals] = useState(false);
	const [openDialogSubareas, setDialogSubareas] = useState(false);
	const [titleSelected, setTitleSelected] = useState('');

	const handleInput = (info, inputName) => {
		setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
	};

	const handleInventorySelected = (event) => {
		handleSave();
		setInventorySelected(event.target.value);
	};

	const removeElement = (item) => {
		setInventorySelected(
			inventorySelected.filter((element) => element !== item)
		);
	};

	const handleSave = () => {
		setDialogAnimals(!openDialogAnimals);
	};

	const handleSubareaDialog = () => {
		setDialogSubareas(!openDialogSubareas);
	};

	const createTitle = (lot) => {
		console.log(lot);
		setTitleSelected(
			`${lot.specie} - ${lot.category} - ${lot.sex.substr(0, 1)} - ${
				lot.age
			}`
		);
	};

	const renderAnimalsDialog = () => (
		<Dialog onClose={() => handleSave()} open={openDialogAnimals}>
			{console.log(titleSelected)}
			<DialogTitle>{titleSelected}</DialogTitle>
			<DialogContent>
				<p style={{ marginBottom: '20px' }}>
					{t('editQuantityAnimalsLot')}
				</p>

				<InputLabelStyled required htmlFor="quantityAnimal">
					{t('quantity')}
				</InputLabelStyled>
				<InputField
					id="quantityAnimal"
					name="quantityAnimal"
					type="number"
					defaultValue={currentInfo?.quantityAnimal}
					onChange={(e) => handleInput(e.target.value, e.target.name)}
					placeholder="100"
					helperText={t('justNumbers')}
				/>
			</DialogContent>
			<DialogActions style={{ justifyContent: 'center', gap: '10px' }}>
				<Button
					color="secondary"
					variant="outlined"
					style={{ fontWeight: 'bold', width: '30%' }}
					onClick={() => handleSave()}
				>
					{t('no')}
				</Button>
				<Button
					color="primary"
					style={{
						fontWeight: 'bold',
						width: '30%',
					}}
					variant="outlined"
					onClick={() => handleSave('save')}
				>
					{t('yes')}
				</Button>
			</DialogActions>
		</Dialog>
	);

	const renderSubareaDialog = () => (
		<Dialog onClose={() => handleSubareaDialog()} open={openDialogSubareas}>
			<DialogTitle>{t('subareaChange')}</DialogTitle>
			<DialogContent>
				<p style={{ marginBottom: '20px' }}>
					{t('informDateMovement')}
				</p>
				<DateInput
					name="dateMovimentation"
					onChange={(e) => handleInput(e.target.value, e.target.name)}
					defaultValue={currentInfo?.quantityAnimal}
				/>
			</DialogContent>
			<DialogActions style={{ justifyContent: 'center', gap: '10px' }}>
				<Button
					color="secondary"
					variant="outlined"
					style={{ fontWeight: 'bold', width: '30%' }}
					onClick={() => handleSubareaDialog()}
				>
					{t('no')}
				</Button>
				<Button
					color="primary"
					style={{
						fontWeight: 'bold',
						width: '30%',
					}}
					variant="outlined"
					onClick={() => handleSubareaDialog()}
				>
					{t('yes')}
				</Button>
			</DialogActions>
		</Dialog>
	);

	return (
		<>
			{renderAnimalsDialog()}
			{renderSubareaDialog()}
			<div
				style={{
					width: '35%',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<InputLabelStyled required htmlFor="lotname">
					{t('lotname')}
				</InputLabelStyled>
				<InputField
					id="lotname"
					name="lotname"
					defaultValue={currentInfo?.quantity}
					onChange={(e) => handleInput(e.target.value, e.target.name)}
					placeholder={t('typeSomething')}
				/>

				<InputLabelStyled required htmlFor="linkSubarea">
					{t('linkSubarea')}
				</InputLabelStyled>
				<SelectField
					id="linkSubarea"
					name="linkSubarea"
					value={currentInfo?.linkSubarea}
					onChange={(e) => {
						handleInput(e.target.value, e.target.name);
						handleSubareaDialog();
					}}
				>
					<MenuItem disabled>
						<ItemSelect value="" />
					</MenuItem>
					{subareas.map((subarea) => (
						<MenuItem key={subarea.id} value={subarea}>
							<ListItemText>
								{subarea.destination} {subarea.pastures} -
								{subarea.size}
							</ListItemText>
						</MenuItem>
					))}
				</SelectField>
			</div>

			<div
				style={{
					width: '63%',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<InputLabelStyled required htmlFor="selectInventory">
					{t('selectInventory')}
				</InputLabelStyled>
				<SelectField
					id="selectInventory"
					name="selectInventory"
					value={inventorySelected}
					multiple
					onChange={handleInventorySelected}
					renderValue={(selected) => {
						if (selected.length === 0) {
							return <ItemSelect value="" />;
						}

						return selected
							.map((item) => {
								return `${item.specie} - ${item.category}`;
							})
							.join(', ');
					}}
					style={{ width: '100%' }}
				>
					{lotSelect.map((lot) => (
						<MenuItem key={lot.id} value={lot}>
							<ListItemText>
								<tbody>
									<ItemTableRow
										style={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-between',
											gap: '10%',
										}}
										onCLick={() => createTitle(lot)}
									>
										<td>
											{lot.specie} - {lot.category}
										</td>
										<td>{lot.sex}</td>
										<td>{lot.age}</td>
										<td>{lot.qtnd}</td>
									</ItemTableRow>
								</tbody>
							</ListItemText>
						</MenuItem>
					))}
				</SelectField>

				<div>
					<table style={{ width: '100%' }}>
						<thead>
							<TitleTableRow>
								<th>
									{t('specie')}-{t('category')}
								</th>
								<th>{t('sex')}</th>
								<th>{t('age')}</th>
								<th>Qntd.</th>
							</TitleTableRow>
						</thead>
						<tbody>
							{inventorySelected.map((item) => (
								<ItemTableRow>
									<td>
										{item.specie} - {item.category}
									</td>
									<td>{item.sex}</td>
									<td>{item.age}</td>
									<td>{item.qtnd}</td>
									<td>
										<CloseIcon
											style={{ cursor: 'pointer' }}
											fontSize="small"
											onClick={() => removeElement(item)}
										/>
									</td>
								</ItemTableRow>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

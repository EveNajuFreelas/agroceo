import {
	SelectField,
	InputField,
	InputLabelStyled,
} from '../../../inputsStyles';
import CloseIcon from '@material-ui/icons/Close';

import { ItemTableRow, TitleTableRow } from './styles';
import { useState } from 'react';
import { lotSelect, subareas } from '../../../../../utils/dataMock/selectMock';
import { ListItemText, MenuItem } from '@material-ui/core';

export const ModalLot = ({ t }) => {
	const [inventorySelected, setInventorySelected] = useState([]);
	const [currentInfo, setCurrentInfo] = useState({});
	
	const handleInput = (info, inputName) => {
		setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
	};

	const handleInventorySelected = (event) => {
		setInventorySelected(event.target.value);
	};

	return (
		<>
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
					onChange={(e) => handleInput(e.target.value, e.target.name)}
				>
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
					renderValue={(selected) => selected.join(', ')}
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
										onCLick={console.log('clicou')}
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
										<CloseIcon fontSize="small" />
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

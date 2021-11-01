import {
	SelectField,
	InputField,
	StyledMenuItem,
	InputLabelStyled,
} from '../../../inputsStyles';

import { fuelTypes } from '../../../../../utils/dataMock/mock';
import { ItemTableRowWeighing, TitleTableRowWeighing } from './styles';
import { useState } from 'react';
import { InputAdornment, ListItemText, MenuItem } from '@material-ui/core';
import { iconList } from '../../../../../assets/Icons/icon-list';
import {
	subareas,
	weighingSelect,
} from '../../../../../utils/dataMock/selectMock';
import { ItemTableRow } from '../lot/styles';

export const ModalWeighing = ({ t }) => {
	const [lotSelected, setLotSelected] = useState([]);
	const [subareaHomeSelected, setSubareaHomeSelected] = useState([]);
	const [subareaDestinationSelected, setSubareaDestinationSelected] =
		useState([]);

	const handleLotSelected = (event) => {
		setLotSelected(event.target.value);
	};

	const handleSubareaHomeSelected = (event) => {
		setSubareaHomeSelected(event.target.value);
	};

	const handleSubareaDestinationSelected = (event) => {
		setSubareaDestinationSelected(event.target.value);
	};
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div
					style={{
						width: '58%',
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<InputLabelStyled required htmlFor="selectLot">
						{t('selectLot')}
					</InputLabelStyled>
					<SelectField
						id="selectLot"
						name="selectLot"
						value={lotSelected}
						onChange={handleLotSelected}
						style={{ width: '100%' }}
					>
						{weighingSelect.map((lot) => (
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
											<td>{lot.id}</td>
											<td>{lot.name}</td>
											<td>{lot.subarea}</td>
											<td>{lot.qtnd}</td>
										</ItemTableRow>
									</tbody>
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
						<div style={{ width: '30%' }}>
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
						</div>

						<div style={{ width: '30%' }}>
							<InputLabelStyled required htmlFor="dateWeighing">
								{t('dateWeighing')}
							</InputLabelStyled>
							<InputField
								id="dateWeighing"
								name="dateWeighing"
								//defaultValue={currentInfo?.quantity}
								//onChange={(e) => handleInput(e.target.value, e.target.name)}
								placeholder={t('typeSomething')}
								helperText={t('justNumbers')}
							/>
						</div>

						<div style={{ width: '30%' }}>
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
						</div>
					</div>
				</div>

				<div
					style={{
						width: '38%',
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<div style={{ width: '48%' }}>
						<InputLabelStyled
							style={{ fontSize: '12px' }}
							htmlFor="lastWeighing"
						>
							{t('lastWeighing')}
						</InputLabelStyled>
						<InputField
							id="lastWeighing"
							name="lastWeighing"
							value="10 / 10 / 2021"
							disabled
							//defaultValue={currentInfo?.quantity}
							//onChange={(e) => handleInput(e.target.value, e.target.name)}
							placeholder={t('typeSomething')}
						/>
					</div>
					<div style={{ width: '48%' }}>
						<InputLabelStyled
							style={{ fontSize: '12px' }}
							htmlFor="lastWeighingWeight"
						>
							{t('lastWeighingWeight')}
						</InputLabelStyled>
						<InputField
							id="lastWeighingWeight"
							name="lastWeighingWeight"
							value="270 Kg"
							disabled
							//defaultValue={currentInfo?.quantity}
							//onChange={(e) => handleInput(e.target.value, e.target.name)}
							placeholder={t('typeSomething')}
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
					</div>
				</div>
			</div>

			<div
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<div style={{ width: '48%' }}>
					<InputLabelStyled required htmlFor="homeSubarea">
						{t('homeSubarea')}
					</InputLabelStyled>
					<SelectField
						id="homeSubarea"
						name="homeSubarea"
						value={subareaHomeSelected}
						onChange={handleSubareaHomeSelected}
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

				<div style={{ width: '48%' }}>
					<InputLabelStyled required htmlFor="destinationSubArea">
						{t('destinationSubArea')}
					</InputLabelStyled>
					<SelectField
						id="destinationSubArea"
						name="destinationSubArea"
						value={subareaDestinationSelected}
						onChange={handleSubareaDestinationSelected}
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
			</div>

			<div>
				<table style={{ width: '100%' }}>
					<thead>
						<TitleTableRowWeighing>
							<th>
								{t('specie')}-{t('category')}
							</th>
							<th>{t('sex')}</th>
							<th>{t('age')}</th>
							<th>Qntd.</th>
							<th>{t('averageWeight')}</th>
							<th>{t('dateWeighing')}</th>
						</TitleTableRowWeighing>
					</thead>
					<tbody>
						<ItemTableRowWeighing>
							<td>Bovinos - corte</td>
							<td>Macho</td>
							<td>24 meses</td>
							<td>30</td>
							<td>270 kg</td>
							<td>10/10/2021</td>
						</ItemTableRowWeighing>
					</tbody>
				</table>
			</div>
		</div>
	);
};

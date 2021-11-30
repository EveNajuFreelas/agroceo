import {
	SelectField,
	InputField,
	InputLabelStyled,
} from '../../../inputsStyles';

import { ItemTableRowWeighing, TitleTableRowWeighing } from './styles';
import { useState, useEffect } from 'react';
import { InputAdornment, ListItemText, MenuItem } from '@material-ui/core';
import { iconList } from '../../../../../assets/Icons/icon-list';
import {
	subareas,
	weighingSelect,
} from '../../../../../utils/dataMock/selectMock';
import { ItemTableRow } from '../lot/styles';
import ItemSelect from '../../../SelectField';
import DateInput from '../../inputs/dateInput';

export const ModalWeighing = ({ t, activeContent }) => {
	const [currentInfo, setCurrentInfo] = useState(activeContent);
	const [dateLastWeighing, setDateLastWeighing] = useState('10 / 10 / 2013');
	const [weightLast, setWeightLast] = useState('270 Kg');
	console.log(currentInfo);
	useEffect(() => {
		setCurrentInfo(activeContent);
	}, [activeContent])

	const handleInput = (info, inputName) => {
		console.log(inputName, info);
		setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
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
						value={currentInfo?.lot}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						style={{ width: '100%' }}
					>
						<MenuItem disabled>
							<ItemSelect value="" />
						</MenuItem>
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
											// onClick={console.log('clicou')}
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
						<MenuItem key={currentInfo?.lot} value={currentInfo?.lot}>
							<ListItemText>
								<tbody>
									<ItemTableRow
										style={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-between',
											gap: '10%',
										}}
									>
										<td>{currentInfo?.lot}</td>
										<td>{currentInfo?.subarea}</td>
										<td>{currentInfo?.qntdAnimals}</td>
									</ItemTableRow>
								</tbody>
							</ListItemText>
						</MenuItem>
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
								defaultValue={currentInfo?.qntdAnimals?.replace(/[^0-9]/g,'')}
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
								placeholder={t('typeSomething')}
								helperText={t('justNumbers')}
							/>
						</div>

						<div style={{ width: '30%' }}>
							<InputLabelStyled required htmlFor="dateWeighing">
								{t('dateWeighing')}
							</InputLabelStyled>
							<DateInput
								name="dateWeighing"
								defaultValue={currentInfo?.dataWeighing}
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
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
								defaultValue={currentInfo?.averageWeight?.replace(/[^0-9]/g,'')}
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
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
							value={dateLastWeighing}
							disabled
							defaultValue={currentInfo?.lastWeighing}
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
							value={weightLast}
							disabled
							defaultValue={currentInfo?.lastWeighingWeight}
							onChange={(e) =>
								handleInput(e.target.value, e.target.name)
							}
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
						name="subarea"
						value={currentInfo?.subarea}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
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
						<MenuItem key={currentInfo?.subarea} value={currentInfo?.subarea}>
							<ListItemText>
								{currentInfo?.subarea}
							</ListItemText>
						</MenuItem>
					</SelectField>
				</div>

				<div style={{ width: '48%' }}>
					<InputLabelStyled required htmlFor="destinationSubArea">
						{t('destinationSubArea')}
					</InputLabelStyled>
					<SelectField
						id="destinationSubArea"
						name="destinationSubArea"
						value={currentInfo?.destinationSubArea}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
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

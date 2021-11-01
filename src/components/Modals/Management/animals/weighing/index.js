import {
	SelectField,
	InputField,
	StyledMenuItem,
	InputLabelStyled,
} from '../../../inputsStyles';

import { fuelTypes } from '../../../../../utils/dataMock/mock';
import { ItemTableRowWeighing, TitleTableRowWeighing } from './styles';
import { useState } from 'react';

export const ModalWeighing = ({ t }) => {
	const [specieSelected, setSpecieSelected] = useState(fuelTypes[0].value);

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
					<InputLabelStyled required htmlFor="specie">
						{t('specie')}
					</InputLabelStyled>
					<SelectField
						id="specie"
						name="specie"
						value={specieSelected}
						onChange={(e) =>
							setSpecieSelected(e.target.value, e.target.name)
						}
					>
						<StyledMenuItem value="">{`${t(
							'select'
						)}...`}</StyledMenuItem>
						{fuelTypes.map((ft) => (
							<StyledMenuItem value={ft.value}>
								{t(ft.name)}
							</StyledMenuItem>
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
						//defaultValue={currentInfo?.fuelType || ''}
						// onChange={(e) =>
						// 	handleInput(e.target.value, e.target.name)
						// }
					>
						<StyledMenuItem value="">{`${t(
							'select'
						)}...`}</StyledMenuItem>
						{fuelTypes.map((ft) => (
							<StyledMenuItem value={ft.value}>
								{t(ft.name)}
							</StyledMenuItem>
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
						//defaultValue={currentInfo?.fuelType || ''}
						// onChange={(e) =>
						// 	handleInput(e.target.value, e.target.name)
						// }
					>
						<StyledMenuItem value="">{`${t(
							'select'
						)}...`}</StyledMenuItem>
						{fuelTypes.map((ft) => (
							<StyledMenuItem value={ft.value}>
								{t(ft.name)}
							</StyledMenuItem>
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

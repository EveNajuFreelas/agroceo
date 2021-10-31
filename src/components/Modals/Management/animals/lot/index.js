import { fuelTypes } from '../../../../../utils/dataMock/mock';

import {
	SelectField,
	InputField,
	StyledMenuItem,
	InputLabelStyled,
} from '../../../inputsStyles';
import CloseIcon from '@material-ui/icons/Close';

import { ItemTableRow, TitleTableRow } from './styles';

export const ModalLot = ({ t }) => {
	return (
		<>
			<div
				style={{
					width: '30%',
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
					//defaultValue={currentInfo?.quantity}
					//onChange={(e) => handleInput(e.target.value, e.target.name)}
					placeholder={t('typeSomething')}
				/>

				<InputLabelStyled required htmlFor="linkSubarea">
					{t('linkSubarea')}
				</InputLabelStyled>
				<SelectField
					id="linkSubarea"
					name="linkSubarea"
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

			<div
				style={{
					width: '68%',
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
					defaultValue={''}
					// onChange={(e) =>
					// 	handleInput(e.target.value, e.target.name)
					// }
				>
					<StyledMenuItem value="">{`${t(
						'select'
					)}...`}</StyledMenuItem>
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
							<ItemTableRow>
								<td>Bovinos - corte</td>
								<td>Macho</td>
								<td>24 meses</td>
								<td>100</td>
								<td>
									<CloseIcon fontSize="small" />
								</td>
							</ItemTableRow>
							<ItemTableRow>
								<td>Consertar tábua</td>
								<td>Fêmea</td>
								<td>24 meses</td>
								<td>100</td>
								<td>
									<CloseIcon fontSize="small" />
								</td>
							</ItemTableRow>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

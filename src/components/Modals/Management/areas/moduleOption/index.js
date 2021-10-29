import { fuelTypes } from '../../../../../utils/dataMock/mock';

import {
	SelectField,
	InputField,
	StyledMenuItem,
	InputLabelStyled,
} from '../../../inputsStyles';
import { ListItems, TitleList } from '../../styles';

export const ModuleOption = ({ t }) => {
	return (
		<>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<div style={{ width: '49%' }}>
					<InputLabelStyled required htmlFor="moduleName">
						{t('moduleName')}
					</InputLabelStyled>
					<InputField
						id="moduleName"
						name="moduleName"
						// onChange={(e) =>
						// 	handleInput(e.target.value, e.target.name)
						// }
					/>
				</div>
				<div style={{ width: '49%' }}>
					<InputLabelStyled required htmlFor="moduleNickname">
						{t('moduleNickname')}
					</InputLabelStyled>
					<InputField
						id="moduleNickname"
						name="moduleNickname"

						// onChange={(e) =>
						// 	handleInput(e.target.value, e.target.name)
						// }
					/>
				</div>
			</div>

			<InputLabelStyled required htmlFor="destination">
				{t('destination')}
			</InputLabelStyled>
			<SelectField
				id="destination"
				name="destination"
				//defaultValue={currentInfo?.fuelType || ''}
				// onChange={(e) =>
				// 	handleInput(e.target.value, e.target.name)
				// }
			>
				<StyledMenuItem value="">{`${t('select')}...`}</StyledMenuItem>
				{fuelTypes.map((ft) => (
					<StyledMenuItem value={ft.value}>
						{t(ft.name)}
					</StyledMenuItem>
				))}
			</SelectField>

			<InputLabelStyled required htmlFor="subareas">
				{t('subareas')}
			</InputLabelStyled>
			<SelectField
				id="subareas"
				name="subareas"
				defaultValue={''}
				// onChange={(e) =>
				// 	handleInput(e.target.value, e.target.name)
				// }
			>
				<StyledMenuItem value="">{`${t('select')}...`}</StyledMenuItem>
			</SelectField>

			<div>
				<TitleList>{t('subareas')}</TitleList>
				<ListItems>
					<li>Pasto 4 “Pasto da vaca louca” - 12 ha</li>
					<li>Pasto 5 “Pasto das leiteiras” - 8 ha</li>
				</ListItems>
			</div>
		</>
	);
};

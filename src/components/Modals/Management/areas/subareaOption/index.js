import { fuelTypes } from '../../../../../utils/dataMock/mock';

import {
	SelectField,
	InputField,
	StyledMenuItem,
	InputLabelStyled,
} from '../../../inputsStyles';

export const SubAreaOption = ({ t }) => {
	return (
		<>
			<div
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<div style={{ width: '48%' }}>
					<InputLabelStyled required htmlFor="totalArea">
						{t('totalArea')}
					</InputLabelStyled>
					<InputField
						id="totalArea"
						name="totalArea"
						// onChange={(e) =>
						// 	handleInput(e.target.value, e.target.name)
						// }
					/>
				</div>
				<div style={{ width: '48%' }}>
					<InputLabelStyled required htmlFor="availableArea">
						{t('availableArea')}
					</InputLabelStyled>
					<InputField
						id="availableArea"
						name="availableArea"

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

			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<div style={{ width: '38%' }}>
					<InputLabelStyled required htmlFor="subareaSize">
						{t('subareaSize')}
					</InputLabelStyled>
					<InputField
						id="subareaSize"
						name="subareaSize"
						// onChange={(e) =>
						// 	handleInput(e.target.value, e.target.name)
						// }
					/>
				</div>
				<div style={{ width: '58%' }}>
					<InputLabelStyled required htmlFor="subareaDescription">
						{t('subareaDescription')}
					</InputLabelStyled>
					<InputField
						id="subareaDescription"
						name="subareaDescription"

						// onChange={(e) =>
						// 	handleInput(e.target.value, e.target.name)
						// }
					/>
				</div>
			</div>
		</>
	);
};

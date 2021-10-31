import {
	SelectField,
	InputField,
	StyledMenuItem,
	InputLabelStyled,
	UploadField,
} from '../../../../inputsStyles';

import { fuelTypes } from '../../../../../../utils/dataMock/mock';
import { WrapperRow } from './styles';

export const ExitModal = ({ t, typeExit }) => {
	return (
		<div style={{ width: '100%' }}>
			<WrapperRow>
				<div style={{ width: '70%' }}>
					<InputLabelStyled required htmlFor="selectInventory">
						{t('selectInventory')}
					</InputLabelStyled>
					<SelectField
						id="selectInventory"
						name="selectInventory"
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

				<div style={{ width: '28%' }}>
					<InputLabelStyled required htmlFor="quantity">
						{t('quantity')}
					</InputLabelStyled>
					<InputField
						id="quantity"
						name="quantity"
						type="textArea"
						//defaultValue={currentInfo?.quantity}
						//onChange={(e) => handleInput(e.target.value, e.target.name)}
						placeholder={t('typeSomething')}
					/>
				</div>
			</WrapperRow>
			<WrapperRow>
				<div style={{ width: '48%' }}>
					<InputLabelStyled htmlFor="linkSubarea">
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

				<div style={{ width: '48%' }}>
					<InputLabelStyled htmlFor="observation">
						{t('observation')}
					</InputLabelStyled>
					<InputField
						id="observation"
						name="observation"
						type="textArea"
						//defaultValue={currentInfo?.quantity}
						//onChange={(e) => handleInput(e.target.value, e.target.name)}
						placeholder={t('typeSomething')}
					/>
				</div>
			</WrapperRow>

			{typeExit !== 'death' && (
				<WrapperRow>
					<div style={{ width: '48%' }}>
						<InputLabelStyled htmlFor="invoice">
							{t('invoice')}
						</InputLabelStyled>
						<UploadField
							id="invoice"
							docName=""
							name="invoice"
							buttonName={t('select')}
							// onChange={(e) =>
							// 	handleInput(e.target.value, e.target.name)
							// }
						/>
					</div>

					<div style={{ width: '48%' }}>
						<InputLabelStyled htmlFor="animalTransitGuide">
							{t('animalTransitGuide')}
						</InputLabelStyled>
						<UploadField
							id="animalTransitGuide"
							docName=""
							name="animalTransitGuide"
							buttonName={t('select')}
							// onChange={(e) =>
							// 	handleInput(e.target.value, e.target.name)
							// }
						/>
					</div>
				</WrapperRow>
			)}
		</div>
	);
};

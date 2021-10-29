import { fuelTypes } from '../../../../../../utils/dataMock/mock';

import {
	SelectField,
	InputField,
	StyledMenuItem,
	UploadField,
	InputLabelStyled,
} from '../../../../inputsStyles';
import { ListItems, TitleList } from '../../../styles';

const RevisionFirst = ({ odometerHourmeter, t }) => {
	return (
		<>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<div style={{ width: '49%' }}>
					<InputLabelStyled required htmlFor="lastRevision">
						{t('lastRevision')}
					</InputLabelStyled>
					<InputField
						id="lastRevision"
						name="lastRevision"
						// onChange={(e) =>
						// 	handleInput(e.target.value, e.target.name)
						// }
					/>
				</div>
				<div style={{ width: '49%' }}>
					<InputLabelStyled required htmlFor="odometerLastRevision">
						{t('odometerLastRevision')}
					</InputLabelStyled>
					<InputField
						id="odometerLastRevision"
						name="odometerLastRevision"

						// onChange={(e) =>
						// 	handleInput(e.target.value, e.target.name)
						// }
					/>
				</div>
			</div>

			<InputLabelStyled required htmlFor="nextRevision">
				{t('nextRevision')}
			</InputLabelStyled>
			<SelectField
				id="nextRevision"
				name="nextRevision"
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
			<InputLabelStyled required htmlFor="pictureReview">
				{t(`${odometerHourmeter}PhotoReview`)}
			</InputLabelStyled>
			<UploadField
				id="pictureReview"
				name="pictureReview"
				docName=""
				buttonName={t('select')}
				// onChange={(e) =>
				// 	handleInput(e.target.value, e.target.name)
				// }
			/>
		</>
	);
};

const RevisionSecond = ({ t }) => {
	return (
		<>
			<InputLabelStyled required htmlFor="responsible">
				{t('responsible')}
			</InputLabelStyled>
			<SelectField
				id="responsible"
				name="responsible"
				defaultValue={''}
				// onChange={(e) =>
				// 	handleInput(e.target.value, e.target.name)
				// }
			>
				<StyledMenuItem value="">{`${t('select')}...`}</StyledMenuItem>
			</SelectField>

			<InputLabelStyled required htmlFor="revisedItens">
				{t('revisedItens')}
			</InputLabelStyled>
			<SelectField
				id="revisedItens"
				name="revisedItens"
				defaultValue={''}
				// onChange={(e) =>
				// 	handleInput(e.target.value, e.target.name)
				// }
			>
				<StyledMenuItem value="">{`${t('select')}...`}</StyledMenuItem>
			</SelectField>

			<div>
				<TitleList>{t('itemsReview')}</TitleList>
				<ListItems>
					<li>Filtro de ar</li>
					<li>Filtro de combustível</li>
					<li>Troca de óleo</li>
				</ListItems>
			</div>
		</>
	);
};

export { RevisionFirst, RevisionSecond };

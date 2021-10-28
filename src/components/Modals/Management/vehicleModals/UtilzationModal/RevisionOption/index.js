import { fuelTypes } from '../../../../../../utils/dataMock/mock';

import {
	SelectField,
	InputField,
	StyledMenuItem,
	UploadField,
	InputLabelStyled,
} from '../../../../inputsStyles';

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
					<InputLabelStyled htmlFor="lastRevision">
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
					<InputLabelStyled htmlFor="odometerLastRevision">
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

			<InputLabelStyled htmlFor="nextRevision">
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
			<InputLabelStyled htmlFor="pictureReview">
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
			<InputLabelStyled htmlFor="responsible">
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

			<InputLabelStyled htmlFor="revisedItens">
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
				<h6>{t('itemsReview')}</h6>
				<ul>
					<li>Filtro de ar</li>
					<li>Filtro de combustível</li>
					<li>Troca de óleo</li>
				</ul>
			</div>
		</>
	);
};

export { RevisionFirst, RevisionSecond };

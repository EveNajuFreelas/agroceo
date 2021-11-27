import {
	SelectField,
	InputField,
	InputLabelStyled,
	UploadField,
} from '../../../../inputsStyles';

import { WrapperRow } from './styles';
import { useState } from 'react';
import {
	lotSelect,
	subareas,
} from '../../../../../../utils/dataMock/selectMock';
import { ListItemText, MenuItem } from '@material-ui/core';
import { ItemTableRow } from '../../lot/styles';

export const ExitModal = ({ t, typeExit }) => {
	const [currentInfo, setCurrentInfo] = useState({});

	const handleInput = (info, inputName) => {
		setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
	};

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
						onChange={(e) => handleInput(e.target.value, e.target.name)}
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
				</div>

				<div style={{ width: '28%' }}>
					<InputLabelStyled required htmlFor="quantity">
						{t('quantity')}
					</InputLabelStyled>
					<InputField
						id="quantity"
						name="quantity"
						type="textArea"
						defaultValue={currentInfo?.quantity}
						onChange={(e) => handleInput(e.target.value, e.target.name)}
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

				<div style={{ width: '48%' }}>
					<InputLabelStyled htmlFor="observation">
						{t('observation')}
					</InputLabelStyled>
					<InputField
						id="observation"
						name="observation"
						type="textArea"
						defaultValue={currentInfo?.observation}
						onChange={(e) => handleInput(e.target.value, e.target.name)}
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
							onChange={(e) =>
								handleInput(e.target.value, e.target.name)
							}
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
							onChange={(e) =>
								handleInput(e.target.value, e.target.name)
							}
						/>
					</div>
				</WrapperRow>
			)}
		</div>
	);
};

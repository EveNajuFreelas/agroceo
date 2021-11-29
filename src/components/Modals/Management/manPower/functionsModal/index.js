import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalShell } from '../../../../Modal';
import {
	InputField,
	InputLabelStyled,
	SelectField,
} from '../../../inputsStyles';
import { useModalsContainer } from '../../../../../context/modalsContext';
import { Checkbox, MenuItem } from '@material-ui/core';
import { functionList } from '../../../../../utils/dataMock/selectMock';
import ItemSelect from '../../../SelectField';

export const FunctionsModal = () => {
	const { t } = useTranslation();
	const { secondModalState, closeSecondModal, activeContent } =
		useModalsContainer();
	const weekdays = [
		'monday',
		'tuesday',
		'wednesday',
		'thursday',
		'friday',
		'saturday',
		'sunday',
	];
	const dayPeriods = ['morning', 'afternoon', 'night'];
	const [currentInfo, setCurrentInfo] = useState(activeContent);

	const handleInput = (info, inputName) => {
		setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
	};

	return (
		<ModalShell
			open={secondModalState}
			handleClose={closeSecondModal}
			title={t('addFunction')}
			breadcrumbs={['management', 'manpower']}
			actionButtons={[
				{
					onClick: () => closeSecondModal(),
					title: 'cancel',
					color: 'secondary',
					variant: 'outlined',
				},
				{
					onClick: () => closeSecondModal(),
					title: 'save',
					color: 'primary',
					variant: 'contained',
				},
			]}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<div style={{ width: '48%' }}>
					<InputLabelStyled required htmlFor="functionName">
						{t('functionName')}
					</InputLabelStyled>
					<InputField
						id="functionName"
						name="functionName"
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						defaultValue={currentInfo?.functionName}
						placeholder={t('typeSomething')}
					/>
				</div>
				<div style={{ width: '48%' }}>
					<InputLabelStyled required htmlFor="obligationsList">
						{t('obligationsList')}
					</InputLabelStyled>
					<SelectField
						id="obligationsList"
						name="obligationsList"
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						defaultValue={currentInfo?.obligationsList}
					>
						<MenuItem disabled>
							<ItemSelect value="" />
						</MenuItem>
						{functionList.map((item) => (
							<MenuItem id={item.id}>{item.name}</MenuItem>
						))}
					</SelectField>
				</div>
			</div>
			<div style={{ display: 'flex' }}>
				{weekdays.map((wd) => (
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<Checkbox value={wd} />
							<p>{wd}</p>
						</div>
						{dayPeriods.map((dp) => (
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<Checkbox value={`${wd} ${dp}`} disabled />
								<p>{dp}</p>
							</div>
						))}
					</div>
				))}
			</div>
		</ModalShell>
	);
};

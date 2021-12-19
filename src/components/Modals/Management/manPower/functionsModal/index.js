import { useEffect, useState } from 'react';
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
		t('monday'),
		t('tuesday'),
		t('wednesday'),
		t('thursday'),
		t('friday'),
		t('saturday'),
		t('sunday'),
	];
	const dayPeriods = [t('morning'), t('afternoon'), t('night')];
	const [currentInfo, setCurrentInfo] = useState(activeContent);

	useEffect(() => {
		setCurrentInfo(activeContent);
	}, [activeContent])

	const handleInput = (info, inputName) => {
		if(inputName == 'day') {
			// setCurrentInfo((curr) => ({
			// 	...curr,
			// 	Days: [
			// 		...curr.Days,
			// 		{
			// 			day: info,
			// 			period: '',
			// 		}
			// 	]
			// }))
		} else if(inputName == 'period') {
			// setCurrentInfo((curr) => ({
			// 	...curr,
			// 	Days: [
			// 		...curr.Days,
			// 		{
			// 			day: '',
			// 			period: info,
			// 		}
			// 	]
			// }))
		} else {
			setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
		}
	};

	const renderWeekdaysWithDayPeriod = (data) => {
		const dayId = `${data}-${Math.random()}`;
		// TODO: atualizar quando currentInfo atualizar
		const isDisabled = currentInfo?.Days?.filter(days => days.day == data)[0];

		return (
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<Checkbox 
						id={dayId} 
						value={t(data)}
						name="day"
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						} 
					/>
					<p>{t(data)}</p>
				</div>
				{dayPeriods.map((dp) => (
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<Checkbox 
							name="period" 
							value={t(dp)} 
							disabled={isDisabled == undefined} 
						/>
						<p>{t(dp)}</p>
					</div>
				))}
			</div>
		);
	}

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
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				{weekdays.map((wd) => renderWeekdaysWithDayPeriod(wd))}
			</div>
		</ModalShell>
	);
};

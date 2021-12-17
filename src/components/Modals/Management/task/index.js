import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalShell } from '../../../../components/Modal/index';
import {
	InputFieldsWrapper,
	SelectField,
	InputField,
	UploadField,
	InputLabelStyled,
	TextArea,
} from '../../../Modals/inputsStyles';
import {
	Checkbox,
	Chip,
	Divider,
	ListItemText,
	makeStyles,
	MenuItem,
} from '@material-ui/core';
import { useModalsContainer } from '../../../../context/modalsContext';
import {
	costCentersSelect,
	employeesSelect,
} from '../../../../utils/dataMock/selectMock';
import { TitleTask } from '../vehicleModals/UtilzationModal/UtilizationOption/styles';
import ItemSelect from '../../SelectField';

import { defaultTheme } from '../../../../theme';

export const RegisterModalTask = () => {
	const { colors } = defaultTheme;
	const useStyles = makeStyles((theme) => ({
		chip: {
			margin: theme.spacing(0.5),
			backgroundColor: `${colors.primary}`,
			color: `${colors.neutral0}`,
			fontSize: '16px',
			'&:hover': { backgroundColor: `${colors.primary}` },
		},
	}));

	const classes = useStyles();

	const { t } = useTranslation();
	const { modalState, closeModals, activeContent } = useModalsContainer();
	const [currentInfo, setCurrentInfo] = useState(activeContent);
	const [costCenters, setCostsCenters] = useState([]);


	const handleInput = (info, inputName) => {
		setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
	};

	const handleCostCenters = (event) => {
		setCostsCenters(event.target.value);
	};

	return (
		<ModalShell
			open={modalState}
			handleClose={closeModals}
			title={t('registerTask')}
			breadcrumbs={['management', 'task']}
			actionButtons={[
				{
					onClick: () => closeModals(),
					title: 'cancel',
					color: 'secondary',
					variant: 'outlined',
				},
				{
					onClick: () => closeModals(),
					title: 'continue',
					color: 'primary',
					variant: 'outlined',
				},
			]}
		>
			<InputFieldsWrapper>
				<div
					style={{
						width: '54%',
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<InputLabelStyled required htmlFor="title">
						{t('title')}
					</InputLabelStyled>
					<InputField
						id="title"
						name="title"
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						placeholder={t('typeSomething')}
					/>

					<InputLabelStyled htmlFor="description">
						{t('description')}
					</InputLabelStyled>
					<TextArea
						id="description"
						name="description"
						defaultValue={currentInfo?.description}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						placeholder={t('typeSomething')}
						style={{width: '94%'}}
					/>

					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<div style={{ width: '40%' }}>
							<InputLabelStyled required htmlFor="expectateStartDate">
								{t('expectateStartDate')}
							</InputLabelStyled>
							<InputField
								id="expectateStartDate"
								name="expectateStartDate"
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
								placeholder="DD/MM/AAAA"
							/>
						</div>
						<div style={{ width: '58%' }}>
							<InputLabelStyled htmlFor="assignTo">
								{t('assignTo')}
							</InputLabelStyled>
							<SelectField
								id="assignTo"
								name="assignTo"
								value={currentInfo?.assignTo}
								onChange={(e) =>
									handleInput(e.target.value, e.target.name)
								}
							>
								<MenuItem disabled>
									<ItemSelect value="" />
								</MenuItem>
								{employeesSelect.map((employee) => (
									<MenuItem
										key={employee.id}
										value={employee.name}
									>
										{t(employee.name)}
									</MenuItem>
								))}
							</SelectField>
						</div>
					</div>

					<InputLabelStyled htmlFor="costCenters">
						{t('costCenters')}
					</InputLabelStyled>
					<SelectField
						id="costCenters"
						name="costCenters"
						value={costCenters}
						multiple
						onChange={handleCostCenters}
						renderValue={(selected) =>
							{
								console.log(selected);
								if (typeof selected === 'undefined') {
									console.log('entrou');
								    return (
									<MenuItem disabled>
										<ItemSelect value="" />
									</MenuItem>)
							    }

							return selected.map((value) => (
								<Chip
									key={value}
									label={value.name}
									className={classes.chip}
								/>
							))}
						}
						style={{ width: '100%' }}
					>
						
						{costCentersSelect.map((center) => (
							<MenuItem key={center.id} value={center}>
								<Checkbox
									checked={
										currentInfo?.costCenters?.indexOf(center) > -1
									}
								/>
								<ListItemText>
									<TitleTask>{center.name}</TitleTask>
								</ListItemText>
							</MenuItem>
						))}
					</SelectField>
				</div>

				<Divider orientation="vertical" flexItem component="div" />

				<div style={{ width: '42%' }}>
					<InputLabelStyled htmlFor="photoBeforeStarting">
						{t('photoBeforeStarting')}
					</InputLabelStyled>
					<UploadField
						id="photoBeforeStarting"
						name="photoBeforeStarting"
						accept="image/*"
						docName={
							currentInfo?.photoBeforeStarting
								? currentInfo?.photoBeforeStarting?.split('\\').pop()
								: null
						}
						buttonName={t('select')}
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
					/>
				</div>
			</InputFieldsWrapper>
		</ModalShell>
	);
};

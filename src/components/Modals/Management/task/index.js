import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalShell } from '../../../../components/Modal/index';
import {
	InputFieldsWrapper,
	SelectField,
	InputField,
	StyledMenuItem,
	UploadField,
	InputLabelStyled,
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

	const handleInput = (info, inputName) => {
		setCurrentInfo((curr) => ({ ...curr, [inputName]: info }));
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
						width: '48%',
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<InputLabelStyled htmlFor="title">
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
					<InputField
						id="description"
						name="description"
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						placeholder={t('typeSomething')}
					/>

					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<div style={{ width: '40%' }}>
							<InputLabelStyled htmlFor="expectateStartDate">
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
								{employeesSelect.map((employee) => (
									<StyledMenuItem value={employee}>
										{t(employee.name)}
									</StyledMenuItem>
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
						value={currentInfo?.costCenters}
						multiple
						onChange={(e) =>
							handleInput(e.target.value, e.target.name)
						}
						renderValue={(selected) =>
							selected.map((value) => (
								<Chip
									key={value}
									label={value.name}
									className={classes.chip}
								/>
							))
						}
						style={{ width: '100%' }}
					>
						{costCentersSelect.map((center) => (
							<MenuItem key={center.id} value={center}>
								<Checkbox
									checked={
										currentInfo?.costCenters.indexOf(center) > -1
									}
									style={{ color: 'green' }}
								/>
								<ListItemText>
									<TitleTask>{center.name}</TitleTask>
								</ListItemText>
							</MenuItem>
						))}
					</SelectField>
				</div>

				<Divider orientation="vertical" flexItem component="div" />

				<div style={{ width: '48%' }}>
					<InputLabelStyled htmlFor="photoBeforeStarting">
						{t('photoBeforeStarting')}
					</InputLabelStyled>
					<UploadField
						id="photoBeforeStarting"
						// docName={
						// 	currentInfo?.DocumentPicture !== '--'
						// 		? currentInfo?.DocumentPicture
						// 		: null
						// }
						name="photoBeforeStarting"
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

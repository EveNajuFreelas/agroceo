import { useEffect, useState } from 'react';

import { TabStyled, TabsStyled, HeadSection, ButtonSection } from '../styles';
import { useTranslation } from 'react-i18next';

import ButtonIconAdd from '../../../components/Geral/ButtonIcon';
import TableEmployees from '../../../components/Table/Manejo/tableEmployees';

import { defaultTheme } from '../../../theme';
import { useRole } from '../../../context/rolesContext';
import TableWithChip from '../../../components/Table/TableWithChip';
import CircleLoading from '../../../components/LoadingCircle';
import { EmployeesModal } from '../../../components/Modals/Management/manPower/employeesModal';
import { EditEmployeeModal } from '../../../components/Modals/Management/manPower/editEmployee';
import { useModalsContainer } from '../../../context/modalsContext';
import { FunctionsModal } from '../../../components/Modals/Management/manPower/functionsModal';
import { EditFunctionsModal } from '../../../components/Modals/Management/manPower/editFunctionsModal';
import { usePageContext } from '../../../context/pageContext';

const MaoDeObra = () => {
	const { setPageTitle } = usePageContext();
	const { t } = useTranslation();
	const { colors } = defaultTheme;
	const { roles, employees, getRoles, getEmployees, isLoading, deleteRole } =
		useRole();
	const { openModal, openSecondModal } = useModalsContainer();

	const [value, setValue] = useState(0);

	let columnsRoles = ['ID', t('roleName'), t('obligations'), t('daysWeek')];

	useEffect(() => {
		getRoles();
		getEmployees();
		setPageTitle('manpower');
	}, []);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return isLoading ? (
		<CircleLoading />
	) : (
		<>
			<HeadSection>
				<TabsStyled value={value} onChange={handleChange}>
					<TabStyled label={t('employees')} />
					<TabStyled label={t('roles')} />
				</TabsStyled>
				<ButtonSection>
					<ButtonIconAdd
						color={colors.primary}
						backgroundColor={colors.neutral0}
						textButton={'Funções'}
						marginBottom={false}
						onClick={openSecondModal}
					/>

					<ButtonIconAdd
						color={colors.neutral0}
						backgroundColor={colors.primary}
						textButton={'Registro'}
						marginBottom={false}
						onClick={openModal}
					/>
				</ButtonSection>
			</HeadSection>

			<EditEmployeeModal />
			<EmployeesModal />

			<FunctionsModal />
			<EditFunctionsModal />

			{value === 0 && <TableEmployees data={employees} />}
			{value === 1 && (
				<TableWithChip
					data={roles}
					columns={columnsRoles}
					deleteFunction={deleteRole}
				/>
			)}
		</>
	);
};

export default MaoDeObra;

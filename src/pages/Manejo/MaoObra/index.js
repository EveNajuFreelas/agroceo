import { useEffect, useState } from 'react';

import { TabStyled, TabsStyled, HeadSection, ButtonSection } from '../styles';
import { useTranslation } from 'react-i18next';

import ButtonIconAdd from '../../../components/Geral/ButtonIcon';
import TableEmployees from '../../../components/Table/Manejo/tableEmployees';

import { defaultTheme } from '../../../theme';
import { useRole } from '../../../context/rolesContext';
import TableWithChip from '../../../components/Table/TableWithChip';
import CircleLoading from '../../../components/LoadingCircle';

const MaoDeObra = () => {
	const { t } = useTranslation();
	const { colors } = defaultTheme;
	const { roles, employees, getRoles, getEmployees, isLoading, deleteRole } =
		useRole();

	const [value, setValue] = useState(0);

	let columnsRoles = ['ID', t('roleName'), t('obligations'), t('daysWeek')];

	useEffect(() => {
		getRoles();
		getEmployees();
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
					/>

					<ButtonIconAdd
						color={colors.neutral0}
						backgroundColor={colors.primary}
						textButton={'Registro'}
						marginBottom={false}
					/>
				</ButtonSection>
			</HeadSection>

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

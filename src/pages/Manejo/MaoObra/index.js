import React, { useEffect, useState } from 'react';

import { TabStyled, TabsStyled, HeadSection, ButtonSection } from './styles';
import { useTranslation } from 'react-i18next';

import ButtonIconAdd from '../../../components/Geral/ButtonIcon';
import TableEmployees from '../../../components/Table/Manejo/tableEmployees';

import { defaultTheme } from '../../../theme';
import { useRole } from '../../../context/rolesContext';
import TableWithChip from '../../../components/Table/TableWithChip';

const MaoObra = () => {
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
		<span>Carregando...</span>
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

			{value === 0 &&
				(employees ? (
					<TableEmployees data={employees} />
				) : (
					<span>carregando...</span>
				))}
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

export default MaoObra;

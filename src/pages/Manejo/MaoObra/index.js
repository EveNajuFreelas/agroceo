import React, { useEffect, useState } from 'react';

import { TabStyled, TabsStyled, HeadSection, ButtonSection } from './styles';
import { useTranslation } from 'react-i18next';

import ButtonIconAdd from '../../../components/Geral/ButtonIcon';
import TableEmployees from '../../../components/Table/ManejoMaoDeObra/tableEmployees';
import TableRoles from '../../../components/Table/ManejoMaoDeObra/tableRoles';

import { defaultTheme } from '../../../theme';
import { useRole } from '../../../context/rolesContext';

const MaoObra = () => {
	const { t } = useTranslation();
	const { colors } = defaultTheme;
	const { roles, employees, getRolesAndEmployees, isLoading } = useRole();

	const [value, setValue] = useState(1);

	useEffect(() => {
		getRolesAndEmployees(5);
	}, []);

	const handleChange = (event, newValue) => {
		setValue(newValue);
		console.log(value);
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

			{value === 0 && <TableEmployees data={employees} />}
			{value === 1 && <TableRoles data={roles} />}
		</>
	);
};

export default MaoObra;

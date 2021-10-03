import React from 'react';

import { TabStyled, TabsStyled, HeadSection, ButtonSection } from './styles';
import { useTranslation } from 'react-i18next';

import {
	manejoMaoFuncionario,
	manejoMaoFuncoes,
} from '../../../utils/dataMock/mock';

import ButtonIconAdd from '../../../components/Geral/ButtonIcon';
import TableEmployees from '../../../components/Table/ManejoMaoDeObra/tableEmployees';
import TableRoles from '../../../components/Table/ManejoMaoDeObra/tableRoles';

import { defaultTheme } from '../../../theme';

const MaoObra = () => {
	const { t } = useTranslation();
	const { colors } = defaultTheme;

	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
		console.log(value);
	};

	return (
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
			{value === 0 && <TableEmployees data={manejoMaoFuncionario} />}
			{value === 1 && <TableRoles data={manejoMaoFuncoes} />}
		</>
	);
};

export default MaoObra;

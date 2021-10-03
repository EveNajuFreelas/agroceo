import React from 'react';

import { AppBar } from '@material-ui/core';
import { TabStyled, TabsStyled } from './styles';
import { useTranslation } from 'react-i18next';
import TableEmployees from '../../../components/ManejoMaoDeObra/tableEmployees';
import { manejoMaoFuncionario } from '../../../utils/dataMock/mock';

const MaoObra = () => {
	const { t } = useTranslation();

	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
		console.log(value);
	};

	return (
		<>
			<TabsStyled value={value} onChange={handleChange}>
				<TabStyled label={t('employees')} />
				<TabStyled label={t('roles')} />
			</TabsStyled>
			{value === 0 && <TableEmployees data={manejoMaoFuncionario} />}
		</>
	);
};

export default MaoObra;

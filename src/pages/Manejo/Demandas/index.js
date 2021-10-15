import React from 'react';
import { TitleSection } from '../../../components/Geral/styles';
import { HeadSection } from '../styles';

import { useTranslation } from 'react-i18next';
import { defaultTheme } from '../../../theme';

import TableDemandas from '../../../components/Table/Manejo/tableDemandas';
import Filter from '../../../components/Filter';
import { manejoDemandas } from '../../../utils/dataMock/mock';
import ButtonIconAdd from '../../../components/Geral/ButtonIcon';
import { itensMenuCombustivel } from '../../../utils/dataMock/itensMenu';

const Demandas = () => {
	const { t } = useTranslation();
	const { colors } = defaultTheme;

	const columns = [
		'ID',
		t('demand'),
		t('createBy'),
		t('demandPhoto'),
		t('task'),
	];

	const filter = mes => {
		console.log(mes);
	};

	const deleteDemanda = id => {};
	return (
		<>
			<HeadSection>
				<TitleSection>
					Demandas
					<Filter
						label={'Todos'}
						itensMenu={itensMenuCombustivel}
						clickFunction={filter}
					/>
				</TitleSection>
				<ButtonIconAdd
					color={colors.neutral0}
					backgroundColor={colors.primary}
					textButton='Registro'
					marginBottom={true}
				/>
			</HeadSection>
			<div>
				<TableDemandas
					data={manejoDemandas}
					columns={columns}
					deleteFunction={deleteDemanda}
				/>
			</div>
		</>
	);
};

export default Demandas;

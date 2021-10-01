import React from 'react';
import { TitleSection } from '../../../components/Geral/styles';
import { HeadSection } from '../styles';

import { useTranslation } from 'react-i18next';
import { defaultTheme } from '../../../theme';

import TableData from '../../../components/Financeiro/TableData';
import Filter from '../../../components/Filter';
import { itensMenuCombustivel } from '../../../utils/dataMock/itensMenu';
import { manejoCombustivel } from '../../../utils/dataMock/mock';
import ButtonIconAdd from '../../../components/Geral/ButtonIcon';

const Combustivel = () => {
	const { t } = useTranslation();
	const { colors } = defaultTheme;

	const columns = [
		'ID',
		t('description'),
		t('quantity'),
		t('supplier'),
		t('payment'),
		t('supplyLocation'),
		t('driver'),
		t('vehicle'),
		t('dateTime'),
	];

	const filter = mes => {
		console.log(mes);
	};

	return (
		<>
			<HeadSection>
				<TitleSection>
					Resgistros de Combustível
					<Filter
						label={'Todos'}
						itensMenu={itensMenuCombustivel}
						clickFunction={filter}
					/>
				</TitleSection>
				<ButtonIconAdd
					color={colors.neutral0}
					backgroundColor={colors.primary}
					text='Registro'
					marginBottom={true}
				/>
			</HeadSection>
			<div>
				<TableData data={manejoCombustivel} columns={columns} />
			</div>
		</>
	);
};

export default Combustivel;

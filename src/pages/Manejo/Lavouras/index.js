import { useEffect } from 'react';
import { TitleSection } from '../../../components/Geral/styles';
import { HeadSection, ProgressContainer } from '../styles';

import { useTranslation } from 'react-i18next';
import { defaultTheme } from '../../../theme';

import { itensMenuCombustivel } from '../../../utils/dataMock/itensMenu';

import Filter from '../../../components/Filter';
import ButtonIconAdd from '../../../components/Geral/ButtonIcon';
import TableNormal from '../../../components/Table/TableNormal';
import { useTractor } from '../../../context/tractorContext';
import { manejoLavouras } from '../../../utils/dataMock/mock';
import { useTillage } from '../../../context/tillageContext';
import CircleLoading from '../../../components/LoadingCircle';

const Lavouras = () => {
	const { t } = useTranslation();
	const { colors } = defaultTheme;
	const { isLoading, tillage, getTillage, deleteTillage } = useTillage();

	useEffect(() => {
		getTillage();
	}, []);

	const columns = [
		'ID',
		t('typeAgriculture'),
		t('subarea'),
		t('numberBags'),
		t('weightPerBag'),
	];

	const filter = mes => {
		console.log(mes);
	};

	return (
		<>
			<HeadSection>
				<TitleSection>
					{t('agriculture')}
					<Filter
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
			{isLoading ? (
				<CircleLoading />
			) : (
				<TableNormal
					data={tillage}
					columns={columns}
					putInIcon={false}
					description={false}
					deleteFunction={deleteTillage}
				/>
			)}
		</>
	);
};

export default Lavouras;

import { useEffect } from 'react';
import { TitleSection } from '../../../components/Geral/styles';
import { HeadSection } from '../styles';

import { useTranslation } from 'react-i18next';
import { defaultTheme } from '../../../theme';

import { itensMenuCombustivel } from '../../../utils/dataMock/itensMenu';

import Filter from '../../../components/Filter';
import ButtonIconAdd from '../../../components/Geral/ButtonIcon';
import TableNormal from '../../../components/Table/TableNormal';
import { useTillage } from '../../../context/tillageContext';
import CircleLoading from '../../../components/LoadingCircle';
import { AgricultureModal } from '../../../components/Modals/Management/agriculture';
import { useModalsContainer } from '../../../context/modalsContext';
import { usePageContext } from '../../../context/pageContext';
import { manejoLavouras } from '../../../utils/dataMock/mock';

const Lavouras = () => {
	const { setPageTitle } = usePageContext();
	const { t } = useTranslation();
	const { openModal } = useModalsContainer();
	const { colors } = defaultTheme;
	const { isLoading, getTillage, deleteTillage } = useTillage();

	useEffect(() => {
		getTillage();
		setPageTitle('agriculture');
	}, []);

	const columns = [
		'ID',
		t('typeAgriculture'),
		t('subareas'),
		t('numberBags'),
		t('weightPerBag'),
	];

	const filter = (mes) => {
		console.log(mes);
	};

	return (
		<>
			<AgricultureModal />
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
					textButton="Registro"
					marginBottom={true}
					onClick={openModal}
				/>
			</HeadSection>
			{isLoading ? (
				<CircleLoading />
			) : (
				<TableNormal
					data={manejoLavouras}
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

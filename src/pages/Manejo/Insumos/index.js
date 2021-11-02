import { useEffect } from 'react';
import { TitleSection } from '../../../components/Geral/styles';
import { HeadSection } from '../styles';

import { useTranslation } from 'react-i18next';
import { defaultTheme } from '../../../theme';

import TableWithDescriptionIcon from '../../../components/Table/TableDescriptionWithIcon';
import Filter from '../../../components/Filter';
import { itensMenuCombustivel } from '../../../utils/dataMock/itensMenu';
import ButtonIconAdd from '../../../components/Geral/ButtonIcon';
import { useInput } from '../../../context/inputsContext';
import CircleLoading from '../../../components/LoadingCircle';
import { usePageContext } from '../../../context/pageContext';

const Insumos = () => {
	const { setPageTitle } = usePageContext();
	const { t } = useTranslation();
	const { colors } = defaultTheme;
	const { inputs, getInputs, isLoading, filter } = useInput();

	useEffect(() => {
		getInputs();
		setPageTitle('input');
	}, []);

	const columns = [
		'ID',
		t('supplies'),
		t('quantity'),
		t('unitMeasurement'),
		t('presentation'),
		t('document'),
		t('whoReceived'),
	];

	return (
		<>
			<HeadSection>
				<TitleSection>
					{t('input')}
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
				<div>
					<TableWithDescriptionIcon
						data={inputs}
						columns={columns}
						yesNo={true}
						columnYesNo={'document'}
					/>
				</div>
			)}
		</>
	);
};

export default Insumos;

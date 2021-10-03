import { InputAdornment } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { defaultTheme } from '../../../theme';

import Filter from '../../Filter';
import ButtonIconAdd from '../../Geral/ButtonIcon';

import Pdf from '../../../utils/image/Pdf.svg';
import Print from '../../../utils/image/Print.svg';
import SearchIcon from '../../../utils/image/Search.svg';

import {
	TableHeaderContainer,
	ButtonContainer,
	SearchInput,
	ContainerRight,
	ButtonIcon,
	ButtonWrapper,
	FilterContainer,
} from './styles';

import {
	itensMenuYear,
	itensMenuMonth,
} from '../../../utils/dataMock/itensMenu';

const TableHeader = () => {
	const { t } = useTranslation();
	const { colors } = defaultTheme;

	const filter = mes => {
		console.log(mes);
	};

	return (
		<TableHeaderContainer>
			<ButtonContainer>
				<ButtonWrapper>
					<ButtonIcon src={Print} />
				</ButtonWrapper>
				<ButtonWrapper>
					<ButtonIcon src={Pdf} />
				</ButtonWrapper>
			</ButtonContainer>
			<SearchInput
				label={t('search prescription')}
				type='search'
				variant='outlined'
				InputProps={{
					endAdornment: (
						<InputAdornment position='end'>
							<img src={SearchIcon} />
						</InputAdornment>
					),
				}}
				size='small'
			/>
			<ContainerRight>
				<FilterContainer>
					<Filter
						label={'2021'}
						itensMenu={itensMenuYear}
						clickFunction={filter}
					/>
					<Filter
						label={'Setembro'}
						itensMenu={itensMenuMonth}
						clickFunction={filter}
					/>
					<Filter
						label={'Todas as despesas'}
						itensMenu={itensMenuYear}
						clickFunction={filter}
					/>
				</FilterContainer>
				<ButtonIconAdd
					color={colors.neutral0}
					backgroundColor={colors.primary}
					textButton='Registro'
				/>
			</ContainerRight>
		</TableHeaderContainer>
	);
};

export default TableHeader;

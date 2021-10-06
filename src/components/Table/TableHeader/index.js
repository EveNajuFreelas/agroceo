import { InputAdornment } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { defaultTheme } from '../../../theme';

import Filter from '../../Filter';
import ButtonIconAdd from '../../Geral/ButtonIcon';

import { iconList } from '../../../../assets/Icons/icon-list';

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
					<ButtonIcon src={iconList.Print} />
				</ButtonWrapper>
				<ButtonWrapper>
					<ButtonIcon src={iconList.Pdf} />
				</ButtonWrapper>
			</ButtonContainer>
			<SearchInput
				label={t('search prescription')}
				type='search'
				variant='outlined'
				InputProps={{
					endAdornment: (
						<InputAdornment position='end'>
							<img src={iconList.SearchIcon} />
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

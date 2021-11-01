import { InputAdornment } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { defaultTheme } from '../../../theme';

import Filter from '../../Filter';
import ButtonIconAdd from '../../Geral/ButtonIcon';
import { useExpensesContainer } from '../../../context/financesContext/expensesContext';

import {
	TableHeaderContainer,
	ButtonContainer,
	SearchInput,
	ContainerRight,
	ButtonIcon,
	ButtonWrapper,
	FilterContainer,
	ButtonRight,
} from './styles';

import {
	itensMenuYear,
	itensMenuMonth,
} from '../../../utils/dataMock/itensMenu';
import { iconList } from '../../../assets/Icons/icon-list';
import { generatePDF, printOutPDF } from '../../../utils/functions';

const TableHeader = ({ data, columns, title }) => {
	const { clearContent, setModalState } = useExpensesContainer();
	const { t } = useTranslation();
	const { colors } = defaultTheme;

	const filter = (mes) => {
		console.log(mes);
	};

	const handleClick = () => {
		clearContent();
		setModalState(true);
	};

	return (
		<TableHeaderContainer>
			<ButtonContainer>
				<ButtonWrapper>
					<ButtonIcon
						src={iconList.print}
						onClick={() => printOutPDF(title, columns, data)}
					/>
				</ButtonWrapper>
				<ButtonWrapper>
					<ButtonIcon
						src={iconList.pdf}
						onClick={() => generatePDF(title, columns, data)}
					/>
				</ButtonWrapper>
			</ButtonContainer>
			<SearchInput
				label={t('search prescription')}
				type="search"
				variant="outlined"
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<img alt="icon search" src={iconList.searchIcon} />
						</InputAdornment>
					),
				}}
				size="small"
			/>
			<ContainerRight>
				<FilterContainer>
					<Filter itensMenu={itensMenuYear} clickFunction={filter} />
					<Filter itensMenu={itensMenuMonth} clickFunction={filter} />
					<Filter itensMenu={itensMenuYear} clickFunction={filter} />
				</FilterContainer>
			</ContainerRight>
			<ButtonRight>
				<ButtonIconAdd
					onClick={handleClick}
					color={colors.neutral0}
					backgroundColor={colors.primary}
					textButton="Registro"
				/>
			</ButtonRight>
		</TableHeaderContainer>
	);
};

export default TableHeader;

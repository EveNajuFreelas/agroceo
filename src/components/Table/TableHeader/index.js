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
} from './styles';

import {
	itensMenuYear,
	itensMenuMonth,
} from '../../../utils/dataMock/itensMenu';
import { iconList } from '../../../assets/Icons/icon-list';

import jsPDF from 'jspdf';
import 'jspdf-autotable';

const TableHeader = ({ data, columns, title }) => {
	const { clearContent, setModalState } = useExpensesContainer();
	const { t } = useTranslation();
	const { colors } = defaultTheme;
	const doc = new jsPDF();

	const filter = mes => {
		console.log(mes);
	};

	const createPDF = () => {
		doc.text(title, 15, 10);

		doc.autoTableSetDefaults({
			headStyles: { fillColor: colors.primary },
		});

		let dados = [];
		data.map(item => {
			dados.push(Object.values(item.data));
		});

		doc.autoTable({
			head: [columns],
			body: dados,
		});
	};

	const generatePDF = () => {
		createPDF();
		doc.save(`${title}.pdf`);
	};

	const printOutPDF = () => {
		createPDF();
		doc.output('dataurlnewwindow', `${title}.pdf`);
	};

	const handleClick = () => {
		clearContent();
		setModalState(true);
	}

	return (
		<TableHeaderContainer>
			<ButtonContainer>
				<ButtonWrapper>
					<ButtonIcon src={iconList.print} onClick={printOutPDF} />
				</ButtonWrapper>
				<ButtonWrapper>
					<ButtonIcon src={iconList.pdf} onClick={generatePDF} />
				</ButtonWrapper>
			</ButtonContainer>
			<SearchInput
				label={t('search prescription')}
				type='search'
				variant='outlined'
				InputProps={{
					endAdornment: (
						<InputAdornment position='end'>
							<img alt='icon search' src={iconList.searchIcon} />
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
					onClick={handleClick}
					color={colors.neutral0}
					backgroundColor={colors.primary}
					textButton='Registro'
				/>
			</ContainerRight>
		</TableHeaderContainer>
	);
};

export default TableHeader;

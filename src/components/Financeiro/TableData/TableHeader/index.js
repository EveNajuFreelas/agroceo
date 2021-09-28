import { Button, InputAdornment } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import Pdf from '../../../../utils/image/Pdf.svg';
import Print from '../../../../utils/image/Print.svg';
import SearchIcon from '../../../../utils/image/Search.svg';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

import {
	TableHeaderContainer,
	ButtonContainer,
	SearchInput,
	ContainerRight,
	ButtonIcon,
	ButtonWrapper,
	FilterContainer,
	AddCircle,
} from './styles';

import { defaultTheme } from '../../../../theme';
import Filter from '../../../Filter';

const TableHeader = () => {
	const { t } = useTranslation();
	const { colors } = defaultTheme;

	const itensMenuYear = ['Todas as Despesas', '2020', '2021'];

	const itensMenuMonth = ['Janeiro', 'Fevereiro', 'Março', 'Abril'];

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

				<Button
					variant='contained'
					startIcon={
						<AddCircleOutlineOutlinedIcon
							style={{ color: '#fff' }}
						/>
					}
					style={{
						backgroundColor: `${colors.primary}`,
						color: '#fff',
						boxShadow: 'none',
					}}
				>
					Registro
				</Button>
			</ContainerRight>
		</TableHeaderContainer>
	);
};

export default TableHeader;

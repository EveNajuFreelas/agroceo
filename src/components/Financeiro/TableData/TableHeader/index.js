import { Button, Select, TextField, InputAdornment } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import Pdf from '../../../../utils/image/Pdf.svg';
import Print from '../../../../utils/image/Print.svg';
import SearchIcon from '../../../../utils/image/Search.svg';

import {
	TableHeaderContainer,
	ButtonContainer,
	SearchInput,
	ContainerRight,
	ButtonIcon,
	ButtonWrapper,
} from './styles';

import { defaultTheme } from '../../../../theme';

const TableHeader = () => {
	const { t } = useTranslation();
	const { colors } = defaultTheme;

	return (
		<TableHeaderContainer>
			<ButtonContainer>
				<ButtonWrapper onClick={() => console.log('leele')}>
					<ButtonIcon src={Print} />
				</ButtonWrapper>
				<ButtonWrapper onClick={() => console.log('laala')}>
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
			/>
			<ContainerRight>
				<Select />
				<Select />
				<Select />
				<Button
					variant='contained'
					color={colors.primary}
					// endIcon={<Icon>send</Icon>}
				>
					Registro
				</Button>
			</ContainerRight>
		</TableHeaderContainer>
	);
};

export default TableHeader;

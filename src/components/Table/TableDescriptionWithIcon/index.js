import React from 'react';
import { defaultTheme } from '../../../theme';
import LabelWithIcon from '../../LabelWithIcon';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Checkbox,
	Link,
} from '@material-ui/core';
import { StyledTableContainer } from '../styles';
import { iconList } from '../../../assets/Icons/icon-list';
import { useExpensesContainer } from '../../../context/financesContext/expensesContext';

const TableWithDescriptionIcon = ({ data, columns }) => {
	const { setActiveContent, setModalState } = useExpensesContainer();
	const { colors } = defaultTheme;

	let keys = Object.keys(data[0]);

	const handleClick = () => {
		setActiveContent(data);
		setModalState(true);
	}

	return (
		<StyledTableContainer>
			<Table>
				<TableHead>
					<TableRow style={{ height: '50px' }}>
						<TableCell padding='checkbox'>
							<Checkbox style={{ color: 'green' }} />
						</TableCell>
						{columns.map((column, index) => {
							return index === 0 || index === 1 ? (
								<TableCell align='left'>{column}</TableCell>
							) : (
								<TableCell align='right'>{column}</TableCell>
							);
						})}
						<TableCell />
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map(row => {
						return (
							<TableRow key={row.id}>
								<TableCell padding='checkbox'>
									<Checkbox
										style={{ color: 'green' }}
										//checked={isItemSelected}
										inputProps={{
											'aria-labelledby': row.id,
										}}
									/>
								</TableCell>

								<TableCell
									width='50px'
									style={{ color: colors.neutral6 }}
								>
									{row.id}
								</TableCell>

								<TableCell align='left' width='200px'>
									<Link component='button' color='inherit' onClick={handleClick}>
										<LabelWithIcon
											iconName={'Insumos'}
											title={row.Description}
										/>
									</Link>
								</TableCell>

								{keys.map((column, index) => {
									return (
										index > 1 && (
											<TableCell
												align='right'
												key={index}
											>
												{row[column]}
											</TableCell>
										)
									);
								})}

								<TableCell align='center'>
									<img
										alt='icon edit'
										style={{
											marginRight: 10,
										}}
										src={iconList.edit}
									/>
									<img
										alt='icon delete'
										src={iconList.deleteIcon}
									/>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</StyledTableContainer>
	);
};

export default TableWithDescriptionIcon;

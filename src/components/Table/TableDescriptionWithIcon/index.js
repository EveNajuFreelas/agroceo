import React from 'react';
import { defaultTheme } from '../../../theme';
import LabelWithIcon from '../../LabelWithIcon';
import {
	Table,
	TableBody,
	TableCell,
	TableRow,
	Checkbox,
	Link,
} from '@material-ui/core';
import { StyledTableContainer } from '../styles';
import { iconList } from '../../../assets/Icons/icon-list';
import { useExpensesContainer } from '../../../context/financesContext/expensesContext';
import TableHeadDefault from '../TableHead';
import YesNo from '../yesNo';
import NoRegister from '../../NoRegistry';

const TableWithDescriptionIcon = ({ data, columns, columnYesNo, yesNo }) => {
	const { editActiveContent, setModalState } = useExpensesContainer();
	const { colors } = defaultTheme;

	if (data.length === 0) return <NoRegister />;
	let keys = Object.keys(data[0].data);

	const handleClick = info => {
		editActiveContent(info);
		setModalState(true);
	};

	return (
		<StyledTableContainer>
			<Table>
				<TableHeadDefault columns={columns} />
				<TableBody>
					{data.map(row => {
						return (
							<TableRow key={row.data.id}>
								<TableCell padding='checkbox'>
									<Checkbox
										style={{ color: 'green' }}
										//checked={isItemSelected}
										inputProps={{
											'aria-labelledby': row.data.id,
										}}
									/>
								</TableCell>

								<TableCell
									width='50px'
									style={{ color: colors.neutral6 }}
								>
									{row.data.id}
								</TableCell>

								<TableCell align='left' width='200px'>
									<Link
										component='button'
										color='inherit'
										onClick={() => handleClick(row.data)}
									>
										<LabelWithIcon
											iconName={'Insumos'}
											title={row.data.description}
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
												{yesNo &&
												column === columnYesNo ? (
													<YesNo
														text={row.data[column]}
													/>
												) : (
													row.data[column]
												)}
											</TableCell>
										)
									);
								})}

								<TableCell width={60} align='center'>
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

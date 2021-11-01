import React, { useEffect, useState } from 'react';
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

const TableWithDescriptionIcon = ({
	data,
	columns,
	columnYesNo,
	yesNo,
	title,
}) => {
	const { editActiveContent, setModalState } = useExpensesContainer();
	const { colors } = defaultTheme;

	const [checkedItems, setCheckedItems] = useState([]);

	if (data.length === 0) return <NoRegister />;
	let keys = Object.keys(data[0].data);

	const handleCheck = (e, item) => {
		setCheckedItems(
			checkedItems.includes(item)
				? checkedItems.filter((c) => c !== item)
				: [...checkedItems, item]
		);
	};

	const deleteFunction = () => {
		console.log(checkedItems);
	};

	const handleClick = (info) => {
		editActiveContent(info);
		setModalState(true);
	};

	return (
		<StyledTableContainer>
			<Table>
				<TableHeadDefault
					columns={columns}
					hasChecked={checkedItems.length}
					deleteFunction={deleteFunction}
					data={checkedItems.length > 0 ? checkedItems : data}
					title={title}
				/>
				<TableBody>
					{data.map((row) => {
						return (
							<TableRow key={row.data.id}>
								<TableCell padding="checkbox">
									<Checkbox
										style={{ color: 'green' }}
										onChange={(e) => handleCheck(e, row)}
										checked={checkedItems.includes(row)}
										inputProps={{
											'aria-labelledby': row.data.id,
										}}
									/>
								</TableCell>

								<TableCell
									width="50px"
									style={{ color: colors.neutral6 }}
								>
									{row.data.id}
								</TableCell>

								<TableCell align="left" width="200px">
									<Link component="button" color="inherit">
										<LabelWithIcon
											iconName={'entrada'}
											title={row.data.description}
										/>
									</Link>
								</TableCell>

								{keys.map((column, index) => {
									return (
										index > 1 && (
											<TableCell
												align="right"
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

								<TableCell width={60} align="center">
									<img
										alt="icon edit"
										style={{
											marginRight: 10,
											cursor: 'pointer',
										}}
										src={iconList.edit}
										onClick={() => handleClick(row.data)}
									/>
									<img
										alt="icon delete"
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

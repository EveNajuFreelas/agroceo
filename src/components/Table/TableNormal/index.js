import { useState } from 'react';
import { defaultTheme } from '../../../theme';

import {
	Table,
	TableBody,
	TableCell,
	TableRow,
	Checkbox,
} from '@material-ui/core';

import { StyledTableContainer } from '../styles';
import { iconList } from '../../../assets/Icons/icon-list';
import TableHeadDefault from '../TableHead';
import { useModalsContainer } from '../../../context/modalsContext';
import NoRegister from '../../NoRegistry';

const TableNormal = ({
	data,
	columns,
	putInIcon,
	description,
	deleteFunction,
	title,
}) => {
	const { openUtilizationModal } = useModalsContainer();
	const { colors } = defaultTheme;

	const [checkedItems, setCheckedItems] = useState([]);
	const COLUMN_INITIAL = description ? 1 : 0;

	if (data.length === 0) return <NoRegister />;
	let keys = Object.keys(data[0]);

	const handleCheck = (e, item) => {
		setCheckedItems(
			checkedItems.includes(item)
				? checkedItems.filter((c) => c !== item)
				: [...checkedItems, item]
		);
	};

	return (
		<StyledTableContainer>
			<Table>
				<TableHeadDefault
					columns={columns}
					hasChecked={checkedItems.length}
					deleteFunction={deleteFunction}
					data={data}
					checkedItems={checkedItems}
					title={title}
					setCheckedItems={setCheckedItems}
				/>
				<TableBody>
					{data.map((row) => {
						return (
							<TableRow key={row.id}>
								<TableCell padding="checkbox">
									<Checkbox
										style={{ color: 'green' }}
										onChange={(e) => handleCheck(e, row)}
										checked={checkedItems.includes(row)}
										inputProps={{
											'aria-labelledby': row.id,
										}}
									/>
								</TableCell>

								<TableCell
									width="50px"
									style={{ color: colors.neutral6 }}
								>
									{row.id}
								</TableCell>

								{description && (
									<TableCell>{row.description}</TableCell>
								)}

								{keys.map((column, index) => {
									return (
										//tem alguma forma de fazer melhor certeza k k k k
										index > COLUMN_INITIAL && (
											<TableCell
												align={
													description || index !== 1
														? 'right'
														: 'left'
												}
												key={index}
											>
												{row[column]}
											</TableCell>
										)
									);
								})}

								<TableCell width={100} align="center">
									{putInIcon && (
										<img
											alt="icon put in"
											style={{
												marginRight: 10,
												cursor: 'pointer',
											}}
											src={iconList.putIn}
											onClick={() =>
												openUtilizationModal()
											}
										/>
									)}
									<img
										alt="icon edit"
										style={{
											marginRight: 10,
											cursor: 'pointer',
										}}
										src={iconList.edit}
									/>
									<img
										alt="icon delete"
										style={{
											cursor: 'pointer',
										}}
										src={iconList.deleteIcon}
										onClick={() => deleteFunction(row.id)}
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

export default TableNormal;

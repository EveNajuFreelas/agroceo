import React, { useState } from 'react';
import { defaultTheme } from '../../../theme';

import {
	Table,
	TableBody,
	TableCell,
	TableRow,
	Checkbox,
	TableHead,
} from '@material-ui/core';

import { StyledTableContainer } from '../styles';
import { iconList } from '../../../assets/Icons/icon-list';
import ChipTable from '../Chip';
import { useModalsContainer } from '../../../context/modalsContext';
import TableHeadDefault from '../TableHead';

const TableWithChip = ({ data, columns, deleteFunction, thirdLeft }) => {
	const { colors } = defaultTheme;
	const { editActiveContent, openUtilizationModal } = useModalsContainer();

	const [checkedItems, setCheckedItems] = useState([]);

	let keys = data[0] && Object.keys(data[0].data);
	const lastColumn = keys && keys.length - 1;

	const handleCheck = (e, item) => {
		setCheckedItems(
			checkedItems.includes(item)
				? checkedItems.filter((c) => c !== item)
				: [...checkedItems, item]
		);
	};

	const handleEditClick = (content) => {
		editActiveContent(content);
		openUtilizationModal();
	};

	return (
		<StyledTableContainer>
			<Table>
				<TableHeadDefault
					columns={columns}
					hasChecked={checkedItems.length}
					deleteFunction={deleteFunction}
					data={data}
					secondLeft
					thirdLeft={thirdLeft}
					checkedItems={checkedItems}
					title={'something'}
					setCheckedItems={setCheckedItems}
				/>
				<TableBody>
					{data.map((row) => {
						return (
							<TableRow key={row.id}>
								<TableCell padding="checkbox">
									<Checkbox
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
									{row.data.id}
								</TableCell>

								{keys.map((column, index) => {
									return (
										index > 0 && (
											<TableCell
												width={index === 1 && 200}
												align={
													lastColumn === index
														? 'right'
														: 'left'
												}
												key={index}
											>
												{index === keys.length - 2 &&
												row.data[column] ? (
													<ChipTable
														items={row.data[column]}
													/>
												) : (
													row.data[column] || '--'
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
										onClick={() => handleEditClick(row)}
									/>
									<img
										alt="icon delete"
										style={{ cursor: 'pointer' }}
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

export default TableWithChip;

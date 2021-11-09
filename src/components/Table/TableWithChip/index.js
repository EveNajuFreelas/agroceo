import React from 'react';
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

const TableWithChip = ({ data, columns, deleteFunction }) => {
	const { colors } = defaultTheme;
	const { editActiveContent, openUtilizationModal } = useModalsContainer();

	let keys = Object.keys(data[0]);
	const lastColumn = keys.length - 1;

	const handleEditClick = (content) => {
		editActiveContent(content);
		openUtilizationModal();
	};

	return (
		<StyledTableContainer>
			<Table>
				<TableHead>
					<TableRow style={{ height: '50px' }}>
						<TableCell padding="checkbox">
							<Checkbox style={{ color: 'green' }} />
						</TableCell>
						{columns.map((column, index) => {
							return lastColumn === index ? (
								<TableCell align="right">{column}</TableCell>
							) : (
								<TableCell align="left">{column}</TableCell>
							);
						})}
						<TableCell />
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row) => {
						return (
							<TableRow key={row.id}>
								<TableCell padding="checkbox">
									<Checkbox
										style={{ color: 'green' }}
										//checked={isItemSelected}
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
												row[column] ? (
													<ChipTable
														items={row[column]}
													/>
												) : (
													row[column] || '--'
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

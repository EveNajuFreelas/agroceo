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
import TableHeadDefault from '../TableHead';
import ChipTable from '../Chip';

const TableWithChip = ({ data, columns }) => {
	const { colors } = defaultTheme;

	console.log('data', data);
	console.log('columns', columns);

	let keys = Object.keys(data[0]);
	const lastColumn = keys.length - 1;

	return (
		<StyledTableContainer>
			<Table>
				<TableHead>
					<TableRow style={{ height: '50px' }}>
						<TableCell padding='checkbox'>
							<Checkbox style={{ color: 'green' }} />
						</TableCell>
						{columns.map((column, index) => {
							return lastColumn === index ? (
								<TableCell align='right'>{column}</TableCell>
							) : (
								<TableCell align='left'>{column}</TableCell>
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

								{keys.map((column, index) => {
									//console.log('content', row[column]);
									return (
										//tem alguma forma de fazer melhor certeza k k k k

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

export default TableWithChip;

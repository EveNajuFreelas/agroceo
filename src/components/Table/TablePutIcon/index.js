import React from 'react';

import { defaultTheme } from '../../../theme';
import { useTranslation } from 'react-i18next';

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Checkbox,
} from '@material-ui/core';

import { StyledTableContainer } from '../styles';

import Edit from '../../../utils/Icons/Edit.svg';
import Delete from '../../../utils/Icons/Delete.svg';
import PutIn from '../../../utils/Icons/PutIn.svg';

const TablePutIcon = ({ data, columns, putInIcon, description }) => {
	const { colors, text } = defaultTheme;
	const COLUMN_INITIAL = description ? 1 : 0;

	//const [selected, setSelected] = React.useState([]);

	//const isSelected = name => selected.indexOf(name) !== -1;

	let keys = Object.keys(data[0]);

	return (
		<StyledTableContainer>
			<Table>
				<TableHead>
					<TableRow style={{ height: '50px' }}>
						<TableCell padding='checkbox'>
							<Checkbox
								style={{ color: 'green' }}
								//checked={isItemSelected}
								// inputProps={{
								// 	'aria-labelledby': row.id,
								// }}
							/>
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

								{description && (
									<TableCell>{row.description}</TableCell>
								)}

								{keys.map((column, index) => {
									return (
										//tem alguma forma de fazer melhor certeza k k k k
										index > COLUMN_INITIAL && (
											<TableCell
												align={
													description || index != 1
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

								<TableCell align='center'>
									{putInIcon && (
										<img
											style={{
												marginRight: 10,
											}}
											src={PutIn}
										/>
									)}
									<img
										style={{
											marginRight: 10,
										}}
										src={Edit}
									/>
									<img src={Delete} />
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</StyledTableContainer>
	);
};

export default TablePutIcon;

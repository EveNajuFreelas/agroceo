import React, { useState } from 'react';
import { defaultTheme } from '../../../theme';

import {
	Table,
	TableBody,
	TableCell,
	TableRow,
	Checkbox,
	Box,
	Collapse,
	IconButton,
	makeStyles,
	TableHead,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { iconList } from '../../../assets/Icons/icon-list';

const CollapseRow = ({ row, deleteFunction, columns }) => {
	const { colors } = defaultTheme;
	const [open, setOpen] = useState(false);

	let columnsContent = Object.keys(row.content[0]);

	const useRowStyles = makeStyles({
		root: {
			'& > *': {
				borderBottom: 'unset',
			},
		},
	});
	const classes = useRowStyles();

	return (
		<>
			<TableRow>
				<TableCell>
					<IconButton size='small' onClick={() => setOpen(!open)}>
						{open ? (
							<KeyboardArrowUpIcon />
						) : (
							<KeyboardArrowDownIcon />
						)}
					</IconButton>
				</TableCell>
				<TableCell padding='checkbox'>
					<Checkbox
						style={{ color: 'green' }}
						//checked={isItemSelected}
						inputProps={{
							'aria-labelledby': row.id,
						}}
					/>
				</TableCell>

				<TableCell width='50px' style={{ color: colors.neutral6 }}>
					{row.id}
				</TableCell>

				<TableCell component='th' scope='row'>
					{row.lot}
				</TableCell>
				<TableCell align='right'>{row.nameLot}</TableCell>
				<TableCell align='right'>{row.subarea}</TableCell>
				<TableCell align='right'>{row.total}</TableCell>
				<TableCell width={100} align='center'>
					<img
						alt='icon edit'
						style={{
							marginRight: 10,
							cursor: 'pointer',
						}}
						src={iconList.edit}
					/>
					<img
						alt='icon delete'
						style={{
							cursor: 'pointer',
						}}
						src={iconList.deleteIcon}
						onClick={() => deleteFunction(row.id)}
					/>
				</TableCell>
			</TableRow>
			<TableRow className={classes.root}>
				<TableCell
					style={{
						padding: 0,
					}}
					colSpan={7}
				>
					<Collapse in={open} timeout='auto' unmountOnExit>
						<Box>
							<Table>
								<TableHead>
									<TableRow className={classes.tableRow}>
										<TableCell
											width={'1px'}
											style={{
												background: `${colors.neutral}`,
												margin: 0,
												fontWeight: 700,
											}}
										/>
										{columns.map((column, index) => {
											return index !==
												columns.length - 1 ? (
												<TableCell
													align='left'
													style={{
														fontWeight: 700,
														lineHeight: '1px',
													}}
												>
													{column}
												</TableCell>
											) : (
												<TableCell
													align='right'
													style={{ fontWeight: 700 }}
												>
													{column}
												</TableCell>
											);
										})}
									</TableRow>
								</TableHead>

								<TableBody>
									{row.content.map(contentRow => (
										<TableRow key={contentRow.date}>
											<TableCell
												width={'1px'}
												style={{
													background: `${colors.neutral}`,
													margin: 0,
												}}
											/>
											{columnsContent.map(
												(column, index) => {
													return index ===
														columnsContent.length -
															1 ? (
														<TableCell align='right'>
															{contentRow[column]}
														</TableCell>
													) : (
														<TableCell align='left'>
															{contentRow[column]}
														</TableCell>
													);
												}
											)}
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	);
};

export default CollapseRow;

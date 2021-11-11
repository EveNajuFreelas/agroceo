import { useEffect, useState } from 'react';
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

const CollapseRow = ({
	row,
	deleteFunction,
	columns,
	checkedItems,
	handleCheck,
}) => {
	const { colors } = defaultTheme;
	const [open, setOpen] = useState(false);

	let columnsContent = Object.keys(row.data.content[0]);

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
					<IconButton size="small" onClick={() => setOpen(!open)}>
						{open ? (
							<KeyboardArrowUpIcon />
						) : (
							<KeyboardArrowDownIcon />
						)}
					</IconButton>
				</TableCell>
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

				<TableCell width="50px" style={{ color: colors.neutral6 }}>
					{row.data.id}
				</TableCell>

				<TableCell component="th" scope="row">
					{row.data.lot}
				</TableCell>
				<TableCell align="right">{row.data.nameLot}</TableCell>
				<TableCell align="right">{row.data.subarea}</TableCell>
				<TableCell align="right">{row.data.total}</TableCell>
				<TableCell width={100} align="center">
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
						onClick={() => deleteFunction(row.data.id)}
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
					<Collapse in={open} timeout="auto" unmountOnExit>
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
													align="left"
													style={{
														fontWeight: 700,
														lineHeight: '1px',
													}}
												>
													{column}
												</TableCell>
											) : (
												<TableCell
													align="right"
													style={{ fontWeight: 700 }}
												>
													{column}
												</TableCell>
											);
										})}
									</TableRow>
								</TableHead>

								<TableBody>
									{row.data.content.map((contentRow) => (
										<TableRow>
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
														<TableCell align="right">
															{contentRow[column]}
														</TableCell>
													) : (
														<TableCell align="left">
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

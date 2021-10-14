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
	Typography,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { StyledTableContainer } from '../styles';
import { iconList } from '../../../assets/Icons/icon-list';
import TableHeadDefault from '../TableHead';
import { useTranslation } from 'react-i18next';

const useRowStyles = makeStyles({
	root: {
		'& > *': {
			//borderBottom: 'unset',
		},
	},
});
const TableCollapse = ({ data, columns, deleteFunction }) => {
	const { colors } = defaultTheme;
	const [open, setOpen] = useState(false);
	const { t } = useTranslation();
	const classes = useRowStyles();

	let columnsContent = Object.keys(data[0].content[0]);

	const columnsAnimais = [
		t('raceSpecies'),
		t('type'),
		t('sex'),
		t('age'),
		t('quantity'),
	];

	return (
		<StyledTableContainer>
			<Table>
				<TableHeadDefault columns={columns} space={true} />
				<TableBody>
					{data.map(row => {
						return (
							<>
								<TableRow className={classes.root}>
									<TableCell>
										<IconButton
											size='small'
											onClick={() => setOpen(!open)}
										>
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

									<TableCell
										width='50px'
										style={{ color: colors.neutral6 }}
									>
										{row.id}
									</TableCell>

									<TableCell component='th' scope='row'>
										{row.lot}
									</TableCell>
									<TableCell align='right'>
										{row.nameLot}
									</TableCell>
									<TableCell align='right'>
										{row.subarea}
									</TableCell>
									<TableCell align='right'>
										{row.total}
									</TableCell>
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
											onClick={() =>
												deleteFunction(row.id)
											}
										/>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell
										style={{
											paddingBottom: 0,
											paddingTop: 0,
										}}
										colSpan={6}
									>
										<Collapse
											in={open}
											timeout='auto'
											unmountOnExit
										>
											<Box margin={1}>
												<Table size='small'>
													<TableHead>
														<TableRow>
															{columnsAnimais.map(
																(
																	column,
																	index
																) => {
																	return index !==
																		columnsAnimais.length -
																			1 ? (
																		<TableCell align='left'>
																			{
																				column
																			}
																		</TableCell>
																	) : (
																		<TableCell align='right'>
																			{
																				column
																			}
																		</TableCell>
																	);
																}
															)}
														</TableRow>
													</TableHead>

													<TableBody>
														{row.content.map(
															contentRow => (
																<TableRow
																	key={
																		contentRow.date
																	}
																>
																	{columnsContent.map(
																		(
																			column,
																			index
																		) => {
																			return index ===
																				columnsContent.length -
																					1 ? (
																				<TableCell align='right'>
																					{
																						contentRow[
																							column
																						]
																					}
																				</TableCell>
																			) : (
																				<TableCell align='left'>
																					{
																						contentRow[
																							column
																						]
																					}
																				</TableCell>
																			);
																		}
																	)}
																</TableRow>
															)
														)}
													</TableBody>
												</Table>
											</Box>
										</Collapse>
									</TableCell>
								</TableRow>
							</>
						);
					})}
				</TableBody>
			</Table>
		</StyledTableContainer>
	);
};

export default TableCollapse;

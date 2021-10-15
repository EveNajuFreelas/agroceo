import React from 'react';
import { defaultTheme } from '../../../../theme';

import {
	Table,
	TableBody,
	TableCell,
	TableRow,
	Checkbox,
} from '@material-ui/core';

import { StyledTableContainer } from '../../styles';
import { iconList } from '../../../../assets/Icons/icon-list';
import TableHeadDefault from '../../TableHead';
import YesNo from '../../yesNo';

const TableDemandas = ({ data, columns, deleteFunction }) => {
	const { colors } = defaultTheme;

	console.log(data.length != 0);

	if (data.length === 0) {
		return <span>Sem registros</span>;
	}

	let keys = Object.keys(data[0]);

	return (
		<StyledTableContainer>
			<Table>
				<TableHeadDefault columns={columns} />
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

								<TableCell align='left'>{row.demand}</TableCell>

								<TableCell align='right'>
									{row.createBy}
								</TableCell>

								<TableCell align='right'>
									<a
										href={row.demandPhoto}
										style={{ color: `${colors.primary}` }}
									>
										Link da foto
									</a>
								</TableCell>

								<TableCell align='right'>
									<YesNo text={row.task} />
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

export default TableDemandas;

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
import NoRegister from '../../../NoRegistry';
import { useTranslation } from 'react-i18next';

const TableTarefas = ({ data, columns, deleteFunction }) => {
	const { colors } = defaultTheme;
	const { t } = useTranslation();

	if (data.length === 0) {
		return <NoRegister />;
	}

	const getColor = Object.freeze({
		open: '#13ABCD',
		refused: colors.auxiliar,
		done: colors.primary,
		unstarted: '#F2B705',
	});

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

								<TableCell align='left'>{row.title}</TableCell>

								<TableCell align='right'>
									{row.expected}
								</TableCell>

								<TableCell align='right'>
									{row.centers}
								</TableCell>

								<TableCell
									align='right'
									style={{ color: getColor[row.status] }}
								>
									{t(row.status)}
								</TableCell>

								<TableCell align='right'>
									{row.responsible}
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

export default TableTarefas;

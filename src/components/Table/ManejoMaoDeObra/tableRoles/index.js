import React from 'react';

import { defaultTheme } from '../../../../theme';
import { useTranslation } from 'react-i18next';

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Checkbox,
} from '@material-ui/core';

import { StyledTableContainer } from '../../styles';

import Edit from '../../../../utils/image/Edit.svg';
import Delete from '../../../../utils/image/Delete.svg';
import TableChip from '../../TableChip';

const TableRoles = ({ data }) => {
	const { t } = useTranslation();

	const { colors, text } = defaultTheme;

	//const [selected, setSelected] = React.useState([]);

	//const isSelected = name => selected.indexOf(name) !== -1;

	let keys = Object.keys(data[0]);

	const columns = ['ID', t('functionName'), t('obligations'), t('daysWeek')];

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
							return index != 3 ? (
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

								<TableCell width={200}>{row.Funcao}</TableCell>

								<TableCell>
									<TableChip obligations={row.Obligations} />
								</TableCell>

								<TableCell align='right'>
									{row.Days.join(', ')}
								</TableCell>

								<TableCell align='center'>
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

export default TableRoles;

import React from 'react';

import { defaultTheme } from '../../../theme';
import LabelWithIcon from '../../LabelWithIcon';
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

import { iconList } from '../../../assets/Icons/icon-list';

const TableWithDescriptionIcon = ({ data, columns }) => {
	const { t } = useTranslation();
	const { colors, text } = defaultTheme;
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

								<TableCell align='left' width='200px'>
									<LabelWithIcon
										iconName={'Insumos'}
										title={row.Description}
									/>
								</TableCell>

								{keys.map((column, index) => {
									return (
										index > 1 && (
											<TableCell
												align='right'
												key={index}
											>
												{row[column]}
											</TableCell>
										)
									);
								})}

								<TableCell align='center'>
									<img
										style={{
											marginRight: 10,
										}}
										src={iconList.edit}
									/>
									<img src={iconList.Delete} />
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</StyledTableContainer>
	);
};

export default TableWithDescriptionIcon;

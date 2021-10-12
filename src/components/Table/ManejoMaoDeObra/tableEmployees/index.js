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

import LabelWithIcon from '../../../LabelWithIcon';
import { iconList } from '../../../../assets/Icons/icon-list';

const TableEmployees = ({ data }) => {
	const { t } = useTranslation();

	const { colors } = defaultTheme;

	let keys = Object.keys(data[0]);

	const columns = [
		'ID',
		t('name'),
		t('nickname'),
		t('occupation'),
		t('contact'),
		t('typeContract'),
	];

	return (
		<StyledTableContainer>
			<Table>
				<TableHead>
					<TableRow style={{ height: '50px' }}>
						<TableCell padding='checkbox'>
							<Checkbox style={{ color: 'green' }} />
						</TableCell>
						{columns.map((column, index) => {
							console.log(column, index);
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
						row = row.data;
						console.log(row);
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

								<TableCell width='200px'>{row.name}</TableCell>

								<TableCell align='right'>
									{row.surName}
								</TableCell>

								<TableCell align='right'>
									{row.role || '--'}
								</TableCell>

								<TableCell
									align='right'
									key={row.id}
									width='300px'
								>
									<LabelWithIcon
										title={row.phone}
										iconName={'Brasil'}
										justifyEnd={true}
									/>
								</TableCell>

								<TableCell align='right'>
									{row.contract}
								</TableCell>

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

export default TableEmployees;

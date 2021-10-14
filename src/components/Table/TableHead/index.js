import React from 'react';

import { TableCell, TableHead, TableRow, Checkbox } from '@material-ui/core';

const TableHeadDefault = ({ columns }) => {
	return (
		<TableHead>
			<TableRow style={{ height: '50px' }}>
				<TableCell padding='checkbox'>
					<Checkbox style={{ color: 'green' }} />
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
	);
};

export default TableHeadDefault;

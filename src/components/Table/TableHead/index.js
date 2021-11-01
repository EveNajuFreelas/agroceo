import React from 'react';

import { TableCell, TableHead, TableRow, Checkbox } from '@material-ui/core';
import { iconList } from '../../../assets/Icons/icon-list';
import { generatePDF, printOutPDF } from '../../../utils/functions';
import { ButtonIcon } from '../TableHeader/styles';

const TableHeadDefault = ({
	columns,
	space,
	hasChecked,
	deleteFunction,
	data,
	title,
}) => {
	return (
		<TableHead>
			<TableRow style={{ height: '50px' }}>
				{space && <TableCell width={1} />}
				<TableCell padding="checkbox">
					<Checkbox style={{ color: 'green' }} />
				</TableCell>
				{columns.map((column, index) => {
					return index === 0 || index === 1 ? (
						<TableCell align="left">{column}</TableCell>
					) : (
						<TableCell align="right">{column}</TableCell>
					);
				})}
				<TableCell align="right">
					{hasChecked > 0 && (
						<div style={{ display: 'flex' }}>
							<img
								alt="icon delete"
								src={iconList.deleteIcon}
								onClick={deleteFunction}
							/>
							<ButtonIcon
								src={iconList.print}
								onClick={() =>
									printOutPDF(title, columns, data)
								}
							/>
							<ButtonIcon
								src={iconList.pdf}
								onClick={() =>
									generatePDF(title, columns, data)
								}
							/>
						</div>
					)}
				</TableCell>
			</TableRow>
		</TableHead>
	);
};

export default TableHeadDefault;

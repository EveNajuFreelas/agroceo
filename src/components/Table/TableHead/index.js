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
	checkedItems,
	setCheckedItems,
	thirdLeft,
	secondLeft,
}) => {
	let fullChecked = checkedItems.length === data.length;

	const handleCheck = () => {
		console.log(checkedItems);
		checkedItems.length > 1 ? setCheckedItems([]) : setCheckedItems(data);
	};

	return (
		<TableHead>
			<TableRow style={{ height: '50px' }}>
				{space && <TableCell width={1} />}
				<TableCell padding="checkbox">
					<Checkbox
						checked={fullChecked}
						onChange={() => handleCheck()}
					/>
				</TableCell>
				{columns.map((column, index) => {
					return index === 0 ||
						index === 1 ||
						(secondLeft && index === 2) ||
						(thirdLeft && index === 3) ? (
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
								style={{ padding: '10px', cursor: 'pointer' }}
							/>
							<ButtonIcon
								src={iconList.print}
								onClick={() =>
									printOutPDF(title, columns, checkedItems)
								}
							/>
							<ButtonIcon
								src={iconList.pdf}
								onClick={() =>
									generatePDF(title, columns, checkedItems)
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

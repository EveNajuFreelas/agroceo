import React, { useState } from 'react';
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
	const [checkedItems, setCheckedItems] = useState([]);

	if (data.length === 0) {
		return <NoRegister />;
	}

	const handleCheck = (e, item) => {
		setCheckedItems(
			checkedItems.includes(item)
				? checkedItems.filter((c) => c !== item)
				: [...checkedItems, item]
		);
	};
	const getColor = Object.freeze({
		open: '#13ABCD',
		refused: colors.auxiliar,
		done: colors.primary,
		unstarted: '#F2B705',
	});

	return (
		<StyledTableContainer>
			<Table>
				<TableHeadDefault
					columns={columns}
					hasChecked={checkedItems.length}
					deleteFunction={deleteFunction}
					data={data}
					checkedItems={checkedItems}
					title={t('task')}
					setCheckedItems={setCheckedItems}
				/>
				<TableBody>
					{data.map((row) => {
						return (
							<TableRow key={row.data.id}>
								<TableCell padding="checkbox">
									<Checkbox
										onChange={(e) => handleCheck(e, row)}
										checked={checkedItems.includes(row)}
										inputProps={{
											'aria-labelledby': row.data.id,
										}}
									/>
								</TableCell>
								<TableCell
									width="50px"
									style={{ color: colors.neutral6 }}
								>
									{row.data.id}
								</TableCell>

								<TableCell align="left">
									{row.data.title}
								</TableCell>

								<TableCell align="right">
									{row.data.expected}
								</TableCell>

								<TableCell align="right">
									{row.data.centers}
								</TableCell>

								<TableCell
									align="right"
									style={{ color: getColor[row.data.status] }}
								>
									{t(row.data.status)}
								</TableCell>

								<TableCell align="right">
									{row.data.responsible}
								</TableCell>

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
										onClick={() =>
											deleteFunction(row.data.id)
										}
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

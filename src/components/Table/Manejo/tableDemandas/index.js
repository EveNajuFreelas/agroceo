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
import YesNo from '../../yesNo';
import NoRegister from '../../../NoRegistry';
import { useTranslation } from 'react-i18next';
import { useModalsContainer } from '../../../../context/modalsContext';

const TableDemandas = ({ data, columns, deleteFunction }) => {
	const { colors } = defaultTheme;
	const { t } = useTranslation();
	const [checkedItems, setCheckedItems] = useState([]);
	const { editActiveContent, openModal } = useModalsContainer();

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

	const handleClick = data => {
		console.log(data);
		editActiveContent(data);
		openModal();
	}

	return (
		<StyledTableContainer>
			<Table>
				<TableHeadDefault
					columns={columns}
					hasChecked={checkedItems.length}
					deleteFunction={deleteFunction}
					data={data}
					checkedItems={checkedItems}
					title={t('demands')}
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
									{row.data.description}
								</TableCell>

								<TableCell align="right">
									{row.data.createBy}
								</TableCell>

								<TableCell align="right">
									<a
										href={row.data.photo}
										style={{ color: `${colors.primary}` }}
									>
										Link da foto
									</a>
								</TableCell>

								<TableCell align="right">
									<YesNo text={row.data.task} />
								</TableCell>

								<TableCell width={100} align="center">
									<img
										alt="icon edit"
										style={{
											marginRight: 10,
											cursor: 'pointer',
										}}
										src={iconList.edit}
										onClick={() => handleClick(row.data)}
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

export default TableDemandas;

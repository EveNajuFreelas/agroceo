import { useState } from 'react';

import { defaultTheme } from '../../../../theme';
import { useTranslation } from 'react-i18next';

import {
	Table,
	TableBody,
	TableCell,
	TableRow,
	Checkbox,
} from '@material-ui/core';

import { StyledTableContainer } from '../../styles';

import LabelWithIcon from '../../../LabelWithIcon';
import { iconList } from '../../../../assets/Icons/icon-list';
import { useRole } from '../../../../context/rolesContext';
import NoRegister from '../../../NoRegistry';
import { useModalsContainer } from '../../../../context/modalsContext';
import TableHeadDefault from '../../TableHead';

const TableEmployees = ({ data }) => {
	const { t } = useTranslation();
	const { deleteEmployee } = useRole();
	const { editActiveContent, openEditModal } = useModalsContainer();
	const { colors } = defaultTheme;
	const [checkedItems, setCheckedItems] = useState([]);

	if (data.length === 0) {
		return <NoRegister />;
	}

	const columns = [
		'ID',
		t('name'),
		t('nickname'),
		t('occupation'),
		t('contact'),
		t('typeContract'),
	];

	const handleCheck = (e, item) => {
		setCheckedItems(
			checkedItems.includes(item)
				? checkedItems.filter((c) => c !== item)
				: [...checkedItems, item]
		);
	};

	const deleteFunction = () => {
		console.log(checkedItems);
	};

	const handleEditClick = (content) => {
		editActiveContent(content);
		openEditModal();
	};

	return (
		<StyledTableContainer>
			<Table>
				<TableHeadDefault
					columns={columns}
					hasChecked={checkedItems.length}
					deleteFunction={deleteFunction}
					data={data}
					checkedItems={checkedItems}
					title={t('employees')}
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

								<TableCell width="200px">
									{row.data.name}
								</TableCell>

								<TableCell align="right">
									{row.data.surName}
								</TableCell>

								<TableCell align="right">
									{row.data.role || '--'}
								</TableCell>

								<TableCell
									align="right"
									key={row.data.id}
									width="300px"
								>
									<LabelWithIcon
										title={row.data.phone}
										iconSrc={iconList[row.data.country]}
										justifyEnd={true}
									/>
								</TableCell>

								<TableCell align="right">
									{row.data.contract}
								</TableCell>

								<TableCell width={60} align="center">
									<img
										alt="icon edit"
										style={{
											marginRight: 10,
										}}
										src={iconList.edit}
										onClick={() =>
											handleEditClick(row.data)
										}
									/>
									<img
										alt="icon delete"
										src={iconList.deleteIcon}
										style={{
											cursor: 'pointer',
										}}
										onClick={() =>
											deleteEmployee(row.data.id)
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

export default TableEmployees;

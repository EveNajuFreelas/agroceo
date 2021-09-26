import React from 'react';

import { defaultTheme } from '../../../theme';
import { icon } from '../../../utils/functions';
import DescriptionTable from './DescriptionTable';
import { StyledDataGrid } from './styles';
import { useTranslation } from 'react-i18next';

const TableData = () => {
	const { t } = useTranslation();
	const { colors, text } = defaultTheme;

	const columns = [
		{
			field: 'id',
			headerName: 'ID',
			width: 90,
		},
		{
			field: 'Description',
			headerName: t('description'),
			width: 210,
			renderCell: DescriptionTable,
		},
		{
			field: 'DateDespesa',
			headerName: t('expense date'),
			type: 'date',
			width: 165,
			headerAlign: 'right',
		},
		{
			field: 'Invoice',
			headerName: t('invoice'),
			width: 130,
			headerAlign: 'right',
		},
		{
			field: 'Payment',
			headerName: t('payment'),
			width: 200,
			headerAlign: 'right',
		},
		{
			field: 'Parcela',
			headerName: t('instalment'),
			width: 110,
			headerAlign: 'right',
		},
		{
			field: 'FirstParcela',
			headerName: t('first instalment'),
			type: 'date',
			width: 155,
			headerAlign: 'right',
		},
		{
			field: 'Percent',
			headerName: t('% by property'),
			width: 200,
			headerAlign: 'right',
		},
		{
			field: 'DocumentPicture',
			headerName: t('document photo'),
			width: 180,
			headerAlign: 'right',
		},
	];

	const rows = [
		{
			id: '0001',
			Description: ('ração', 'insumos'),
			DateDespesa: '08/09/2021',
			Invoice: 'Sim',
			Payment: 'Cartão de crédito',
			Parcela: '10x',
			FirstParcela: '09/11/2021',
			Percent: '100% Fazenda Recanto do Sabiá',
			DocumentPicture: '--',
		},
		{ id: 2, Description: 'Lannister', firstName: 'Cersei', age: 42 },
		{ id: 3, Description: 'Lannister', firstName: 'Jaime', age: 45 },
		{ id: 4, Description: 'Stark', firstName: 'Arya', age: 16 },
		{ id: 5, Description: 'Targaryen', firstName: 'Daenerys', age: null },
		{ id: 6, Description: 'Melisandre', firstName: null, age: 150 },
		{ id: 7, Description: 'Clifford', firstName: 'Ferrara', age: 44 },
		{ id: 8, Description: 'Frances', firstName: 'Rossini', age: 36 },
		{
			id: 9,
			Description: icon('insumos') + 'Ração para Bubalino',
			firstName: 'Harvey',
			age: 65,
		},
	];

	return (
		<div style={{ height: 610, width: '120%' }}>
			<StyledDataGrid
				rows={rows}
				columns={columns}
				checkboxSelection
				disableColumnFilter={true}
				disableColumnMenu={true}
				disableDensitySelector={true}
			/>
		</div>
	);
};

export default TableData;

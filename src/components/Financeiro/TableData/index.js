import React from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { defaultTheme } from '../../../theme';

const TableData = () => {
	const { colors } = defaultTheme;

	const columns = [
		{
			field: 'id',
			headerName: 'ID',
			width: 90,
			color: `${colors.anotherGreen}`,
		},
		{
			field: 'Description',
			headerName: 'Descrição',
			width: 300,
			editable: true,
		},
		{
			field: 'DateDespesa',
			headerName: 'Data da despesa',
			type: 'string',
			width: 150,
			editable: true,
		},
		{
			field: 'FiscalNote',
			headerName: 'Nota Fiscal',
			type: 'string',
			width: 110,
			editable: true,
		},
		{
			field: 'Payment',
			headerName: 'Forma de Pagamento',
			type: 'string',
			width: 200,
			editable: true,
		},
		{
			field: 'Parcela',
			headerName: 'Parcela',
			type: 'string',
			width: 110,
			editable: true,
		},
		{
			field: 'FirstParcela',
			headerName: 'Data 1ª parcela',
			type: 'string',
			width: 200,
			editable: true,
		},
		{
			field: 'Percent',
			headerName: '% por Propriedade',
			type: 'string',
			width: 150,
			editable: true,
		},
		{
			field: 'DocumentPicture',
			headerName: 'Foto de documento',
			type: 'image',
			width: 110,
			editable: true,
		},
	];

	const rows = [
		{ id: 1, Description: 'Snow', firstName: 'Jon', age: 35 },
		{ id: 2, Description: 'Lannister', firstName: 'Cersei', age: 42 },
		{ id: 3, Description: 'Lannister', firstName: 'Jaime', age: 45 },
		{ id: 4, Description: 'Stark', firstName: 'Arya', age: 16 },
		{ id: 5, Description: 'Targaryen', firstName: 'Daenerys', age: null },
		{ id: 6, Description: 'Melisandre', firstName: null, age: 150 },
		{ id: 7, Description: 'Clifford', firstName: 'Ferrara', age: 44 },
		{ id: 8, Description: 'Frances', firstName: 'Rossini', age: 36 },
		{ id: 9, Description: 'Roxie', firstName: 'Harvey', age: 65 },
	];
	return (
		<div style={{ height: 610, width: '120%' }}>
			<DataGrid rows={rows} columns={columns} checkboxSelection />
		</div>
	);
};

export default TableData;

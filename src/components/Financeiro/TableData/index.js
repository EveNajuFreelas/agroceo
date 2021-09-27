import React from 'react';

import { defaultTheme } from '../../../theme';
import DescriptionTable from './DescriptionTable';
import { useTranslation } from 'react-i18next';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { HeaderTable, StyledTableContainer } from './styles';
import TableHeader from './TableHeader';

const TableData = () => {
	const { t } = useTranslation();
	const { colors, text } = defaultTheme;

	const columns = [
		'ID',
		t('description'),
		t('expense date'),
		t('invoice'),
		t('payment'),
		t('instalment'),
		t('first instalment'),
		t('% by property'),
		t('document photo'),
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
		{
			id: '0002',
			Description: ('ração', 'insumos'),
			DateDespesa: '08/09/2021',
			Invoice: 'Sim',
			Payment: 'Cartão de crédito',
			Parcela: '10x',
			FirstParcela: '09/11/2021',
			Percent: '100% Fazenda Recanto do Sabiá',
			DocumentPicture: '--',
		},
		{
			id: '0003',
			Description: ('ração', 'insumos'),
			DateDespesa: '08/09/2021',
			Invoice: 'Sim',
			Payment: 'Cartão de crédito',
			Parcela: '10x',
			FirstParcela: '09/11/2021',
			Percent: '100% Fazenda Recanto do Sabiá',
			DocumentPicture: '--',
		},
		{
			id: '0004',
			Description: ('ração', 'insumos'),
			DateDespesa: '08/09/2021',
			Invoice: 'Sim',
			Payment: 'Cartão de crédito',
			Parcela: '10x',
			FirstParcela: '09/11/2021',
			Percent: '100% Fazenda Recanto do Sabiá',
			DocumentPicture: '--',
		},
	];

	return (
		<StyledTableContainer>
			<TableHeader />

			<Table size='small' aria-label='a dense table'>
				<TableHead>
					<TableRow>
						{columns.map(column => (
							<TableCell>{column}</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(row => (
						<TableRow key={row.id}>
							<TableCell>{row.id}</TableCell>
							<TableCell align='left'>
								<DescriptionTable
									description={'Insumos'}
									title={row.Description}
								/>
							</TableCell>
							<TableCell align='right'>
								{row.DateDespesa}
							</TableCell>
							<TableCell align='right'>{row.Invoice}</TableCell>
							<TableCell align='right'>{row.Payment}</TableCell>
							<TableCell align='right'>{row.Parcela}</TableCell>
							<TableCell align='right'>
								{row.FirstParcela}
							</TableCell>
							<TableCell align='right'>{row.Percent}</TableCell>
							<TableCell align='right'>
								{row.DocumentPicture}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</StyledTableContainer>
	);
};

export default TableData;

import React from 'react';
import { TitleSection } from '../../../components/Geral/styles';
import { HeadSection } from '../styles';

import { useTranslation } from 'react-i18next';
import { defaultTheme } from '../../../theme';

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Checkbox,
} from '@material-ui/core';

import Filter from '../../../components/Filter';
import { itensMenuCombustivel } from '../../../utils/dataMock/itensMenu';
import { manejoVeiculos } from '../../../utils/dataMock/mock';
import ButtonIconAdd from '../../../components/Geral/ButtonIcon';

import Edit from '../../../utils/image/Edit.svg';
import Delete from '../../../utils/image/Delete.svg';
import PutIn from '../../../utils/image/PutIn.svg';
import { StyledTableContainer } from '../../../components/Financeiro/TableData/styles';

const Veiculos = () => {
	const { t } = useTranslation();
	const { colors } = defaultTheme;

	let keys = Object.keys(manejoVeiculos[0]);

	const columns = [
		'ID',
		t('description'),
		t('brand'),
		t('model'),
		t('color'),
		t('board'),
		t('owner'),
		t('lastRevision'),
	];

	const filter = mes => {
		console.log(mes);
	};

	return (
		<>
			<HeadSection>
				<TitleSection>
					Veículos
					<Filter
						label={'Todos'}
						itensMenu={itensMenuCombustivel}
						clickFunction={filter}
					/>
				</TitleSection>
				<ButtonIconAdd
					color={colors.neutral0}
					backgroundColor={colors.primary}
					text='Cadastrar'
					marginBottom={true}
				/>
			</HeadSection>
			<StyledTableContainer>
				<Table>
					<TableHead>
						<TableRow style={{ height: '50px' }}>
							<TableCell padding='checkbox'>
								<Checkbox
									style={{ color: 'green' }}
									//checked={isItemSelected}
									// inputProps={{
									// 	'aria-labelledby': row.id,
									// }}
								/>
							</TableCell>
							{columns.map((column, index) => {
								console.log(column, index);
								return index === 0 || index === 1 ? (
									<TableCell align='left'>{column}</TableCell>
								) : (
									<TableCell align='right'>
										{column}
									</TableCell>
								);
							})}
							<TableCell />
						</TableRow>
					</TableHead>
					<TableBody>
						{manejoVeiculos.map(row => {
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
										style={{ color: colors.neutral6 }}
									>
										{row.id}
									</TableCell>

									<TableCell>{row.Description}</TableCell>

									{keys.map((column, index) => {
										return (
											index > 1 && (
												<TableCell
													align='right'
													key={index}
												>
													{row[column]}
												</TableCell>
											)
										);
									})}

									<TableCell align='center'>
										<img
											style={{
												marginRight: 10,
											}}
											src={PutIn}
										/>
										<img
											style={{
												marginRight: 10,
											}}
											src={Edit}
										/>
										<img src={Delete} />
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</StyledTableContainer>
		</>
	);
};

export default Veiculos;

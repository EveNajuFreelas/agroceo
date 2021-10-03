import React, { useState, useEffect } from 'react';
import Chip from '@material-ui/core/Chip';
import { useStyles } from './styles';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import { defaultTheme } from '../../../theme';

const TableChip = ({ obligations }) => {
	const classes = useStyles();
	const [chipData, setChipData] = useState([]);

	const { colors } = defaultTheme;

	useEffect(() => {
		let arrayTemp = [];

		obligations.map((label, index) => {
			arrayTemp.push({ key: index, label: label });
		});

		setChipData(arrayTemp);
	}, []);

	const handleDelete = chipToDelete => () => {
		setChipData(chips =>
			chips.filter(chip => chip.key !== chipToDelete.key)
		);
	};

	return (
		<>
			{chipData.map(data => {
				return (
					<Chip
						label={data.label}
						deleteIcon={
							<HighlightOffOutlinedIcon
								style={{ color: `${colors.neutral0}` }}
							/>
						}
						onDelete={handleDelete(data)}
						disable
						className={classes.chip}
					/>
				);
			})}
		</>
	);
};

export default TableChip;

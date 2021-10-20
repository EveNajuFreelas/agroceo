import { useState, useEffect } from 'react';
import Chip from '@material-ui/core/Chip';
import { useStyles } from './styles';
import { defaultTheme } from '../../../theme';

const ChipTable = ({ items }) => {
	const classes = useStyles();
	const [chipData, setChipData] = useState([]);

	useEffect(() => {
		let arrayTemp = [];

		items.forEach((label, index) => {
			arrayTemp.push({ key: index, label: label });
		});

		setChipData(arrayTemp);
	}, []);

	return (
		<>
			{chipData.map(data => {
				return <Chip label={data.label} className={classes.chip} />;
			})}
		</>
	);
};

export default ChipTable;

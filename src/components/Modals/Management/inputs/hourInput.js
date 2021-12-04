import { InputAdornment } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import ReactInputMask from 'react-input-mask';
import { iconList } from '../../../../assets/Icons/icon-list';
import { InputField } from '../../inputsStyles';

const HourInput = ({ onChange, name, defaultValue }) => {
	const { t } = useTranslation();

	return (
		<ReactInputMask mask="99 : 99" maskChar=" " onChange={onChange} defaultValue={defaultValue}>
			{() => (
				<InputField
					id={name}
					name={name}
					helperText={t('justNumbers')}
					placeholder="00 : 00"
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<img alt="icon clock" src={iconList.clock} />
							</InputAdornment>
						),
					}}
				/>
			)}
		</ReactInputMask>
	);
};

export default HourInput;

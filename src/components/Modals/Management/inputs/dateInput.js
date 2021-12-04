import { InputAdornment } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import ReactInputMask from 'react-input-mask';
import { iconList } from '../../../../assets/Icons/icon-list';
import { InputField } from '../../inputsStyles';

const DateInput = ({ onChange, name, defaultValue }) => {
	const { t } = useTranslation();

	return (
		<ReactInputMask mask="99 / 99 / 9999" maskChar=" " onChange={onChange} defaultValue={defaultValue}>
			{() => (
				<InputField
					id={name}
					name={name}
					helperText={t('justNumbers')}
					placeholder="DD/MM/AAAA"
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<img
									alt="icon odometer"
									src={iconList.calendar}
								/>
							</InputAdornment>
						),
					}}
				/>
			)}
		</ReactInputMask>
	);
};

export default DateInput;

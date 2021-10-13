import React from 'react';
import { useTranslation } from 'react-i18next';
import { defaultTheme } from '../../theme';

const YesNo = ({ text }) => {
	const { t } = useTranslation();
	const { colors } = defaultTheme;

	return (
		<>
			{text ? (
				<span style={{ color: `${colors.primary}` }}>{t('yes')}</span>
			) : (
				<span style={{ color: `${colors.error}` }}>{t('no')}</span>
			)}
		</>
	);
};

export default YesNo;

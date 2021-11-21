import { defaultTheme } from '../../theme';
import { useTranslation } from 'react-i18next';

const ItemSelect = () => {
	const { t } = useTranslation();
	const { colors } = defaultTheme;

	return (
		<span style={{ color: `${colors.neutral6}` }}>{`${t(
			'select'
		)}...`}</span>
	);
};

export default ItemSelect;

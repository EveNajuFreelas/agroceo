import { Label } from '@material-ui/icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NoRegistryContainer, LabelRegistry } from './styles';

const NoRegister = () => {
	const { t } = useTranslation();

	return (
		<NoRegistryContainer>
			<LabelRegistry>{t('noRegistry')}</LabelRegistry>
		</NoRegistryContainer>
	);
};

export default NoRegister;

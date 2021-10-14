import { ItemDescription, IconItemDescription, TitleItem } from './styles';
import { icon } from '../../utils/functions';

const LabelWithIcon = ({ title, iconSrc, justifyEnd }) => {
	return (
		<ItemDescription justifyEnd={justifyEnd}>
			<IconItemDescription src={iconSrc} />
			<TitleItem>{title}</TitleItem>
		</ItemDescription>
	);
};

export default LabelWithIcon;

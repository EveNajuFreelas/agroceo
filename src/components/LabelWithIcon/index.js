import { ItemDescription, IconItemDescription, TitleItem } from './styles';
import { icon } from '../../utils/functions';

const LabelWithIcon = ({ title, iconName, justifyEnd }) => {
	return (
		<ItemDescription justifyEnd={justifyEnd}>
			<IconItemDescription src={icon(iconName)} />
			<TitleItem>{title}</TitleItem>
		</ItemDescription>
	);
};

export default LabelWithIcon;

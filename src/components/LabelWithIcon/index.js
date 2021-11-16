import { iconList } from '../../assets/Icons/icon-list';
import { ItemDescription, IconItemDescription, TitleItem } from './styles';

const LabelWithIcon = ({ title, iconName, justifyEnd }) => {
	return (
		<ItemDescription justifyEnd={justifyEnd}>
			<IconItemDescription src={iconList[iconName]} />
			<TitleItem>{title}</TitleItem>
		</ItemDescription>
	);
};

export default LabelWithIcon;

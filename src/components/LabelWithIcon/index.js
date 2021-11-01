import { iconList } from '../../assets/Icons/icon-list';
import { ItemDescription, IconItemDescription, TitleItem } from './styles';

const LabelWithIcon = ({ title, iconSrc, justifyEnd }) => {
	return (
		<ItemDescription justifyEnd={justifyEnd}>
			<IconItemDescription src={iconList[iconSrc]} />
			<TitleItem>{title}</TitleItem>
		</ItemDescription>
	);
};

export default LabelWithIcon;

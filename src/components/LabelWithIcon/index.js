import { ItemDescription, IconItemDescription, TitleItem } from './styles';

const LabelWithIcon = ({ title, iconSrc, justifyEnd }) => {
	return (
		<ItemDescription justifyEnd={justifyEnd}>
			<IconItemDescription src={iconSrc} />
			<TitleItem>{title}</TitleItem>
		</ItemDescription>
	);
};

export default LabelWithIcon;

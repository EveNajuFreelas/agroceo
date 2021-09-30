import { ItemDescription, IconItemDescription, TitleItem } from './styles';
import { icon } from '../../../../utils/functions';

const DescriptionTable = ({ title, description }) => {
	return (
		<ItemDescription>
			<IconItemDescription src={icon(description)} />
			<TitleItem>{title}</TitleItem>
		</ItemDescription>
	);
};

export default DescriptionTable;

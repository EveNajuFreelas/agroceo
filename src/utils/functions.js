import Box from './image/Icons/Box.svg';
import Trator from './image/Icons/Trator.svg';
import Home from './image/Icons/Home.svg';

export function icon(subtitle) {
	const icons = {
		Veículos: Trator,
		Insumos: Box,
		Infraestrutura: Home,
	};

	return icons[subtitle];
}

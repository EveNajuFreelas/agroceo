import Box from './icons/Box.svg';
import Trator from './icons/Trator.svg';
import Home from './icons/Home.svg';

export function icon(subtitle) {
	const icons = {
		Veículos: Trator,
		Insumos: Box,
		Infraestrutura: Home,
	};

	return icons[subtitle];
}

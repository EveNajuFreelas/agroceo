import Box from './image/Icons/Box.svg';
import Trator from './image/Icons/Trator.svg';
import Home from './image/Icons/Home.svg';
import Entrada from './image/Icons/Entrada.svg';
import Saida from './image/Icons/Saida.svg';
import Brasil from './image/Icons/Brasil.svg';
import Australia from './image/Icons/Australia.svg';
import EUA from './image/Icons/Estados Unidos.svg';

export function icon(subtitle) {
	const icons = {
		Veículos: Trator,
		Insumos: Box,
		Infraestrutura: Home,
		Entrada: Entrada,
		Saida: Saida,
		Brasil: Brasil,
		Australia: Australia,
		EUA: EUA,
	};

	return icons[subtitle];
}

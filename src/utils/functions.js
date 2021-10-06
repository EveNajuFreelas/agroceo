import Box from './Icons/Box.svg';
import Trator from './Icons/Trator.svg';
import Home from './Icons/Home.svg';
import Entrada from './Icons/Entrada.svg';
import Saida from './Icons/Saida.svg';
import Brasil from './Icons/Brasil.svg';
import Australia from './Icons/Australia.svg';
import EUA from './Icons/Estados Unidos.svg';

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

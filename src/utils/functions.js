import { iconList } from '../assets/Icons/icon-list';

export function icon(subtitle) {
	const icons = {
		Veículos: iconList.trator,
		Insumos: iconList.box,
		Infraestrutura: iconList.homeRecurso,
		Entrada: iconList.entrada,
		Saida: iconList.saida,
		Brasil: iconList.Brasil,
		Australia: iconList.Australia,
		EUA: iconList.Usa,
	};

	return icons[subtitle];
}

import { iconList } from '../assets/Icons/icon-list';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { defaultTheme } from '../theme';

let doc = new jsPDF();
const { colors } = defaultTheme;

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
export const createPDF = (title, columns, data) => {
	console.log('data', data);

	doc.text(title, 15, 10);

	doc.autoTableSetDefaults({
		headStyles: { fillColor: colors.primary },
	});

	let dados = data.map((item) => Object.values(item.data));

	console.log('dados', dados);

	doc.autoTable({
		head: [columns],
		body: dados,
	});
};

export const generatePDF = (title, columns, data) => {
	createPDF(title, columns, data);
	doc.save(`${title}.pdf`);
	doc = new jsPDF();
};

export const printOutPDF = (title, columns, data) => {
	createPDF(title, columns, data);
	doc.output('dataurlnewwindow', `${title}.pdf`);
	doc = new jsPDF();
};

export const formatDateYMDtoDMY = (date) => {
	const dateArray = date.split('-');
	const newDate = `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`
	return newDate;
}

export const formatStringToFirstCapitalLetter = (data) => {
	const lowercaseString = data.toLowerCase();

	return lowercaseString.charAt(0).toUpperCase() + lowercaseString.slice(1);
}

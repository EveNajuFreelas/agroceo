export function FormatResponseAnimals(t, response) {
	let tempArray = [];
	response.forEach((res) => {
		tempArray.push({
			data: {
				id: res.id,
				specie: t(enumSpecie[res.specie]),
				category: t(enumCategory[res.category]),
				sex: t(enumSex[res.sex]),
				age: calculationMonths(res.age) + ' meses',
				theAmount: res.theAmount,
			},
		});
	});

	return tempArray;
}

const calculationMonths = (date) => {
	let years = new Date().getFullYear() - new Date(date).getFullYear();
	return Math.abs(
		years * 12 + (new Date(date).getMonth() - new Date().getMonth())
	);
};
export const enumSpecie = Object.freeze({
	0: 'cattle',
	1: 'buffaloes',
	2: 'birds',
	3: 'pigs',
	4: 'fish',
	5: 'goats',
	6: 'sheep',
	7: 'horses',
	8: 'donkeys',
	9: 'mules',
	10: 'others',
});

export const enumCategory = Object.freeze({
	0: 'cut',
	1: 'milk',
});

export const enumSex = Object.freeze({
	0: 'male',
	1: 'female',
});

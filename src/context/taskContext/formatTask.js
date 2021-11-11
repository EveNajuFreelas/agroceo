export const formatResponseTask = (response) => {
	let tempArray = [];
	response.forEach((res) => {
		tempArray.push({
			data: {
				id: res.id,
				title: res.title,
				status: formatStatus[res.status],
				expected: res.expected.substring(0, res.expected.indexOf('T')),
				responsible: `${res.professional.name} ${res.professional.surName}`,
				centers: 'Animais, Lavoura',
			},
		});
	});

	return tempArray;
};

export const formatStatus = Object.freeze({
	1: 'open',
	2: 'refused',
	3: 'done',
	4: 'unstarted',
});

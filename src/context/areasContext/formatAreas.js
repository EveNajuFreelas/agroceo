export const formatResponseArea = (response) => {
	let tempArray = [];
	response.forEach((res) => {
		tempArray.push({
			data: {
				id: res.id,
				name: res.name,
				size: `${res.size} ha`,
				destination: res.destination.name,
			},
		});
	});

	return tempArray;
};

export const formatResponseModule = (response) => {
	let tempArray = [];
	response.forEach((res) => {
		tempArray.push({
			data: {
				id: res.id,
				name: res.name,
				nickname: res.surName,
				pastures: subareas || null,
				destination: res.destination.name,
			},
		});
	});

	return tempArray;
};

export const subareas = ['Pasto da onça', 'Pasto da Vaca Louca'];

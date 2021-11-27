export const formatResponseTillage = (response) => {
	let tempArray = [];
	response.forEach((res) => {
		console.log(res);
		tempArray.push({
			data: {
				id: res.id,
				type: res.typeTillage,
				subarea: res.subArea || 'Sub-área 9 “Antiga matinha” - 60 ha',
				sackQuantity: res.sackQuantity,
				weightPerSack: res.weightPerSack,
			},
		});
	});

	return tempArray;
};

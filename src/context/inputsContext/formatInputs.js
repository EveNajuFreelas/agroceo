export const formatResponseInputs = (response) => {
	let tempArray = [];
	response.map((res) => {
		tempArray.push({
			data: {
				id: res.id,
				description: res.description,
				quantity: res.taker,
				unit: res.unit_of_measurement,
				apresentation: res.presentation,
				document: res.urlDoc ? true : false,
				whoReceived: res.whoReceivedPeople.name || '--',
			},
			extras: {
				image: res.image,
			},
		});
	});
	return tempArray;
};

export const formatResponseDemands = response => {
	let tempArray = [];
	response.forEach(res => {
		tempArray.push({
			id: res.id,
			description: res.description,
			createBy: '-',
			photo: '-',
			task: false,
		});
	});

	return tempArray;
};

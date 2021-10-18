export const formatResponseTractor = response => {
	let tempArray = [];
	response.forEach(res => {
		tempArray.push({
			id: res.id,
			brand: res.brand,
			model: res.model,
			color: res.color,
			tractorYear: res.tractorYear,
			board: res.board,
			tractorOwner: res.tractorOwner,
			dateOfLastRevision: res.dateOfLastRevision.substring(
				0,
				res.dateOfLastRevision.indexOf('T')
			),
		});
	});

	return tempArray;
};

export const formatResponseVehicle = response => {
	let tempArray = [];
	response.map(res => {
		tempArray.push({
			id: res.id,
			description: res.nickname,
			brand: res.brand,
			model: res.model,
			color: res.color,
			board: res.board.toUpperCase(),
			vehicleOwner: res.vehicleOwner,
			lastRevision: res.dateOfLastRevision
				? res.dateOfLastRevision.substring(
						0,
						res.dateOfLastRevision.indexOf('T')
				  )
				: '--',
		});
	});

	return tempArray;
};

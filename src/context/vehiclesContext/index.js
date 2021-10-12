import { useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';
import api from '../../api';

const useVehicleContainer = () => {
	const [vehicle, setVehicle] = useState([]);
	const [isLoading, setLoading] = useState(true);

	const getVehicle = id => {
		api.get(`/GetVehicle/${id}`)
			.then(res => {
				console.log(res);
				console.log(formatResponse(res.data.vehicles));
				setVehicle(formatResponse(res.data.vehicles));
				setLoading(false);
			})
			.catch(err => {
				console.log(err);
			});
	};

	return {
		vehicle,
		getVehicle,
		isLoading,
	};
};

const formatResponse = response => {
	let tempArray = [];
	response.map(res => {
		console.log(res);
		console.log(res.updated_at.substring(0, res.updated_at.indexOf('T')));
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

export const VehicleContainer = createContainer(useVehicleContainer);

export const useVehicle = () => useContainer(VehicleContainer);

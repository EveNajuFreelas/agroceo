import { useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';
import api from '../../api';

const useVehicleContainer = () => {
	const [vehicle, setVehicle] = useState([]);
	const [isLoading, setLoading] = useState(true);

	const getVehicle = id => {
		api.get(`/GetVehicle/${id}`)
			.then(res => {
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
		tempArray.push({
			id: res.id,
			description: res.nickname,
			brand: res.brand,
			model: res.model,
			color: res.color,
			board: res.board,
			vehicleOwner: res.vehicleOwner,
			updated_at: res.updated_at,
		});
	});

	return tempArray;
};

export const VehicleContainer = createContainer(useVehicleContainer);

export const useVehicle = () => useContainer(VehicleContainer);

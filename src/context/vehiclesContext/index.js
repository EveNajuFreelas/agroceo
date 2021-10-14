import { useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';
import api from '../../api';
import { useAuthentication } from '../authContext';

const useVehicleContainer = () => {
	const { propertiesSelected, token } = useAuthentication();

	const [vehicle, setVehicle] = useState([]);
	const [isLoading, setLoading] = useState(true);

	const getVehicle = () => {
		setLoading(true);
		api.get(`/GetVehicle/${propertiesSelected}`)
			.then(res => {
				setVehicle(formatResponseVehicle(res.data.vehicles));
				setLoading(false);
			})
			.catch(err => {
				console.log(err);
			});
	};

	const deleteVehicle = id => {
		api.defaults.headers.authorization = `Bearer ${token}`;
		api.post(`/DestroyVehicle`, {
			id: id,
		})
			.then(res => {
				console.log(res);
				getVehicle();
			})
			.catch(err => {
				console.log(err);
			});
	};

	const postVehicle = data => {
		api.defaults.headers.authorization = `Bearer ${token}`;
		api.post(`/NewVehicle`, data)
			.then(res => {
				console.log(res);
				getVehicle();
			})
			.catch(err => {
				console.log(err);
			});
	};

	return {
		vehicle,
		getVehicle,
		isLoading,
		deleteVehicle,
		postVehicle,
	};
};

const formatResponseVehicle = response => {
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

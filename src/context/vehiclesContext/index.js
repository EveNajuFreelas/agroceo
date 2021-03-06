import { useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';
import api from '../../api';
import { useAuthentication } from '../authContext';
import { formatResponseVehicle } from './formatVehicle';

const useVehicleContainer = () => {
	const { propertiesSelected, token } = useAuthentication();

	const [vehicle, setVehicle] = useState([]);
	const [isLoading, setLoading] = useState(true);

	const getVehicle = () => {
		propertiesSelected.map(property => (
			api.get(`/GetVehicle/${propertiesSelected}`)
				.then(res => {
					setVehicle(formatResponseVehicle(res.data.vehicles));
					setLoading(false);
				})
				.catch(err => {
					console.error(err);
					setLoading(false);
				})
			));
	};

	const deleteVehicle = id => {
		api.defaults.headers.authorization = `Bearer ${token}`;
		api.post(`/DestroyVehicle`, {
			id: id,
		})
			.then(res => {
				console.log(res);
				getVehicle();
				setLoading(false);
			})
			.catch(err => {
				console.error(err);
				setLoading(false);
			});
	};

	const postVehicle = data => {
		api.defaults.headers.authorization = `Bearer ${token}`;
		api.post(`/NewVehicle`, data)
			.then(res => {
				getVehicle();
				setLoading(false);
			})
			.catch(err => {
				console.error(err);
				setLoading(false);
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

export const VehicleContainer = createContainer(useVehicleContainer);

export const useVehicle = () => useContainer(VehicleContainer);

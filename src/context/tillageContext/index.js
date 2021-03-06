import { useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';
import api from '../../api';
import { useAuthentication } from '../authContext';
import { formatResponseTillage } from './formatTillage';

const useTillageContainer = () => {
	const [tillage, setTillage] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const { propertiesSelected } = useAuthentication();

	const getTillage = () => {
		propertiesSelected.map(each => (
			api.get(`/tillages/${each}`)
				.then(res => {
					setTillage(formatResponseTillage(res.data.tillage));
					setLoading(false);
				})
				.catch(err => {
					console.error(err);
					setLoading(false);
				})
		));
	};

	const deleteTillage = id => {
		setLoading(true);
		api.delete(`/tillage/${id}`)
			.then(res => {
				getTillage();
			})
			.catch(err => {
				console.error(err);
			});
	};

	const postTillage = data => {
		api.post(`/tillage`, data)
			.then(res => {
				console.log(res);
				getTillage();
			})
			.catch(err => {
				console.error(err);
			});
	};

	return {
		tillage,
		getTillage,
		isLoading,
		deleteTillage,
		postTillage,
	};
};

export const TillageContainer = createContainer(useTillageContainer);

export const useTillage = () => useContainer(TillageContainer);

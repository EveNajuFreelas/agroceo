import { useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';
import api from '../../api';
import { useAuthentication } from '../authContext';

const useTillageContainer = () => {
	const [tillage, setTillage] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const { propertiesSelected } = useAuthentication();

	const getTillage = () => {
		propertiesSelected.map(each => {
			api.get(`/tillages/${each}`)
				.then(res => {
					console.log(formatResponse(res.data.tillage));
					setTillage(formatResponse(res.data.tillage));
					setLoading(false);
				})
				.catch(err => {
					console.log(err);
				});
		});
	};

	const deleteTillage = id => {
		setLoading(true);
		api.delete(`/tillage/${id}`)
			.then(res => {
				getTillage();
			})
			.catch(err => {
				console.log(err);
			});
	};

	const postTillage = data => {
		api.post(`/tillage`, data)
			.then(res => {
				console.log(res);
				getTillage();
			})
			.catch(err => {
				console.log(err);
			});
	};

	return {
		tillage,
		getTillage,
		isLoading,
		deleteTillage,
	};
};

const formatResponse = response => {
	let tempArray = [];
	response.forEach(res => {
		tempArray.push({
			id: res.id,
			type: res.typeTillage,
			subarea: res.subArea || 'Sub-área 9 “Antiga matinha” - 60 ha',
			sackQuantity: res.sackQuantity,
			weightPerSack: res.weightPerSack,
		});
	});

	return tempArray;
};

export const TillageContainer = createContainer(useTillageContainer);

export const useTillage = () => useContainer(TillageContainer);

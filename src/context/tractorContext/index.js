import { useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';
import api from '../../api';

const useTractorContainer = () => {
	const [tractor, setTractor] = useState([]);
	const [isLoading, setLoading] = useState(true);

	const getTractor = id => {
		api.get(`/tractor/${id}`)
			.then(res => {
				console.log(formatResponse(res.data.tractors));
				setTractor(formatResponse(res.data.tractors));
				setLoading(false);
			})
			.catch(err => {
				console.log(err);
			});
	};

	return {
		tractor,
		getTractor,
		isLoading,
	};
};

const formatResponse = response => {
	let tempArray = [];
	response.forEach(res => {
		tempArray.push({
			id: res.id,
			brand: res.brand,
			model: res.model,
			color: res.color,
			tractorYear: res.tractorYear,
			plate: res.plate,
			tractorOwner: res.tractorOwner,
			dateOfLastRevision: res.dateOfLastRevision,
		});
	});

	return tempArray;
};

export const TractorContainer = createContainer(useTractorContainer);

export const useTractor = () => useContainer(TractorContainer);

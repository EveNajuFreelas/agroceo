import { useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';
import api from '../../api';
import { useAuthentication } from '../authContext';

const useTractorContainer = () => {
	const [tractor, setTractor] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const { propertiesSelected, token } = useAuthentication();

	const getTractor = () => {
		api.get(`/tractor/${propertiesSelected}`)
			.then(res => {
				console.log(formatResponse(res.data));
				setTractor(formatResponse(res.data));
				setLoading(false);
			})
			.catch(err => {
				console.log(err);
			});
	};

	const deleteTractor = id => {
		setLoading(true);
		api.defaults.headers.authorization = `Bearer ${token}`;
		api.delete(`/destroytractor/${id}`)
			.then(res => {
				getTractor();
			})
			.catch(err => {
				console.log(err);
			});
	};

	const postTractor = data => {
		api.defaults.headers.authorization = `Bearer ${token}`;
		api.post(`/NewTractor`, data)
			.then(res => {
				console.log(res);
				getTractor();
			})
			.catch(err => {
				console.log(err);
			});
	};

	return {
		tractor,
		getTractor,
		isLoading,
		deleteTractor,
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

export const TractorContainer = createContainer(useTractorContainer);

export const useTractor = () => useContainer(TractorContainer);

import { useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';
import api from '../../api';
import { useAuthentication } from '../authContext';

const useDemandContainer = () => {
	const [demands, setDemands] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const { propertiesSelected } = useAuthentication();

	const getDemands = () => {
		propertiesSelected.map(each => {
			api.get(`/requests/${each}`)
				.then(res => {
					console.log(formatResponse(res.data.requests));
					setDemands(formatResponse(res.data.requests));
					setLoading(false);
				})
				.catch(err => {
					console.log(err);
				});
		});
	};

	const deleteDemands = id => {
		setLoading(true);
		api.delete(`/request/${id}`)
			.then(res => {
				getDemands();
			})
			.catch(err => {
				console.log(err);
			});
	};

	const postDemands = data => {
		api.post(`/request`, data)
			.then(res => {
				console.log(res);
				getDemands();
			})
			.catch(err => {
				console.log(err);
			});
	};

	return {
		demands,
		getDemands,
		isLoading,
		deleteDemands,
	};
};

const formatResponse = response => {
	let tempArray = [];
	response.forEach(res => {
		tempArray.push({
			id: res.id,
			description: res.description,
			createBy: '-',
			photo: '-',
			task: false,
		});
	});

	return tempArray;
};

export const DemandContainer = createContainer(useDemandContainer);

export const useDemand = () => useContainer(DemandContainer);

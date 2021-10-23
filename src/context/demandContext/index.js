import { useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';
import api from '../../api';
import { useAuthentication } from '../authContext';
import { formatResponseDemands } from './formatDemand';

const useDemandContainer = () => {
	const [demands, setDemands] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const { propertiesSelected } = useAuthentication();

	const getDemands = () => {
		propertiesSelected.map(each => {
			api.get(`/requests/${each}`)
				.then(res => {
					setDemands(formatResponseDemands(res.data.requests));
					setLoading(false);
				})
				.catch(err => {
					console.error(err);
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
				console.error(err);
			});
	};

	const postDemands = data => {
		api.post(`/request`, data)
			.then(res => {
				getDemands();
			})
			.catch(err => {
				console.error(err);
			});
	};

	return {
		demands,
		getDemands,
		isLoading,
		deleteDemands,
		postDemands,
	};
};

export const DemandContainer = createContainer(useDemandContainer);

export const useDemand = () => useContainer(DemandContainer);

import { useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';
import api from '../../api';
import { useAuthentication } from '../authContext';
import { formatResponseTractor } from './formatTractor';

const useTractorContainer = () => {
	const [tractor, setTractor] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const { propertiesSelected, token } = useAuthentication();

	const getTractor = () => {
		propertiesSelected.map(property => (
			api.get(`/tractor/${property}`)
				.then(res => {
					setTractor(formatResponseTractor(res.data));
					setLoading(false);
				})
				.catch(err => {
					console.error(err);
					setLoading(false);
				})
		));
	};

	const deleteTractor = id => {
		setLoading(true);
		api.defaults.headers.authorization = `Bearer ${token}`;
		api.delete(`/destroytractor/${id}`)
			.then(res => {
				getTractor();
				setLoading(false);
			})
			.catch(err => {
				console.error(err);
				setLoading(false);
			});
	};

	const postTractor = data => {
		api.defaults.headers.authorization = `Bearer ${token}`;
		api.post(`/NewTractor`, data)
			.then(res => {
				console.log(res);
				getTractor();
				setLoading(false);
			})
			.catch(err => {
				console.error(err);
				setLoading(false);
			});
	};

	return {
		tractor,
		getTractor,
		isLoading,
		deleteTractor,
		postTractor
	};
};

export const TractorContainer = createContainer(useTractorContainer);

export const useTractor = () => useContainer(TractorContainer);

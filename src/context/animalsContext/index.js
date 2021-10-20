import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createContainer, useContainer } from 'unstated-next';
import api from '../../api';
import { useAuthentication } from '../authContext';
import { FormatResponseAnimals } from './formatAnimals';

const useAnimalsContainer = () => {
	const [animals, setAnimals] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const { propertiesSelected } = useAuthentication();
	const { t } = useTranslation();

	const getAnimals = () => {
		propertiesSelected.map(property => {
			api.get(`/animals/${property}`)
				.then(res => {
					setAnimals(FormatResponseAnimals(t, res.data));
					setLoading(false);
				})
				.catch(err => {
					console.log(err);
				});
		});
	};

	const deleteAnimals = id => {
		setLoading(true);
		api.delete(`/animals/${id}`)
			.then(res => {
				getAnimals();
			})
			.catch(err => {
				console.log(err);
			});
	};

	const postAnimals = data => {
		api.post(`/animals`, data)
			.then(res => {
				getAnimals();
			})
			.catch(err => {
				console.log(err);
			});
	};

	return {
		animals,
		getAnimals,
		isLoading,
		deleteAnimals,
	};
};

export const AnimalsContainer = createContainer(useAnimalsContainer);

export const useAnimals = () => useContainer(AnimalsContainer);

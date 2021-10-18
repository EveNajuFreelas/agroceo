import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createContainer, useContainer } from 'unstated-next';
import api from '../../api';
import { useAuthentication } from '../authContext';

const useAnimalsContainer = () => {
	const [animals, setAnimals] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const { propertiesSelected } = useAuthentication();
	const { t } = useTranslation();

	const getAnimals = () => {
		propertiesSelected.map(each => {
			api.get(`/animals/${each}`)
				.then(res => {
					console.log(formatResponse(res.data));
					setAnimals(formatResponse(res.data));
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
				console.log(res);
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

const formatResponse = response => {
	let tempArray = [];
	response.forEach(res => {
		console.log('dqate', new Date(res.age).getDate());
		let years = new Date().getFullYear() - new Date(res.age).getFullYear();
		let months = Math.abs(
			years * 12 + (new Date(res.age).getMonth() - new Date().getMonth())
		);
		tempArray.push({
			id: res.id,
			specie: enumSpecie[res.specie],
			category: enumCategory[res.category],
			sex: enumSex[res.sex],
			age: months + ' meses',
			theAmount: res.theAmount,
		});
	});

	return tempArray;
};

const enumSpecie = Object.freeze({
	0: 'cattle',
	1: 'buffaloes',
	2: 'birds',
	3: 'pigs',
	4: 'fish',
	5: 'goats',
	6: 'sheep',
	7: 'horses',
	8: 'donkeys',
	9: 'mules',
	10: 'others',
});

const enumCategory = Object.freeze({
	0: 'cut',
	1: 'milk',
});

const enumSex = Object.freeze({
	0: 'male',
	1: 'female',
});

export const AnimalsContainer = createContainer(useAnimalsContainer);

export const useAnimals = () => useContainer(AnimalsContainer);

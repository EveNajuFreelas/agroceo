import { useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';
import api from '../../api';
import { useAuthentication } from '../authContext';

const useAreaContainer = () => {
	const { propertiesSelected } = useAuthentication();

	const [areas, setAreas] = useState([]);
	const [modules, setModules] = useState([]);
	const [isLoading, setLoading] = useState(true);

	const getAreasAndModules = () => {
		api.get(`/subareas/${2}`)
			.then(res => {
				console.log('subareas', formatResponseArea(res.data));
				setAreas(formatResponseArea(res.data));
			})
			.catch(err => {
				console.log(err);
			});

		api.get(`/modules/${propertiesSelected}`)
			.then(res => {
				console.log(formatResponseModule(res.data.modules));
				setModules(formatResponseModule(res.data.modules));
				setLoading(false);
			})
			.catch(err => {
				console.log(err);
			});
	};

	return {
		areas,
		modules,
		isLoading,
		getAreasAndModules,
	};
};

const formatResponseArea = response => {
	let tempArray = [];
	response.forEach(res => {
		tempArray.push({
			id: res.id,
			name: res.name,
			size: `${res.size} ha`,
			destination: res.destination.name,
		});
	});

	return tempArray;
};

const formatResponseModule = response => {
	let tempArray = [];
	response.forEach(res => {
		tempArray.push({
			id: res.id,
			name: res.name,
			nickname: res.surName,
			pastures: subareas || null,
			destination: res.destination.name,
		});
	});

	return tempArray;
};

const subareas = ['Pasto da onça', 'Pasto da Vaca Louca'];

export const AreasContainer = createContainer(useAreaContainer);

export const useArea = () => useContainer(AreasContainer);

import { useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';
import api from '../../api';

const useAreaContainer = () => {
	const [areas, setAreas] = useState([]);
	const [modules, setModules] = useState([]);

	const [isLoading, setLoading] = useState(true);

	const getAreasAndModules = id => {
		api.get(`/subareas/${id}`)
			.then(res => {
				console.log(formatResponseArea(res.data.subarea));
				setAreas(formatResponseArea(res.data.subarea));
			})
			.catch(err => {
				console.log(err);
			});

		api.get(`/modules/${id}`)
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
			size: res.destinationId,
			destination: res.destination.name,
		});
	});

	return tempArray;
};

export const AreasContainer = createContainer(useAreaContainer);

export const useArea = () => useContainer(AreasContainer);

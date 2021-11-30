import { useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';
import api from '../../api';
import { useAuthentication } from '../authContext';
import { formatResponseArea, formatResponseModule } from './formatAreas';

const useAreaContainer = () => {
	const { propertiesSelected } = useAuthentication();

	const [areas, setAreas] = useState([]);
	const [modules, setModules] = useState([]);
	const [isLoading, setLoading] = useState(true);

	const getAreasAndModules = () => {
		propertiesSelected.map(property => {
			api.get(`/subareas/${2}`)
				.then(res => {
					setAreas(formatResponseArea(res.data));
					setLoading(false);
				})
				.catch(err => {
					console.error(err);
					setLoading(false);
				});

			api.get(`/modules/${property}`)
				.then(res => {
					setModules(formatResponseModule(res.data.modules));
					setLoading(false);
				})
				.catch(err => {
					console.error(err);
					setLoading(false);
				});
		});
	};

	return {
		areas,
		modules,
		isLoading,
		getAreasAndModules,
	};
};

export const AreasContainer = createContainer(useAreaContainer);

export const useArea = () => useContainer(AreasContainer);

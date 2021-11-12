import { useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';
import api from '../../api';
import { useAuthentication } from '../authContext';
import { formatResponseInputs } from './formatInputs';

const useInputContainer = () => {
	const [inputs, setInputs] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const { propertiesSelected } = useAuthentication();

	const getInputs = () => {
		api.get(`/inputs/${propertiesSelected}`)
			.then(res => {
				setInputs(formatResponseInputs(res.data));
				setLoading(false);
			})
			.catch(err => {
				console.error(err);
				setLoading(false);
			});
	};

	return {
		inputs,
		getInputs,
		isLoading,
	};
};

export const InputContainer = createContainer(useInputContainer);

export const useInput = () => useContainer(InputContainer);

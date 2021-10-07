import { useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';
import api from '../../api';

const useInputContainer = () => {
	const [inputs, setInputs] = useState([]);
	const [isLoading, setLoading] = useState(true);

	const getInputs = id => {
		api.get(`/inputs/${id}`)
			.then(res => {
				console.log(res.data);

				console.log(formatResponse(res.data));
				setInputs(formatResponse(res.data));
				setLoading(false);
			})
			.catch(err => {
				console.log(err);
			});
	};

	return {
		inputs,
		getInputs,
		isLoading,
	};
};

const formatResponse = response => {
	let tempArray = [];
	response.map(res => {
		tempArray.push({
			data: {
				id: res.id,
				description: res.name,
				quantity: res.theAmount,
				unit: res.unitOfMeasurement,
				apresentation: res.presentation,
				document: res.urlDoc ? true : false,
				whoReceived: res.whoReceivedPeople || '--',
			},
			extras: {
				image: res.image,
				direction: defineDirection(res.direction),
			},
		});
	});

	return tempArray;
};

const defineDirection = response => {
	if (response === 1) return 'entrada';
	if (response === 2) return 'saida';
};

export const InputContainer = createContainer(useInputContainer);

export const useInput = () => useContainer(InputContainer);

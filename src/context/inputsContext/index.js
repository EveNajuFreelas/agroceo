import { useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';
import api from '../../api';

const useInputContainer = () => {
	const [inputs, setInputs] = useState([]);
	const [isLoading, setLoading] = useState(true);

	const getInputs = id => {
		api.get(`/inputs/${id}`)
			.then(res => {
				console.log(formatResponse(res.data.inputs));
				setInputs(formatResponse(res.data.inputs));
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
	response.forEach(res => {
		tempArray.push({
			id: res.id,
			description: res.name,
			quantity: res.theAmount,
			unit: res.unitOfMeasurement,
			apresentation: res.presentation,
			document: res.urlDoc ? true : false,
			whoReceived: res.whoReceivedPeople.name,
		});
	});

	return tempArray;
};

export const InputContainer = createContainer(useInputContainer);

export const useInput = () => useContainer(InputContainer);

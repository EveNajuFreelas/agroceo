import { useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';
import api from '../../api';
import { useAuthentication } from '../authContext';

const useInputContainer = () => {
	const [inputsAll, setInputsAll] = useState([]);
	const [inputs, setInputs] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const { propertiesSelected } = useAuthentication();

	const getInputs = () => {
		api.get(`/inputs/${propertiesSelected}`)
			.then(res => {
				setInputsAll(formatResponse(res.data));
				setInputs(formatResponse(res.data));
				setLoading(false);
			})
			.catch(err => {
				console.log(err);
			});
	};

	const filter = direction => {
		direction = direction.toLowerCase();

		if (direction === 'todos') {
			setInputs(inputsAll);
		}

		setInputs(inputsAll.filter(obj => obj.extras.direction == direction));
	};

	return {
		inputs,
		getInputs,
		isLoading,
		filter,
		inputsAll,
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
				whoReceived: res.whoReceivedPeople.name || '--',
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
	if (response === 2) return 'saída';
};

export const InputContainer = createContainer(useInputContainer);

export const useInput = () => useContainer(InputContainer);

import { useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';
import api from '../../api';
import { useAuthentication } from '../authContext';

const useTaskContainer = () => {
	const [tasks, setTasks] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const { propertiesSelected } = useAuthentication();

	const getTasks = () => {
		propertiesSelected.map(each => {
			api.get(`/tasks/${each}`)
				.then(res => {
					console.log(formatResponse(res.data.tasks));
					setTasks(formatResponse(res.data.tasks));
					setLoading(false);
				})
				.catch(err => {
					console.log(err);
				});
		});
	};

	const deleteTasks = id => {
		setLoading(true);
		api.post(`/DeleteTask/${id}`)
			.then(res => {
				getTasks();
			})
			.catch(err => {
				console.log(err);
			});
	};

	const postTasks = data => {
		api.post(`/task`, data)
			.then(res => {
				console.log(res);
				getTasks();
			})
			.catch(err => {
				console.log(err);
			});
	};

	return {
		tasks,
		getTasks,
		isLoading,
		deleteTasks,
	};
};

const formatResponse = response => {
	let tempArray = [];
	response.forEach(res => {
		tempArray.push({
			id: res.id,
			title: res.title,
			status: formatStatus[res.status],
			expected: res.expected.substring(0, res.expected.indexOf('T')),
			responsible: `${res.professional.name} ${res.professional.surName}`,
			centers: 'Animais, Lavoura',
		});
	});

	return tempArray;
};

const formatStatus = Object.freeze({
	1: 'open',
	2: 'refused',
	3: 'done',
	4: 'unstarted',
});

export const TaskContainer = createContainer(useTaskContainer);

export const useTask = () => useContainer(TaskContainer);

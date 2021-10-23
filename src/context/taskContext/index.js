import { useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';
import api from '../../api';
import { useAuthentication } from '../authContext';
import { formatResponseTask } from './formatTask';

const useTaskContainer = () => {
	const [tasks, setTasks] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const { propertiesSelected } = useAuthentication();

	const getTasks = () => {
		propertiesSelected.map(each => {
			api.get(`/tasks/${each}`)
				.then(res => {
					setTasks(formatResponseTask(res.data.tasks));
					setLoading(false);
				})
				.catch(err => {
					console.error(err);
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
				console.error(err);
			});
	};

	const postTasks = data => {
		api.post(`/task`, data)
			.then(res => {
				console.log(res);
				getTasks();
			})
			.catch(err => {
				console.error(err);
			});
	};

	return {
		tasks,
		getTasks,
		isLoading,
		deleteTasks,
	};
};

export const TaskContainer = createContainer(useTaskContainer);

export const useTask = () => useContainer(TaskContainer);

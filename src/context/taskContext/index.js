import { useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';
import api from '../../api';
import { tasksSelect } from '../../utils/dataMock/selectMock';
import { useAuthentication } from '../authContext';
import { formatResponseTask, formatStatus } from './formatTask';

const useTaskContainer = () => {
	const [tasks, setTasks] = useState(tasksSelect);
	const [isLoading, setLoading] = useState(true);
	const { propertiesSelected } = useAuthentication();

	const getTasks = () => {
		propertiesSelected.map((each) => {
			api.get(`/tasks/${each}`)
				.then((res) => {
					setTasks(formatResponseTask(res.data.tasks));
					setLoading(false);
				})
				.catch((err) => {
					console.error(err);
					setLoading(false);
				});
		});
	};

	const deleteTasks = (id) => {
		setLoading(true);
		api.post(`/DeleteTask/${id}`)
			.then((res) => {
				getTasks();
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
			});
	};

	const postTasks = (data) => {
		api.post(`/task`, data)
			.then((res) => {
				console.log(res);
				getTasks();
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
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

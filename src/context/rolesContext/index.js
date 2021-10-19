import { useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';
import api from '../../api';
import { useAuthentication } from '../authContext';
import { formatResponseEmployee, formatResponseRole } from './formatRoles';

const useRoleContainer = () => {
	const { propertiesSelected, token } = useAuthentication();
	const [roles, setRoles] = useState([]);
	const [employees, setEmployees] = useState([]);
	const [isLoading, setLoading] = useState(true);

	const getRoles = () => {
		propertiesSelected.map(property => {
			api.get(`/offices/${property}`)
				.then(res => {
					setRoles(formatResponseRole(res.data.office));
					setLoading(false);
				})
				.catch(err => {
					console.log(err);
				});
		});
	};

	const getEmployees = () => {
		propertiesSelected.map(property => {
			api.get(`/people/${property}`)
				.then(res => {
					setEmployees(formatResponseEmployee(res.data.people));
					setLoading(false);
				})
				.catch(err => {
					console.log(err);
				});
		});
	};

	const deleteEmployee = id => {
		setLoading(true);
		api.defaults.headers.authorization = `Bearer ${token}`;
		api.delete(`/people/${id}`, {
			id: id,
		})
			.then(res => {
				getEmployees();
			})
			.catch(err => {
				console.log(err);
			});
	};

	const deleteRole = id => {
		setLoading(true);
		api.defaults.headers.authorization = `Bearer ${token}`;
		api.delete(`/office/${id}`, {
			id: id,
		})
			.then(res => {
				getRoles();
			})
			.catch(err => {
				console.log(err);
			});
	};

	return {
		roles,
		employees,
		getRoles,
		getEmployees,
		isLoading,
		deleteRole,
		deleteEmployee,
	};
};

export const RoleContainer = createContainer(useRoleContainer);

export const useRole = () => useContainer(RoleContainer);

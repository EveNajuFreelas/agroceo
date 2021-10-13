import { useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';
import api from '../../api';
import { useAuthentication } from '../authContext';

const useRoleContainer = () => {
	const { propertiesSelected, token } = useAuthentication();

	const [roles, setRoles] = useState([]);
	const [employees, setEmployees] = useState([]);
	const [isLoading, setLoading] = useState(true);

	const getRolesAndEmployees = () => {
		api.get(`/offices/${propertiesSelected}`)
			.then(res => {
				setRoles(formatResponseRole(res.data.office));
			})
			.catch(err => {
				console.log(err);
			});

		api.get(`/people/${propertiesSelected}`)
			.then(res => {
				setEmployees(formatResponseEmployee(res.data.people));
				setLoading(false);
			})
			.catch(err => {
				console.log(err);
			});
	};

	const deleteEmployee = id => {
		setLoading(true);
		api.defaults.headers.authorization = `Bearer ${token}`;
		api.delete(`/people/${id}`, {
			id: id,
		})
			.then(res => {
				getRolesAndEmployees();
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
				getRolesAndEmployees();
			})
			.catch(err => {
				console.log(err);
			});
	};

	return {
		roles,
		employees,
		getRolesAndEmployees,
		isLoading,
		deleteRole,
		deleteEmployee,
	};
};
const formatResponseEmployee = response => {
	let tempArray = [];
	response.map(res => {
		console.log(res);
		tempArray.push({
			data: {
				id: res.id,
				name: res.name,
				surName: res.surName,
				role: res.office.length === 0 ? null : res.office[0].name,
				phone: res.phone,
				contract: res.contract,
				country: res.country || 'Brasil',
			},
		});
	});
	return tempArray;
};
const formatResponseRole = response => {
	let tempArray = [];
	response.map(res => {
		tempArray.push({
			id: res.id,
			roleName: res.name,
			obligations: formatObligations(res.obligations),
			daysWeek: formatDays(res.days.days.days),
		});
	});

	return tempArray;
};

const formatObligations = obligations => {
	let tempArray = [];

	obligations.map(obligation => {
		tempArray.push(obligation.name);
	});

	return tempArray;
};

const formatDays = days => {
	let tempArray = [];
	days.map(day => {
		if (day.checked) {
			const nome = day.day;
			day.timeCourse.map(dayTime => {
				if (dayTime.checked) {
					tempArray.push(`${nome}-feira (${dayTime.name})`);
				}
			});
		}
	});

	return tempArray;
};

export const RoleContainer = createContainer(useRoleContainer);

export const useRole = () => useContainer(RoleContainer);

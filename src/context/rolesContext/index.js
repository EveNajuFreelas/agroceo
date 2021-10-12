import { useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';
import api from '../../api';

const useRoleContainer = () => {
	const [roles, setRoles] = useState([]);
	const [employees, setEmployees] = useState([]);
	const [isLoading, setLoading] = useState(true);

	const getRolesAndEmployees = id => {
		api.get(`/offices/${id}`)
			.then(res => {
				setRoles(formatResponseRole(res.data.office));
			})
			.catch(err => {
				console.log(err);
			});

		api.get(`/people/${id}`)
			.then(res => {
				setEmployees(formatResponseEmployee(res.data.people));
				setLoading(false);
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
	};
};
const formatResponseEmployee = response => {
	let tempArray = [];
	response.map(res => {
		tempArray.push({
			data: {
				id: res.id,
				name: res.name,
				surName: res.surName,
				role: res.office.length === 0 ? null : res.office[0].name,
				phone: res.phone,
				contract: res.contract,
				country: res.country,
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

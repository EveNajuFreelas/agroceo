export const formatResponseEmployee = response => {
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

export const formatResponseRole = response => {
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

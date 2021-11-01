import { useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';

const ExpensesContext = () => {
	const extraMockedInfo = {
		TotalValue: 1000,
		AccountPlan: 'Combustivel',
		Properties: [
			{
				id: 0,
				name: 'Fazenda Recanto',
				percentage: 80,
				value: 8000,
			},
			{
				id: 1,
				name: 'Fazenda Lá',
				percentage: 20,
				value: 2000,
			},
		],
		selectedProperties: {
			properties: [{
					id: 0,
					name: 'Fazenda Recanto',
					percentage: 100,
					value: 10000,
			}],
			numberParcels: 10,
			payedParcels: [1, 2, 3],
			parcelsValue: 1000,
		},

	};

	const [activeContent, setActiveContent] = useState(extraMockedInfo);
	const [modalState, setModalState] = useState(false);

	const editActiveContent = data =>
		setActiveContent({ ...data, ...extraMockedInfo });

	const clearContent = () => setActiveContent({});

	return {
		activeContent,
		modalState,
		editActiveContent,
		setModalState,
		clearContent,
	};
};

export const ExpensesContainer = createContainer(ExpensesContext);

export const useExpensesContainer = () => useContainer(ExpensesContainer);

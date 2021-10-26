import { useEffect, useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';

const ModalsContext = () => {
	const [modalState, setmodalState] = useState(false);

	const [activeContent, setActiveContent] = useState({ receipt: null });

	useEffect(() => {
		console.log(modalState);
	}, [modalState]);

	const openModal = () => {
		setmodalState(true);
		console.log('modal abriu');
	};

	const closeModals = () => {
		setmodalState(false);
		console.log('modal fechou');
	};

	const editActiveContent = (data) => setActiveContent(data);

	const clearContent = () => setActiveContent({});

	return {
		activeContent,
		modalState,
		editActiveContent,
		clearContent,
		openModal,
		closeModals,
		setActiveContent,
	};
};

export const ModalsContainer = createContainer(ModalsContext);

export const useModalsContainer = () => useContainer(ModalsContainer);

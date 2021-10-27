import { useEffect, useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';

const ModalsContext = () => {
	const [modalState, setmodalState] = useState(false);
	const [modalEditState, setModalEditState] = useState(false);
	const [modalUtilizationState, setModalUtilizationState] = useState(false);

	const [activeContent, setActiveContent] = useState({ receipt: null });

	const openModal = () => {
		setmodalState(true);
	};

	const openEditModal = () => {
		setModalEditState(true);
	};

	const openUtilizationModal = () => {
		setModalUtilizationState(true);
	};

	const closeModals = () => {
		setmodalState(false);
	};

	const closeEditModal = () => {
		setModalEditState(false);
	};

	const closeUtilizationModal = () => {
		setModalUtilizationState(false);
	};

	const editActiveContent = (data) => setActiveContent(data);

	const clearContent = () => setActiveContent({});

	return {
		activeContent,
		modalState,
		modalEditState,
		modalUtilizationState,
		editActiveContent,
		clearContent,
		openModal,
		openEditModal,
		openUtilizationModal,
		closeModals,
		closeEditModal,
		closeUtilizationModal,
		setActiveContent,
	};
};

export const ModalsContainer = createContainer(ModalsContext);

export const useModalsContainer = () => useContainer(ModalsContainer);

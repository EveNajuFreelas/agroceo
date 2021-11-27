import { useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';

const ModalsContext = () => {
	const [modalState, setmodalState] = useState(false);
	const [modalEditState, setModalEditState] = useState(false);
	const [modalUtilizationState, setModalUtilizationState] = useState(false);
	const [secondModalState, setSecondModalState] = useState(false);

	const [activeContent, setActiveContent] = useState({ receipt: null });

	const openModal = () => {
		setmodalState(true);
	};

	const openSecondModal = () => {
		setSecondModalState(true);
	};

	const openEditModal = () => {
		setModalEditState(true);
	};

	const openUtilizationModal = () => {
		setModalUtilizationState(true);
	};

	const closeModals = () => {
		setmodalState(false);
		setActiveContent();
	};

	const closeSecondModal = () => {
		setSecondModalState(false);
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
		secondModalState,
		openSecondModal,
		editActiveContent,
		clearContent,
		openModal,
		openEditModal,
		openUtilizationModal,
		closeModals,
		closeEditModal,
		closeUtilizationModal,
		closeSecondModal,
	};
};

export const ModalsContainer = createContainer(ModalsContext);

export const useModalsContainer = () => useContainer(ModalsContainer);

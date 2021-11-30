import { useState } from "react";
import { createContainer, useContainer } from "unstated-next";

const ManagementContext = () => {
    const [entranceModalState, setEntranceModalState] = useState(false);
    const [exitModalState, setExitModalState] = useState(false);
    const [initialModalState, setInitialModalState] = useState(false);
    
    const [activeContent, setActiveContent] = useState({ 
        receipt: null
    });

    const openEntranceModal = () => {
        setInitialModalState(false);
        setExitModalState(false);
        setEntranceModalState(true);
    }

    const openExitModal = () => {
        setInitialModalState(false);
        setEntranceModalState(false);
        setExitModalState(true);
    }

    const openInitialModal = () => {
        setEntranceModalState(false);
        setExitModalState(false);
        setInitialModalState(true);
    }

    const closeModals = () => {
        setEntranceModalState(false);
        setExitModalState(false);
        setInitialModalState(false);
    }
    
    const editActiveContent = (data) => setActiveContent(data);

    const submitNewSupplyEntry = (data) => {
        // add API call here
        setActiveContent(data);
    }
    
    const clearContent = () => setActiveContent({});
    
    return {
        activeContent,
        entranceModalState,
        exitModalState,
        initialModalState,
        editActiveContent,
        clearContent,
        openEntranceModal,
        openExitModal,
        openInitialModal,
        closeModals,
        setActiveContent,
        submitNewSupplyEntry
    }
};

export const ManagementContainer = createContainer(ManagementContext);

export const useManagementContainer = () => useContainer(ManagementContainer);
import { useState } from "react";
import { createContainer, useContainer } from "unstated-next";

const ExpensesContext = () => {
    const extraMockedInfo = {
        TotalValue: 1000,
        AccountPlan: 'Combustivel',
        Properties: [
            {
                id: 0,
                name: 'Fazenda Recanto',
                percentage: 80,
                value: 3200
            },
            {
                id: 1,
                name: 'Fazenda Lá',
                percentage: 20,
                value: 800
            }
        ],
    };

    const [activeContent, setActiveContent] = useState(extraMockedInfo);
    const [modalState, setModalState] = useState(false);

    const editActiveContent = (data) => setActiveContent(data);
    
    const clearContent = () => setActiveContent({});
    
    return {
        activeContent,
        modalState,
        editActiveContent,
        setModalState,
        clearContent,
    }
};

export const ExpensesContainer = createContainer(ExpensesContext);

export const useExpensesContainer = () => useContainer(ExpensesContainer);
import { useState } from "react";
import { createContainer, useContainer } from "unstated-next";
import { financeiroData } from "../../utils/dataMock/mock";

const ExpensesContext = () => {
    const [activeContent, setActiveContent] = useState({
        ...financeiroData[0], 
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
    });
    const [modalState, setModalState] = useState(false);
    
    const clearContent = () => setActiveContent({});
    
    return {
        activeContent,
        modalState,
        setActiveContent,
        setModalState,
        clearContent,
    }
};

export const ExpensesContainer = createContainer(ExpensesContext);

export const useExpensesContainer = () => useContainer(ExpensesContainer);
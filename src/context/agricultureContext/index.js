import { useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';
import api from '../../api';
import { useAuthentication } from '../authContext';

const AgricultureContainer = () => {
	const { propertiesSelected } = useAuthentication();

    const [agriculture, setAgriculture] = useState();
    const [isLoading, setIsLoading] = useState(true);
    
    const getAgriculture = () => {
        //add link
        propertiesSelected.map(property => (
            api.get(``).then(res => {
                setAgriculture(res);
                setIsLoading(false);
            }).catch(err => {
                console.error(err);
                setIsLoading(false);
            })
        ));
    };

    const editAgriculture = (data) => {
        propertiesSelected.map(property => (
            // add link
            api.put(``, data).then(res => {
                setAgriculture(res);
                setIsLoading(false);
            }).catch(err => {
                console.error(err);
                setIsLoading(false);
            })
        ));
    }

    return {
        agriculture,
        getAgriculture,
        editAgriculture,
        isLoading,
    };
};

export const AgricultureContext = createContainer(AgricultureContainer);

export const useAgriculture = () => useContainer(AgricultureContainer);

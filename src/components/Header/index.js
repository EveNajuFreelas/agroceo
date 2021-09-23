import { Button } from "@material-ui/core";
import { AddCircleOutline } from '@material-ui/icons';
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { HeaderStyle, HeaderTitle, HeaderDate, HeaderInfo, StyledSelect, StyledMenuItem } from "./styles";

const mockProperties = [
    {
        value: 'all',
        title: 'Todas as propriedades',
    }, {
        value: 'prop1',
        title: 'Prop 1',
    }, {
        value: 'prop2',
        title: 'Prop 2',
    }
]

export const Header = () => {
    const { t } = useTranslation()
    const [dropdownValue, setDropdownValue] = useState(mockProperties.length > 0 ? mockProperties[0].value : 'none');

    const todayDate = new Date().toLocaleDateString(t("date"), {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'utc'
    });

    const handleDropdown = e => {
        setDropdownValue(e.target.value);
    }

    return (
        <HeaderStyle>
            <HeaderInfo>
                <HeaderTitle>{t('greeting')}</HeaderTitle>
                <HeaderDate>{todayDate}</HeaderDate>
            </HeaderInfo>
            <StyledSelect 
                value={dropdownValue} 
                onChange={handleDropdown}
            >
                {mockProperties.length > 0 
                    ? mockProperties.map(prop => (
                        <StyledMenuItem value={prop.value}>{prop.title}</StyledMenuItem>
                    )) 
                    : <StyledMenuItem value="none">Nenhuma propriedade cadastrada.</StyledMenuItem>}                
            </StyledSelect>
        </HeaderStyle>
    );
}
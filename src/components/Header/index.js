import React, { useState } from "react";
import { MenuItem } from "@material-ui/core";
import { HeaderStyle, HeaderTitle, HeaderDate, HeaderInfo, StyledSelect } from "./styles";

export const Header = () => {
    const [dropdownValue, setDropdownValue] = useState("Todas as Propriedades");
    const todayDate = new Date().toLocaleDateString('pt-br', {
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
                <HeaderTitle>Oi!</HeaderTitle>
                <HeaderDate>{todayDate}</HeaderDate>
            </HeaderInfo>
            <StyledSelect value={dropdownValue} onChange={handleDropdown}>
                <MenuItem value="Todas as Propriedades">Todas as Propriedades</MenuItem>
                <MenuItem value="prop1">Prop 1</MenuItem>
            </StyledSelect>
        </HeaderStyle>
    );
}
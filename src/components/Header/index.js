import React, { useState } from "react";
import { Select, MenuItem } from "@material-ui/core";
import { HeaderStyle, HeaderTitle, HeaderDate, HeaderInfo } from "./styles";

export const Header = () => {
    const [dropdownValue, setDropdownValue] = useState("Todas as Propriedades");

    const handleDropdown = e => {
        console.log(e.target.value);
        setDropdownValue(e.target.value);
    }

    return (
        <HeaderStyle>
            <HeaderInfo>
                <HeaderTitle>Oi!</HeaderTitle>
                <HeaderDate>15 de setembro de 2021</HeaderDate>
            </HeaderInfo>
            <Select value={dropdownValue} onChange={handleDropdown}>
                <MenuItem value="Todas as Propriedades">Todas as Propriedades</MenuItem>
                <MenuItem value="prop1">Prop 1</MenuItem>
            </Select>
        </HeaderStyle>
    );
}
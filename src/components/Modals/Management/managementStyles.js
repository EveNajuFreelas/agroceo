import { Button, Radio } from "@material-ui/core";
import styled from "styled-components";
import { defaultTheme } from "../../../theme";

const { margin, colors, border } = defaultTheme;

export const TypeManagementButton = styled(props => <Button {...props} variant="outlined" />)`
    width: 100%;
    margin: ${margin.exg} 0;
    color: ${props => props.isEntry ? colors.primary : colors.primaryVariant};
    border: ${border.buttonSuccess};
`;

export const FuelTypeRadio = styled(Radio)`

`;
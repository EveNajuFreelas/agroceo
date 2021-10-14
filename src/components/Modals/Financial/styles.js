import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import { defaultTheme } from '../../../theme/index';

const { margin } = defaultTheme;

export const PropertyDivisionWrapper = styled.div`
`;

export const PropertiesField = styled(Grid)`
    display: flex;
    margin: ${margin.lg} 0;
`;
import styled from "styled-components";
import { defaultTheme } from '../../theme';
import { Select, MenuItem } from "@material-ui/core";

const { align, text, border, margin, colors, padding, borderRadius } = defaultTheme;

export const HeaderStyle = styled.div`
    display: flex;
    width: 100%;
    height: 4em;
    background-color: #fff;
    justify-content: ${align.spaceBetween};
    align-items: ${align.center};
    position: fixed;
    border-bottom: ${border.header};
    z-index: 10;
`;

export const HeaderTitle = styled.p`
    font-size: ${text.size.h5};
    font-weight: ${text.weight.bold};
    margin: 0;
`;

export const HeaderDate = styled.p`
    margin: 0;
    size: ${text.size.caption};
    color: ${colors.neutral6};
`;

export const HeaderInfo = styled.div`
    margin: 0 ${margin.lg};
`;

export const StyledSelect = styled(Select)`
    border: ${border.header};
    padding: ${padding.md};
    border-radius: ${borderRadius.md};

    &.MuiInput-underline:before {
        border-bottom: none;
    }

    &.MuiInput-underline:hover:not(.Mui-disabled):before {
        border-bottom: none;
    }
`;
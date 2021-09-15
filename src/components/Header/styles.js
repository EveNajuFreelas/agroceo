import styled from "styled-components";
import { defaultTheme } from '../../theme';

const { align, text, border, margin } = defaultTheme;

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
`;

export const HeaderInfo = styled.div`
    margin: 0 ${margin.lg};
`;
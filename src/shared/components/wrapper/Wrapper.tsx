import { styled } from "styled-components";

export const Wrapper = styled.div<{flexDirection: 'column' | 'row'; minheightfull?: boolean; usePaddingX?: boolean; usePaddingY?: boolean}>`
    background: ${({theme}) => theme.color.background};
    min-height: ${({minheightfull}) => minheightfull && '100vh'};
    display: flex;
    flex-direction: ${({flexDirection}) => flexDirection};
    padding: ${({usePaddingX, usePaddingY, theme}) => {
        let paddingX = '0';
        let paddingY = '0';
        if(usePaddingX){
            paddingX = theme.spacing.pad.medium;
        }
        if(usePaddingY){
            paddingY = theme.spacing.pad.medium;
        }

        return `${paddingY} ${paddingX}`;
    }};
    gap: ${({theme}) => theme.spacing.gap.big};
`
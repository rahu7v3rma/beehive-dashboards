import { ForwardedRef, forwardRef } from 'react';
import { Label } from 'src/shared';
import styled from 'styled-components';
import { Box } from '@mui/material';
import theme from 'src/theme';

const labelStyles = {
    font: '12px/15px "Inter",sans-serif !important',
    color: theme.color.white30,
    cursor: 'pointer'
};

const labelContainerStyles = {
    position: 'relative',
    left: '50%',
    display: 'inline-block',
    transform: 'translateX(-50%)'
};

export const maximumQATimesLabel = {
    font: '12px/12px "Inter",sans-serif !important',
    color: theme.color.white50,
    width: 200
};

export const QATimesBox = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 25px;
    justify-content: flex-end;
`;

export const rawInputMargin = {
    marginBottom: '18px'
};

export const QATimesSelectBox = styled(Box)`
    width: 60px;
    margin-left: 14px;
    background-color: transparent;
`;

export const taskDescriptionStyle = {
    padding: '15px',
    marginBottom: '28px'
};

export const removeMargin = {
    marginTop: 0,
    marginBottom: 0
};

export const deleteButtonStyles = {
    marginBottom: '24px',
    marginTop: 0
};

export const CustomLabel = styled('label')({
    backgroundColor: theme.color.darkBlue,
    position: 'absolute',
    transform: 'translate(14px, -9px) scale(0.75)',
    transformOrigin: 'top left',
    color: theme.color.yellow60,
    zIndex: '1',
    left: '10px',
    padding: '0px 4px'
});

export const TooltipLabel = forwardRef(function MyComponent(
    props,
    ref: ForwardedRef<HTMLElement | null>
) {
    //  Spread the props to the underlying DOM element.
    return (
        <TooltipLabelContainer {...props} ref={ref} sx={labelContainerStyles}>
            <Label sxOverrides={labelStyles}>2-4 work hours</Label>
        </TooltipLabelContainer>
    );
});
export const TooltipLabelContainer = styled(Box)``;

import { FunctionComponent, ReactNode } from 'react';
import { StyledIconButton } from './styled';

export type Props = {
    children: ReactNode;
    onClick: () => void;
    width?: string;
    height?: string;
};

const StyledButtonWithIcon: FunctionComponent<Props> = ({
    children,
    onClick,
    width,
    height
}) => {
    return (
        <StyledIconButton onClick={onClick} width={width} height={height}>
            {children}
        </StyledIconButton>
    );
};

export default StyledButtonWithIcon;

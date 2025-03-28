import { FunctionComponent } from 'react';
import { StyledButton, Loader } from './styled';

export interface Props {
    color?: string;
    width?: string;
    height?: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
    borderRadius?: string;
    disabled?: boolean;
    isLoading?: boolean;
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    styles?: React.CSSProperties;
}

const Button: FunctionComponent<Props> = ({
    children,
    color,
    onClick,
    width,
    height,
    type,
    styles,
    borderRadius,
    disabled,
    isLoading = false
}: Props) => (
    <StyledButton
        type={type}
        width={width}
        height={height}
        onClick={onClick}
        color={color}
        borderRadius={borderRadius}
        styles={styles}
        disabled={disabled}
        isLoading={isLoading}
    >
        {children}
        {isLoading && <Loader />}
    </StyledButton>
);

export default Button;

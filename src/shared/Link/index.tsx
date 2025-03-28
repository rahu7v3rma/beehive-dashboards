import { FunctionComponent } from 'react';
import { AnchorTag } from './styled';

export type Props = {
    href?: string;
    color?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    isDisabled?: boolean;
    target?: string;
    children?: React.ReactNode | JSX.Element[];
};

const Link: FunctionComponent<Props> = ({
    href = '',
    color,
    onClick,
    isDisabled = false,
    target = '_blank',
    children
}: Props) => {
    return (
        <AnchorTag
            href={href}
            onClick={onClick}
            target={target}
            isDisabled={isDisabled}
            color={color}
        >
            {children}
        </AnchorTag>
    );
};

export default Link;

import { FunctionComponent } from 'react';
import { IconWrapper } from './styled';

export interface Props {
    color: string;
    width: string;
    height: string;
    bgColor: string;
    source: React.ReactNode;
    borderRadius: string;
    border?: string;
}

const Icon: FunctionComponent<Props> = ({
    color,
    width,
    height,
    bgColor,
    source,
    borderRadius,
    border
}: Props) => {
    return (
        <IconWrapper
            width={width}
            height={height}
            bgColor={bgColor}
            borderRadius={borderRadius}
            color={color}
            border={border}
        >
            {source}
        </IconWrapper>
    );
};

export default Icon;

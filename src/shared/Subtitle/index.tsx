import React from 'react';
import Label from '../Label';
import { S } from './styled';

interface SubtitleProps {
    children: React.ReactNode;
}

const Subtitle: React.FC<SubtitleProps> = ({ children, ...props }) => {
    return (
        <Label sxOverrides={S.subtitle} {...props}>
            {children}
        </Label>
    );
};

export default Subtitle;

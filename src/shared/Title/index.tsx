import React from 'react';
import Label from '../Label';
import { S } from './styled';

interface TitleProps {
    children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children, ...props }) => {
    return (
        <Label sxOverrides={S.title} {...props}>
            {children}
        </Label>
    );
};

export default Title;

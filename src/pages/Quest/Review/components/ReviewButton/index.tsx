import React from 'react';
import { btnStyles } from './styled';
import { Button as ButtonComponent } from 'src/shared';

interface ReviewButtonProps {
    onClick: () => void;
    label: string;
    width?: string;
    styleType?: 'default' | 'yellow' | 'codGray';
    disabled?: boolean;
    isLoading?: boolean;
}

const ReviewButton: React.FC<ReviewButtonProps> = ({
    onClick,
    label,
    width = '200px',
    styleType = 'default',
    disabled = false,
    isLoading = false
}) => {
    const customStyles = {
        ...btnStyles[styleType],
        width,
        'pointer-events': disabled || isLoading ? 'none' : 'auto',
        opacity: disabled || isLoading ? '0.5' : '1'
    };

    return (
        <ButtonComponent
            onClick={onClick}
            styles={customStyles}
            disabled={disabled}
            isLoading={isLoading}
        >
            {label}
        </ButtonComponent>
    );
};

export default ReviewButton;

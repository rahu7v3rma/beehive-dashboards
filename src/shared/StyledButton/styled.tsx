import { styled } from '@mui/system';
import { IconButton } from '@mui/material';
import color from 'src/theme/color';

type Props = {
    width?: string;
    height?: string;
};

export const StyledIconButton = styled(IconButton)(
    (props: Props) => `
    && {
        width: ${props.width || '35px'};
        height: ${props.height || '35px'};
        border-radius: 35px;
        background-color: rgba(255, 220, 168, 0.1);
        margin-left: 5px;
    }

    && svg {
        fill: ${color.lightningYellow};
        transform: scale(0.7);
    }
`
);

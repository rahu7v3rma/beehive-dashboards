import { styled } from '@mui/system';
import theme from '../../theme';
import { Props } from '.';

export const Container = styled('div')({
    width: 'auto',
    display: 'inline-block',
    padding: '10px'
});

export const Row = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
});

export const ProgressContainer = styled('div')(({ value }: Props) => ({
    border: `0.5px solid ${
        value && value > 85
            ? theme.color.brightGreen
            : value && value > 25
              ? theme.color.alloyOrange
              : theme.color.orangyRed
    }`,
    width: 63,
    height: 24
}));

export const Progress = styled('div')(({ value }: Props) => ({
    width: `${((value || 1) / 100) * 63}px`,
    height: 24,
    background:
        value && value < 25
            ? theme.color.darkMintRed
            : value && value < 85
              ? theme.color.darkMintYellow
              : theme.color.darkMintGreen
}));

import { FormControlLabel as MuiFormControlLabel, styled } from '@mui/material';
import theme from 'src/theme';
import MuiSwitch, { SwitchProps } from '@mui/material/Switch';

export const Switch = styled((props: SwitchProps) => (
    <MuiSwitch
        focusVisibleClassName=".Mui-focusVisible"
        disableRipple
        {...props}
    />
))(({}) => ({
    width: 79,
    height: 32,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        top: 4,
        left: 8,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(40px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.color.greenSwitchButton,
                opacity: 1,
                border: 0
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5
            },

            '.MuiSwitch-thumb': {
                backgroundColor: theme.color.switchOnColor
            }
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color: 'grey'
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.7
        }
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        backgroundColor: theme.color.switchOffColor,
        width: 21,
        height: 21
    },
    '& .MuiSwitch-track': {
        borderRadius: 16,
        backgroundColor: theme.color.darkMintRed,
        opacity: 1
        // transition: 'background-color 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
    }
}));

export const FormControlLabel = styled(MuiFormControlLabel)(
    (props: { checked: boolean }) => ({
        marginLeft: 40,
        marginRight: 0,
        '& .MuiFormControlLabel-label': {
            position: 'absolute',
            marginLeft: props.checked ? 16 : 40,
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '18px',
            color: props.checked
                ? theme.color.switchOnColor
                : theme.color.orangyRed
        }
    })
);

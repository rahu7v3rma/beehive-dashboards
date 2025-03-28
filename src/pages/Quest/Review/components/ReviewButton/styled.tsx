import color from 'src/theme/color';

const baseBtnStyles = {
    borderRadius: '20px',
    transition: 'background-color 0.3s, color 0.3s',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontWeight: '500'
};

export const btnStyles = {
    default: {
        ...baseBtnStyles,
        color: color.lightningYellow,
        backgroundColor: color.blackRock,
        '&:hover': {
            backgroundColor: color.lightningYellow,
            color: color.white
        }
    },
    yellow: {
        ...baseBtnStyles,
        color: color.white,
        backgroundColor: color.lightningYellow
    },
    codGray: {
        ...baseBtnStyles,
        color: color.white,
        backgroundColor: color.codGray,
        '&:hover': {
            backgroundColor: color.lightningYellow,
            color: color.white
        }
    }
};

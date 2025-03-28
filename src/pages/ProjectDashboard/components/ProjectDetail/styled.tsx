import theme from 'src/theme';

const font = (fontSize: number, lineHeight: number): React.CSSProperties => {
    return {
        fontFamily: '"Inter",sans-serif',
        fontSize,
        lineHeight
    };
};

export const S: { [key: string]: React.CSSProperties } = {
    statusText: {
        ...font(12, 12),
        color: theme.color.white50,
        marginRight: '12px'
    },
    statusChip: {
        backgroundColor: theme.color.lightGreen,
        color: theme.color.green,
        ...font(12, 12),
        paddingRight: '50px'
    },
    sinceText: {
        ...font(12, 12),
        color: theme.color.white30,
        marginLeft: '12px'
    }
};

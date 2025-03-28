export type IBreakPoint = {
    xs3: string;
    xs2: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    lg2: string;
    xl: string;
    xl2: string;
};

export const BREAKPOINTS_NUM = {
    xs3_num: 320,
    xs2_num: 375,
    xs_num: 414,
    sm_num: 576,
    md_num: 768,
    lg_num: 1024,
    lg2_num: 1280,
    xl_num: 1440,
    xl2_num: 2256
};

const breakpoints = {
    xs3: `${BREAKPOINTS_NUM.xs3_num}px`,
    xs2: `${BREAKPOINTS_NUM.xs2_num}px`,
    xs: `${BREAKPOINTS_NUM.xs_num}px`,
    sm: `${BREAKPOINTS_NUM.sm_num}px`,
    md: `${BREAKPOINTS_NUM.md_num}px`,
    lg: `${BREAKPOINTS_NUM.lg_num}px`,
    lg2: `${BREAKPOINTS_NUM.lg2_num}px`,
    xl: `${BREAKPOINTS_NUM.xl_num}px`,
    xl2: `${BREAKPOINTS_NUM.xl2_num}px`
};

export default breakpoints;

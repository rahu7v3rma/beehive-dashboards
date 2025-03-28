export const numberInKFormat = (n: number) => {
    return Math.abs(n) > 999
        ? Math.sign(n) * Number((Math.abs(n) / 1000).toFixed(1)) + 'k'
        : Math.sign(n) * Math.abs(n);
};

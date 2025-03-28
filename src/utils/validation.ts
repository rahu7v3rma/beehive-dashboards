export const validateEmail = (value: string) => {
    if (!value) {
        return 'Email is required';
    }
    if (!/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value)) {
        return 'Invalid email format';
    }
};

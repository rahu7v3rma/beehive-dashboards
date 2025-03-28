import React from 'react';
import theme from '../src/theme';

import { ThemeProvider } from 'styled-components';
import { themes } from '@storybook/theming';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/index.css';

export const decorators = [
    (Story) => (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        </BrowserRouter>
    )
];

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { expanded: true }
};

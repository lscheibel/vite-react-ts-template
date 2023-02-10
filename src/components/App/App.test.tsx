import React from 'react';
import { render } from '../../../test/utils';
import App from './App';

describe('App', async () => {
    it('renders without crashing', () => {
        render(<App />);
    });
});

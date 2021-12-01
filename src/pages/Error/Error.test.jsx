import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import {Error} from './Error';

describe('Error component', () => {
    test('error msg renders', () => {
        render(
            <BrowserRouter>
                <Error />
            </BrowserRouter>
        )
  
        expect(screen.getByText(/no muggles allowed 404/i)).toBeInTheDocument()
        expect(screen.getByRole('button', {name: /go back/i})).toBeInTheDocument()
    })
})
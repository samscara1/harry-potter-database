import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import {Header} from './Header';
import store from '../../../../store'

describe('Header component', () => {
  test('header renders', () => {
    render(
        <Provider store={store}>
            <Header />
        </Provider>
    )
  
  expect(screen.getByText(/harry potter database/i)).toBeInTheDocument()
  })
})
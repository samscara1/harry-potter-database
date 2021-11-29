import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {Search} from './Search';

const getSearch = jest.fn();

describe('Search component', () => {
  test('search renders', () => {
    render(
        <Search />
    )
  
    expect(screen.getByRole('searchbox')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/search by name or house/i)).toBeInTheDocument()
  })

  test('text enter works properly', () => {
    render(
      <Search getSearch={getSearch} />
    )
    userEvent.type(screen.getByRole('searchbox'), 'harry')
    expect(getSearch).toHaveBeenCalledTimes(5)
  })
})
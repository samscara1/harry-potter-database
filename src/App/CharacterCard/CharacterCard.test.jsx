import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { CharacterCard } from './CharacterCard';

describe('CharacterCard component', () => {
  test('Character card renders', () => {
    render(
        <BrowserRouter>
            <CharacterCard name={'Harry Potter'}/>
        </BrowserRouter>
    )
  
  expect(screen.getByText(/harry potter/i)).toBeInTheDocument()
  expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
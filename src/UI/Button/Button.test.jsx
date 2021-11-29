import { render, screen } from '@testing-library/react';

import { Button } from './Button'

describe('Button component', ()=>{
  test('button renders', ()=> {
    
    render(<Button text={'go back'}/>)
  
  expect(screen.getByRole('button')).toBeInTheDocument()
  expect(screen.getByText(/go back/)).toBeInTheDocument()
  })
})
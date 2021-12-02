import { render, screen } from '../../../../utils/withReduxAndRouter'

import { Header } from './Header';

describe('Header component', () => {
    test('header renders', () => {
        render(<Header />)
  
        expect(screen.getByRole('heading',{name: /harry potter database/i})).toBeInTheDocument()
        expect(screen.getByRole('button', {name: /students/i})).toBeInTheDocument()
        expect(screen.getByRole('button', {name: /staff/i})).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Search by Name or House')).toBeInTheDocument()
    })

    
})
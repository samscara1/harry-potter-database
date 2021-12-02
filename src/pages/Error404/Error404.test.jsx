import { render, screen } from '../../utils/withReduxAndRouter';

import { Error404 } from './Error404';

describe('Error component', () => {
    test('error msg renders', () => {
        render(
                <Error404 />
        )
  
        expect(screen.getByText(/no muggles allowed 404/i)).toBeInTheDocument()
        expect(screen.getByRole('button', {name: /go back/i})).toBeInTheDocument()
    })
})
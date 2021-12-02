import { CharacterPage } from './CharacterPage'
import { characters } from '../../msw-config/mockFetch';

import * as reactRedux from 'react-redux'
import { render, screen } from '../../utils/withReduxAndRouter';

jest.mock('react-router-dom', () => ({ 
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({ 
        id: 'Harry Potter'
    }), 
}));

describe('CharacterPage component', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
        }
    )
    test('character page renders', () => {
        useSelectorMock.mockReturnValue(characters)

        render (<CharacterPage />)

        expect(screen.getByText(/harry/i)).toBeInTheDocument()
        expect(screen.getByText(/holly/i)).toBeInTheDocument()
        expect(screen.queryByText(/norris/i)).toBeNull()
        expect(screen.getByRole('img')).toBeInTheDocument()
        expect(screen.getByRole('button')).toBeInTheDocument()
    })
})
import { MainPage } from '../pages/MainPage/MainPage'
import { CharacterPage } from '../pages/CharacterPage/CharacterPage'
import { Error404 } from '../pages/Error404/Error404'

export const routes = [
    {
        path: '/',
        component: MainPage,
        exact: true,
    },
    {
        path: '/character/:id',
        component: CharacterPage,
        exact: true,
    },
    {
        path: '/',
        component: Error404,
    },
]
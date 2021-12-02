import React from 'react';
import { setupServer } from 'msw/node'
import userEvent from '@testing-library/user-event';

import { render, screen } from '../../utils/withReduxAndRouter';

import { charactersHandler, studentsHandler, staffHandler } from '../../msw-config/handlers';

import { MainPage } from './MainPage';

export const handlers = [
    charactersHandler,
    studentsHandler,
    staffHandler
]

const server = setupServer(...handlers)
  
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('MainPage component', () => {

    test('MainPage renders', async () => {

        render(<MainPage/>)

        expect(screen.queryByText(/minerva/i)).not.toBeInTheDocument()
        expect(await screen.findByText(/minerva/i)).toBeInTheDocument()
    })

    test('students button works', async () => {

        render(<MainPage/>)

        expect(screen.queryByText(/minerva/i)).not.toBeInTheDocument()

        userEvent.click (screen.getByRole('button', {name: /students/i}))

        expect(await screen.queryByText(/minerva/i)).not.toBeInTheDocument()
        expect(await screen.findByText(/draco/i)).toBeInTheDocument()
    })

    test('staff button works', async () => {

        render(<MainPage/>)

        expect( screen.queryByText(/minerva/i)).not.toBeInTheDocument()

        userEvent.click ( screen.getByRole('button', {name: /staff/i}))

        expect( await screen.queryByText(/draco/i)).not.toBeInTheDocument()
        expect( await screen.findByText(/norris/i)).toBeInTheDocument()
    })

    test('search works properly', async () => {

        render(<MainPage/>)

        expect(screen.queryByText(/minerva/i)).not.toBeInTheDocument()

        userEvent.type( screen.getByPlaceholderText('Search by Name or House'), 'minerva')

        expect( await screen.findByText(/minerva/i)).toBeInTheDocument()
        expect( await screen.queryByText(/norris/i)).not.toBeInTheDocument()

    })
})
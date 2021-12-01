import React from 'react';
import { setupServer } from 'msw/node'
import userEvent from '@testing-library/user-event';

import { render, screen } from '../../utils/withReduxAndRouter';

import { charactersHandler, studentsHandler, staffHandler } from '../../mocks/handlers';

import App from './App';

export const handlers = [
    charactersHandler,
    studentsHandler,
    staffHandler
]

const server = setupServer(...handlers)
  
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('App component', () => {

    test('App renders', async () => {

        render(<App/>)

        expect(screen.getByRole('heading',{name: /harry potter database/i})).toBeInTheDocument()
        expect(screen.queryByRole('button', {name: /students/i})).toBeInTheDocument()
        expect(screen.queryByRole('button', {name: /staff/i})).toBeInTheDocument()
        expect(screen.queryByRole('searchbox')).toBeInTheDocument()
        expect(screen.queryByText(/minerva/i)).not.toBeInTheDocument()
        expect(await screen.findByText(/minerva/i)).toBeInTheDocument()
    })

    test('students button works', async () => {

        render(<App/>)

        expect(screen.queryByText(/minerva/i)).not.toBeInTheDocument()

        userEvent.click (screen.getByRole('button', {name: /students/i}))

        expect(await screen.queryByText(/minerva/i)).not.toBeInTheDocument()
        expect(await screen.findByText(/draco/i)).toBeInTheDocument()
    })

    test('staff button works', async () => {

        render(<App/>)

        expect( screen.queryByText(/minerva/i)).not.toBeInTheDocument()

        userEvent.click ( screen.getByRole('button', {name: /staff/i}))

        expect( await screen.queryByText(/draco/i)).not.toBeInTheDocument()
        expect( await screen.findByText(/norris/i)).toBeInTheDocument()
    })

    test('search works properly', async () => {

        render(<App/>)

        expect(screen.queryByText(/minerva/i)).not.toBeInTheDocument()

        userEvent.type( screen.getByRole('searchbox'), 'minerva')

        expect( await screen.findByText(/minerva/i)).toBeInTheDocument()
        expect( await screen.queryByText(/norris/i)).not.toBeInTheDocument()

    })
})
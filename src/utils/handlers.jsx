import { rest } from 'msw'
import { characters, students, staff } from './mockFetch'

export const charactersHandler = rest.get('https://hp-api.herokuapp.com/api/characters', (req, res, ctx) => {
    return res(ctx.json(characters), ctx.delay(0))
  })

export const studentsHandler = rest.get('https://hp-api.herokuapp.com/api/characters/students', (req, res, ctx) => {
  return res(ctx.json(students), ctx.delay(0))
})

export const staffHandler = rest.get('https://hp-api.herokuapp.com/api/characters/staff', (req, res, ctx) => {
  return res(ctx.json(staff), ctx.delay(0))
})
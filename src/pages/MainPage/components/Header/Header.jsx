import React from 'react'
import { useDispatch } from 'react-redux'

import { fetchCharacters } from '../../../../store/charactersSlice'

import './Header.scss'

export const Header = () => {
    
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(fetchCharacters())
    }

    return <h1 onClick={handleClick} className='header'>Harry Potter Database</h1>
}
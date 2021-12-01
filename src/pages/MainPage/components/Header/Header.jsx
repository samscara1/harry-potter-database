import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Input } from '../../../../UI/Input/Input'
import { FilterPanel } from '../FilterPanel/FilterPanel';

import { selectSearchValue } from '../../../../store/selectors';
import { changeSearchValue } from '../../../../store/charactersSlice'

import './style.scss'

export const Header = () => {
    const dispatch = useDispatch()
    const value = useSelector(selectSearchValue)

    const handleChange = ({ target: { value } }) => {
        dispatch(changeSearchValue({ value }))
      }

    return (
        <header>
            <h1 className='header'>Harry Potter Database</h1>
            <Input 
                value={value} 
                handleChange={handleChange} 
                placeholder='Search by Name or House'
            />
            <FilterPanel />
        </header>
    )
}
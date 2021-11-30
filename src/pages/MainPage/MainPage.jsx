import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from 'nanoid';

import { Input } from '../../UI/Input/Input'
import { Header } from './components/Header/Header'
import { selectCharacters, selectSearchValue } from '../../store/selectors';
import { Image } from '../../UI/Image/Image';
import { modifyString } from '../../helpers/helpers';
import { FilterPanel } from './components/FilterPanel/FilterPanel';
 
import { changeSearchValue, fetchCharacters } from '../../store/charactersSlice'

import './MainPage.scss';

export const MainPage = () => {
  const dispatch = useDispatch()

  const characters = useSelector(selectCharacters)
  const value = useSelector(selectSearchValue)

  useEffect(() => {
    dispatch(fetchCharacters())
  }, [])

  const handleChange = ({ target: { value } }) => {
    dispatch(changeSearchValue({ value }))
  }

  return (
    <main className='wrapper'>
        <Header />
        <section className='search-form'>
          <Input value={value} handleChange={handleChange} placeholder='Search by Name or House'/>
          <FilterPanel />
        </section>
        <section className='characters-list'>
          {
          characters
          .filter(char => {
            return(
              char.name.toLowerCase().includes(value.toLowerCase()) ||
              char.house.toLowerCase().includes(value.toLowerCase())
            )
          })
          .map((character) => {
            const {name, image} = character
            return (
              <Image 
              key={nanoid}
              isClickable 
              charImg={image} 
              alt={name}
              charLink={`character/${modifyString(name, ' ', '-').toLowerCase()}`}/>
            )
          })}
        </section>
    </main>
  )
}

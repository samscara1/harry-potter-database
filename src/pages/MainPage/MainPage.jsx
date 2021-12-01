import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from 'nanoid';

import { Header } from './components/Header/Header'
import { Image } from '../../UI/Image/Image';
 
import { fetchCharacters } from '../../store/charactersSlice'
import { selectCharacters, selectSearchValue } from '../../store/selectors';

import { modifyString } from '../../helpers/helpers';

import './style.scss';

export const MainPage = () => {
  const dispatch = useDispatch()

  const characters = useSelector(selectCharacters)
  const value = useSelector(selectSearchValue)

  useEffect(() => {
    dispatch(fetchCharacters())
  }, [])

  return (
    <main className='wrapper'>
        <Header />
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

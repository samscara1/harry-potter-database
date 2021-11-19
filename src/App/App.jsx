import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from 'nanoid';

import { Search } from './Search/Search'
import { CharacterCard } from './CharacterCard/CharacterCard'
import { Header } from './Header/Header'
import { Button } from '../Button/Button';
import { selectCharacters } from '../store/selectors';
 
import { fetchCharacters } from '../store/charactersSlice'

import './App.css';

function App() {
  const [search, setSearch] = useState('')

  const dispatch = useDispatch()

  const characters = useSelector(selectCharacters)

  useEffect(() => {
    dispatch(fetchCharacters())
  }, [])

  const handleStudentsClick = async() => {
    dispatch(fetchCharacters('students'))
  }

  const handleStaffClick = async() => {
    dispatch(fetchCharacters('staff'))
  }

  const getSearch = (text) => {
    setSearch(text)
  }

  return (
    <main className='wrapper'>
        <Header />
        <section className='search-form'>
          <Search search={search} getSearch={getSearch} />
          <div className='search-form__buttons'>
            <Button  clickFunction={handleStudentsClick} text={'Students'} />
            <Button  clickFunction={handleStaffClick} text={'Staff'} />
          </div>
        </section>
        <section className='characters-list'>
          {
          characters
          .filter(char => {
            return(
              char.name.toLowerCase().includes(search.toLowerCase()) ||
              char.house.toLowerCase().includes(search.toLowerCase())
            )
          })
          .map((character) => {
            const {name, image} = character
            return (
              <CharacterCard
                name={name} 
                image={image}
                key={nanoid()}
              />
            )
          })}
        </section>
    </main>
  )
}

export default App;

import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from 'nanoid';

import { Search } from '../../UI/Search/Search'
import { Header } from './components/Header/Header'
import { Button } from '../../UI/Button/Button'
import { selectCharacters } from '../../store/selectors';
import { Image } from '../../UI/Image/Image';
import { modifyString } from '../../helpers/helpers';
 
import { fetchCharacters } from '../../store/charactersSlice'

import './MainPage.scss';

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

export default App;

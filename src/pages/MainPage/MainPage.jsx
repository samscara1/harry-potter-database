import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from 'nanoid';

import { Header } from './components/Header/Header'
import { Image } from '../../UI/Image/Image';
 
import { fetchCharacters } from '../../store/charactersSlice'
import { selectFilteredCharacters } from '../../store/selectors';

import { modifyString } from '../../helpers/helpers';

import './style.scss';

export const MainPage = () => {
    const dispatch = useDispatch()

    const filteredCharacters = useSelector(selectFilteredCharacters)

    useEffect(() => {
        dispatch(fetchCharacters())
    }, [])

    return (
        <main className='wrapper'>
            <Header />
            <section className='characters-list'>
            {
                filteredCharacters && filteredCharacters
                .map(({ name, image }) => {
                    return (
                        <Image 
                            key={nanoid}
                            isClickable 
                            charImg={image} 
                            alt={name}
                            charLink={`character/${modifyString(name, ' ', '-').toLowerCase()}`}
                        />
                    )
                })}
        </section>
    </main>
  )
}

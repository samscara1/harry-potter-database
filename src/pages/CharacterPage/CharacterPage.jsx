import React, { useEffect, useState } from 'react';
import { useHistory, useParams, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Button } from '../../UI/Button/Button';
import { Error404 } from '../Error404/Error404';
import { Image } from '../../UI/Image/Image';
import { CharacterDescription } from './components/CharacterDescription/CharacterDescription';

import { selectCharacters } from '../../store/selectors';

import { modifyString } from '../../helpers/helpers'

import './style.scss'

export const CharacterPage = () => {
    const [character, setCharacter] = useState()

    const characters = useSelector(selectCharacters)

    const history = useHistory()
    const params = useParams()
    const location = useLocation()

    useEffect(() => {
        const charInfo = modifyString(params.id, '-', ' ')

        const char = characters.find(character => character.name.toLowerCase() === charInfo.toLowerCase())

        setCharacter(char)
    }, [characters, location])

    const handleClick = () => {
        history.push('/')
    }

    return (
        <>
        {character ? (
            <section className='character-page'>
                <p className='character-page__name'>{character.name}</p>
                <div className='character-page__wrapper'>
                    <Image
                        charImg={character.image}
                        alt={character.name}
                    />
                    <CharacterDescription {...character} />
                </div>
                <Button handleClick={handleClick} text="go back" />
            </section>
            ) : (
                <Error404 />
        )}
        </>
     );
}
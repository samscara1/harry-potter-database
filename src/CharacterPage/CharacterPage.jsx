import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { modifyString } from '../helpers/helpers'
import { Button } from "../Button/Button";
import { Error } from '../Error/Error';
import { selectCharacters } from '../store/selectors';

import no_avatar from '../assets/no_avatar.png'

import './CharacterPage.css'

export const CharacterPage = () => {
    const [character, setCharacter] = useState({})
    const [isFound, setIsFound] = useState(true)

    const characters = useSelector(selectCharacters)

    const history = useHistory()

    const charInfo = modifyString(useParams().id, '-', ' ')

    useEffect(()=> {
        characters.find(character => {
            if (character.name.toLowerCase() === charInfo.toLowerCase()){
                return (setCharacter(character), setIsFound(true))
            } else {
                return setIsFound(false)
            }
        })
    }, [])

    const handleClick = () => {
        history.push('/')
    }
    if (isFound) {
        return <Error />
    }
    return (  
        <section className='character-page'>
            {character.name && <p className='character-page__name'>{character.name}</p>}
            <div className='character-page__wrapper'>
                <img 
                    src={character.image || no_avatar} 
                    alt={character.name} 
                    className='character-page__image'>
                </img>
                <div className='character-page__description'>
                    {character.species && <p>species: {character.species}</p>}
                    {character.gender && <p>gender: {character.gender}</p>}
                    {character.house && <p>house: {character.house}</p>}
                    {(character.yearOfBirth || character.yearOfBirth === 0 ) && <p>year of birth: {character.yearOfBirth}</p>}
                    {character.ancestry && <p>ancestry: {character.ancestry}</p>}
                    {character.patronus && <p>patronus: {character.patronus}</p>}
                    {character.wand && character.wand.wood && <p>wand made of: {character.wand.wood}</p>}
                    {character.wand && character.wand.core && <p>core of wand: {character.wand.core}</p>}
                    {character.wand && character.wand.length && <p>length of wand: {character.wand.length}"</p>}
                </div>
            </div>
                <Button clickFunction={handleClick} text={'go back'} />
        </section>  
     );
}
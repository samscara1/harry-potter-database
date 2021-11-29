import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { modifyString } from '../../helpers/helpers'
import { Button } from '../../UI/Button/Button';
import { Error } from '../Error/Error';
import { selectCharacters } from '../../store/selectors';
import { Image } from '../../UI/Image/Image';
import { CharacterDescription } from './components/CharacterDescription';

import './CharacterPage.scss'

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

                <Image 
                    charImg={ character.image }
                    alt={character.name}
                    />
            <CharacterDescription {...character} />
            </div>
                <Button clickFunction={handleClick} text={'go back'} />
        </section>  
     );
}
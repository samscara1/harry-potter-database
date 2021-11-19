import React from 'react';
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'

import { modifyString } from '../../helpers/helpers'
import no_avatar from '../../assets/no_avatar.png'

import './CharacterCard.css'

export const CharacterCard = ({name, image}) => {
    return (
        <section className='character-card'>
            <Link to={`character/${modifyString(name, ' ', '-').toLowerCase()}`} key={nanoid()} className='character-card__link' >
                <img src={image ? image : no_avatar} alt={name} className='character-card__img' />
                <span className='character-card__name'>{name}</span>
            </Link>
        </section> 
     )
}

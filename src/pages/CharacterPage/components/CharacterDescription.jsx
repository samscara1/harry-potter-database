import React from 'react';

import './style.scss'

export const CharacterDescription = ({
    species,
    gender,
    house,
    yearOfBirth,
    ancestry,
    patronus,
    wand: {
        wood,
        core,
        length,
    }
}) => {
    return (
        <div className='character-description'>
            {species && <p>species: {species}</p>}
            {gender && <p>gender: {gender}</p>}
            {house && <p>house: {house}</p>}
            {(yearOfBirth || yearOfBirth === 0 ) && <p>year of birth: {yearOfBirth}</p>}
            {ancestry && <p>ancestry: {ancestry}</p>}
            {patronus && <p>patronus: {patronus}</p>}
            {wood && <p>wand made of: {wood}</p>}
            {core && <p>core of wand: {core}</p>}
            {length && <p>length of wand: {length}"</p>}
        </div>
    )
}
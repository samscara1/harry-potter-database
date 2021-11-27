import React from 'react';
import cn from 'classnames'
import { Link } from 'react-router-dom';
import { nanoid } from "nanoid";

import defaultImage from '../../assets/no_avatar.png'

import './style.scss'

export const Image = ({
    isClickable, 
    charImg, 
    alt, 
    charLink
}) => {

    const imageClass = cn('image', {image_clickable: isClickable})

    if (isClickable) {
        return(
            <Link 
                to={charLink} 
                key={nanoid} 
                className='image__link'>
                <img 
                    src={charImg || defaultImage} 
                    alt={alt}
                    className={imageClass}>
                </img>
                <span className='image__name'>
                    {alt}
                </span>
            </Link>
        )
    }

    return (
        <img
            src={charImg}
            alt={alt}
            className={imageClass}>
        </img>
    )
}
import React from 'react'
import { useHistory } from 'react-router-dom'

import { Button } from '../Button/Button'

import './Error.css'

export const Error = () => {

    const history = useHistory()

    const handleClick = () => {
        history.push('/')
    }

    return(
        <section className='error-page'>
            <p className='error-msg'>No muggles allowed 404</p>
            <Button clickFunction={handleClick} text={'go back'} />
        </section>
    )
}
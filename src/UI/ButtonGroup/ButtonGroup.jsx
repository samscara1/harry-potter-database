import React from 'react';

import './style.scss'

export const ButtonGroup = ({ children }) => {
    return (
        <div className='button-group'>
            {children}
        </div>
    )
}
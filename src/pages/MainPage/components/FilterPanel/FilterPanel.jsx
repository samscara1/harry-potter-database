import React from "react"
import { useDispatch } from "react-redux"

import { ButtonGroup } from "../../../../UI/ButtonGroup/ButtonGroup"
import { Button } from "../../../../UI/Button/Button"

import { fetchCharacters } from "../../../../store/charactersSlice"

export const FilterPanel = () => {
    const dispatch = useDispatch()

    const handleClick = (tag) => {
        if (tag === 'All') {
            tag = ''
        }
        dispatch(fetchCharacters(tag))
    }

    return (
        <ButtonGroup>
            <Button handleClick={handleClick} text={'All'}/>
            <Button  handleClick={handleClick} text={'Students'} />
            <Button  handleClick={handleClick} text={'Staff'} />
        </ButtonGroup>
    )
}
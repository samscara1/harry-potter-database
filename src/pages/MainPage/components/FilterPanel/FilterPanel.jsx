import React from "react"
import { useDispatch } from "react-redux"

import { ButtonGroup } from "../../../../UI/ButtonGroup/ButtonGroup"
import { Button } from "../../../../UI/Button/Button"

import { fetchCharacters } from "../../../../store/charactersSlice"

export const FilterPanel = () => {
    const dispatch = useDispatch()

    const handleCLick = (tag) => {
        if (tag === 'All') {
            tag = ''
        }
        dispatch(fetchCharacters(tag))
    }

    return (
        <ButtonGroup>
            <Button handleCLick={handleCLick} text={'All'}/>
            <Button  handleCLick={handleCLick} text={'Students'} />
            <Button  handleCLick={handleCLick} text={'Staff'} />
        </ButtonGroup>
    )
}
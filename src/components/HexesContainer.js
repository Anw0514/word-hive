import React from 'react'
import styled from 'styled-components'
import Hex from './Hex'
import { useSelector } from 'react-redux'

const StyledHexesContainer = styled.div`
	margin: 0 -1px;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
`
export default function HexesContainer() {
    const grid = useSelector(state => state.word.letters)

    return (
        <StyledHexesContainer>
            {grid.map((letterObj) => (
                <Hex key={letterObj.position} letterObj={letterObj} />
            ))}
        </StyledHexesContainer>
    )
}

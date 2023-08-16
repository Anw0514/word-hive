import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { generateGridArray } from '../utils/gridHelpers'
import Hex from './Hex'

const StyledHexesContainer = styled.div`
	margin: 0 -1px;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;
`
export default function HexesContainer() {
    const [grid, setGrid] = useState(generateGridArray())

    return (
        <StyledHexesContainer>
            {grid.map((letterObj) => (
                <Hex key={letterObj.position} letterObj={letterObj} />
            ))}
        </StyledHexesContainer>
    )
}

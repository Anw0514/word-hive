import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { generateGridArray } from '../utils/gridHelpers'
import Hex from './Hex'

const StyledHexesContainer = styled.div`
    --r: 0.24935;
	--r-1: calc(1 / calc(1 - var(--r)));
	--g: 2px;
	--w: calc(var(--r-1) * var(--wrp) / 5 - 2 * var(--r-1) * var(--g));
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

import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { newRow } from '../redux/wordSlice'

const StyledButton = styled.button`
    background-color: ${props => props.theme.info};
    border: 1px solid ${props => props.theme.info};
    color: ${props => props.theme.dark};
    padding: .2em .5em;
    font-size: .8em;
    flex: 1;

    &:active {
        background: none;
    }
`

const StyledButtonContainer = styled.div`
    text-align: center;
    display: flex;
    justify-content: space-around;
    width: 60%;
    padding: 10px;
    gap: 20px;
    margin: 0 auto;
`

export default function GameButtons() {
    const dispatch = useDispatch()

    return (
        <StyledButtonContainer>
            <StyledButton onClick={() => dispatch(newRow())}>New Row (-100)</StyledButton>
            {/* <StyledButton onClick={() => dispatch(endGame())}>End Game</StyledButton> */}
        </StyledButtonContainer>
    )
}

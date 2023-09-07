import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { submitWord, wordTooShort  } from '../redux/wordSlice'

const StyledButton = styled.button`
    background-color: ${props => props.theme.success};
    color: ${props => props.theme.dark};

    &:active {
        background-color: ${props => props.theme.successAlt}
    }
`

const StyledButtonContainer = styled.div`
    text-align: center;
`

export default function SubmitButton() {
    const dispatch = useDispatch()
    const currentWord = useSelector(state => state.word.currentWord)

    const handleSubmit = () => {
        if (currentWord && currentWord.length > 2) {
            dispatch(submitWord(currentWord))
        } else {
            dispatch(wordTooShort())
        }
    }

    return (
        <StyledButtonContainer>
            <StyledButton onClick={handleSubmit}>Submit</StyledButton>
        </StyledButtonContainer>
    )
}

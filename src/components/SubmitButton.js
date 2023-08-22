import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { clearWord } from '../redux/wordSlice'

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

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

export default function SubmitButton() {
    const dispatch = useDispatch()
    const currentWord = useSelector(state => state.word.currentWord)

    const handleSubmit = () => {
        if (currentWord) {
            fetch(url + currentWord)
                .then(resp => resp.json())
                .then(res => {
                    if (res[0].word) {
                        dispatch(clearWord())
                    }
                })
                .catch(error => console.log(error))
        }
    }

    return (
        <StyledButtonContainer>
            <StyledButton onClick={handleSubmit}>Submit</StyledButton>
        </StyledButtonContainer>
    )
}

import React from 'react'
import styled from 'styled-components'

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
  return (
    <StyledButtonContainer>
        <StyledButton>Submit</StyledButton>
    </StyledButtonContainer>
  )
}

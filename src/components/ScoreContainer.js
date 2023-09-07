import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const StyledScoreContainer = styled.div`
    text-align: right;
    color: ${props => props.theme.primary};
    opacity: .7;
    width: ${props => props.$horizontal ? '80%' : '90%'};
    margin-bottom: 5px;
    font-size: 1.3em;
    line-height: .7em;

    div {
        font-size: .4em;
    }
`
export default function ScoreContainer() {
    const score = useSelector(state => state.word.score)
    const isHorizontal = useSelector(state => state.app.isHorizontal)
    return (
        <StyledScoreContainer $horizontal={isHorizontal}>
            {score}
            <div>Current Score</div>
        </StyledScoreContainer>
    )
}

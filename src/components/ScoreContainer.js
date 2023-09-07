import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const StyledScoreContainer = styled.div`
    text-align: right;
    color: ${props => props.theme.primary};
    opacity: .7;
    width: ${props => props.$horizontal ? '80%' : '90%'};
    margin-bottom: 10px;
`
export default function ScoreContainer() {
    const score = useSelector(state => state.app.score)
    const isHorizontal = useSelector(state => state.app.isHorizontal)
    return (
        <StyledScoreContainer $horizontal={isHorizontal}>Current Score: {score}</StyledScoreContainer>
    )
}

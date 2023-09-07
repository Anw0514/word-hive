import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { setHighScore } from '../redux/wordSlice'

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
    const dispatch = useDispatch()
    const score = useSelector(state => state.word.score)
    const highScore = useSelector(state => state.word.highScore)
    const isHorizontal = useSelector(state => state.app.isHorizontal)

    useEffect(() => {
        const localHighScore = localStorage.getItem("highScore")
        if (localHighScore) {
            dispatch(setHighScore(localHighScore))
        }
    }, [dispatch])

    useEffect(() => {
        if (score > highScore) {
            dispatch(setHighScore(score))
        }
    }, [dispatch, score, highScore])

    return (
        <StyledScoreContainer $horizontal={isHorizontal}>
            {score}
            <div>Current Score</div>
        </StyledScoreContainer>
    )
}

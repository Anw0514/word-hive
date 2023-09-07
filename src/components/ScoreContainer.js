import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { setHighScore } from '../redux/wordSlice'

const StyledScoresContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0px auto 5px;
`

const StyledScoreContainer = styled.div`
    text-align: ${props => props.$left ? 'left' : 'right'};
    color: ${props => props.theme.primaryAlt};
    opacity: ${props => props.$left ? '.7' : '1'};
    width: ${props => props.$horizontal ? '80%' : '90%'};
    font-size: ${props => props.$left ? '1.1em' : '2em'};
    line-height: .7em;

    div {
        font-size: .2em;
        margin-bottom: -3px;
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
        <StyledScoresContainer>
            <StyledScoreContainer $left $horizontal={isHorizontal}>
                {highScore}
                <div>High Score</div>
            </StyledScoreContainer>
            <StyledScoreContainer $horizontal={isHorizontal}>
                {score}
            </StyledScoreContainer>
        </StyledScoresContainer>
    )
}

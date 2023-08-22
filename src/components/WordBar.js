import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { clearWord } from '../redux/wordSlice'

const StyledWordBar = styled.div`
    border: 3px solid ${props => props.theme.secondary};
    border-radius: 4px;
    line-height:1.2em;
    min-height: 1.35em;
    margin: ${props => props.horizontal ? '0px' : '20px'} auto 20px;
    width: 80%;
    text-align: center;
    box-sizing: border-box;
    font-size: ${props => props.horizontal ? '5.5vw' : '11vw'};
    position: relative;
`

const StyledLine = styled.line`
    stroke: ${props => props.theme.primary};
    stroke-width: 2;
`
const StyledSvg = styled.svg`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    opacity: .7;

    &:hover {
        opacity: 1;
    }
`
export default function WordBar() {
    const dispatch = useDispatch()
    const isHorizontal = useSelector(state => state.app.isHorizontal)
    const currentWord = useSelector(state => state.word.currentWord)

    const handleClick = () => {
        dispatch(clearWord())
    }
    return (
        <StyledWordBar horizontal={isHorizontal}>
            {currentWord}
            <StyledSvg onClick={handleClick} height="10" width="10">
                <StyledLine x1="0" y1="0" x2="10" y2="10" />
                <StyledLine x1="0" y1="10" x2="10" y2="0" />
            </StyledSvg>
        </StyledWordBar>
    )
}

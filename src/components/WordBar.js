import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { clearWord } from '../redux/wordSlice'

const StyledWordBar = styled.div`
    border: 3px solid ${props => props.theme.secondary};
    border-radius: 4px;
    min-height: 1.35em;
    margin: ${props => props.$horizontal ? '0px' : '20px'} auto 20px;
    width: 80%;
    text-align: center;
    box-sizing: border-box;
    font-size: ${props => props.$horizontal ? '5.5vw' : '11vw'};
    position: relative;
`
const StyledWord = styled.div`
    overflow: hidden;
    line-height:1.2em;
    text-overflow: ellipsis;
`
const StyledLine = styled.line`
    stroke: ${props => props.theme.primaryAlt};
    stroke-width: 2;
`
const StyledSvg = styled.svg`
    cursor: pointer;
    opacity: .7;
`

const StyledClearButton = styled.button`
    position: absolute;
    top: 0px;
    right: 0px;
    background: none;
    border-radius: 50%;
    padding: 5px;
    font-size: 10px;

    &:hover {
        svg {
            opacity: 1;
        }
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
        <StyledWordBar $horizontal={isHorizontal}>
            <StyledWord>
                {currentWord}
            </StyledWord>
            <StyledClearButton onClick={handleClick} >
                <StyledSvg height="10" width="10">
                    <StyledLine x1="0" y1="0" x2="10" y2="10" />
                    <StyledLine x1="0" y1="10" x2="10" y2="0" />
                </StyledSvg>
            </StyledClearButton>
        </StyledWordBar>
    )
}

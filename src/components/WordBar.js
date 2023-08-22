import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const StyledWordBar = styled.div`
    border: 3px solid ${props => props.theme.secondary};
    border-radius: 4px;
    line-height:1.2em;
    margin: ${props => props.horizontal ? '0px' : '20px'} auto 20px;
    width: 80%;
    text-align: center;
    box-sizing: border-box;
    font-size: ${props => props.horizontal ? '5.5vw' : '11vw'};
`

export default function WordBar() {
    const isHorizontal = useSelector(state => state.app.isHorizontal)
    return (
        <StyledWordBar horizontal={isHorizontal}>Word</StyledWordBar>
    )
}

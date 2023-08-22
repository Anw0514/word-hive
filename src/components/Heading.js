import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const StyledHeading = styled.div`
    font-size: ${props => props.horizontal ? '8vw' : '14vw'};
    margin-bottom: ${props => props.horizontal ? '1em' : '10px'};
`

export default function Heading() {
    const isHorizontal = useSelector(state => state.app.isHorizontal)
  return (
    <StyledHeading horizontal={isHorizontal}>Word Hive</StyledHeading>
  )
}

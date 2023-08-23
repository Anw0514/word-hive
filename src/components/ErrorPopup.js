import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { clearError } from '../redux/appSlice'

const StyledError = styled.div`
    border: 1px solid ${props => props.theme.failure};
    border-radius: 5px;
    padding: .3em;
    color: ${props => props.theme.failure};
    font-size: .8em;
    margin-top: 1em;
    visibility: ${props => props.visible ? 'visible' : 'hidden'};
    opacity: ${props => props.visible ? '1' : '0'};
    transition: all 0.2s linear;
    padding: 5px 10px;
`

export default function ErrorPopup() {
    const dispatch = useDispatch()
    const errorMessage = useSelector(state => state.app.errorMessage)
    const errorVisible = useSelector(state => state.app.errorVisible)

    useEffect(() => {
        if (errorVisible) {
            setTimeout(() => dispatch(clearError()), 1500)
        }

    }, [errorVisible, dispatch])

    return (
        <StyledError visible={errorVisible}>{errorMessage}</StyledError>
    )
}

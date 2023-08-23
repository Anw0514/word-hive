import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { toggleLetter } from '../redux/wordSlice'

const StyledHex = styled.div`
    --r: 0.24935;
	--r-1: calc(1 / calc(1 - var(--r)));
	--g: 2px;
	--w: calc(var(--r-1) * 80% / 5 - 2 * var(--r-1) * var(--g));
    display: block;
	clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
	background: ${props => props.shown ? props.theme.primary : 'none'};
	width: var(--w);
	height: calc(0.8658 * var(--w));
	margin: var(--g) calc(var(--r) / -2 * var(--w) + var(--g));
	position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    text-align: center;
    cursor: pointer;

	&:hover {
		z-index: 9;
	}

	&:before {
		position: absolute;
		width: 88%;
		text-align: inherit;
		top: 47%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

    &:nth-child(5n + 2) {
		transform: translateY(calc(50% + var(--g)));
	}
    &:nth-child(5n + 4) {
		transform: translateY(calc(50% + var(--g)));
	}
`

const StyledInnerHex = styled.div`
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    font-size: ${props => props.horizontal ? '5.5vw' : '10vw'};
    line-height: 1.45em;
    background-color: ${props => props.clicked ? props.theme.dark : props.theme.primary};
    color: ${props => props.clicked ? props.theme.primary : props.theme.secondary};
    width: 100%;
    transition: all 0.1s linear;
`

export default function Hex({ letterObj }) {
    const dispatch = useDispatch()
    const isHorizontal = useSelector(state => state.app.isHorizontal)

    const handleClick = () => {
        dispatch(toggleLetter(letterObj))
    }

    return (
        <StyledHex 
            shown={!!letterObj.letter} 
            horizontal={isHorizontal}
            onClick={handleClick}
        >
            <StyledInnerHex horizontal={isHorizontal} clicked={letterObj.clicked}>
                {letterObj.letter}
            </StyledInnerHex>
        </StyledHex>
    )
}

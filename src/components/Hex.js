import React from 'react'
import styled from 'styled-components'

const StyledHex = styled.div`
    --r: 0.24935;
	--r-1: calc(1 / calc(1 - var(--r)));
	--g: 2px;
	--w: calc(var(--r-1) * var(--wrp) / 5 - 2 * var(--r-1) * var(--g));
    display: block;
	clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
	background: ${props => props.shown ? props.theme.primary : 'none'};
	color: ${props => props.shown? props.theme.secondary: 'none'};
	width: var(--w);
	height: calc(0.8658 * var(--w));
	margin: var(--g) calc(var(--r) / -2 * var(--w) + var(--g));
	position: relative;
    text-align: center;
    font-size: 11vw;
    line-height: 1.45em;

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

export default function Hex({ letterObj }) {

    return (
        <StyledHex shown={!!letterObj.letter}>{letterObj.letter}</StyledHex>
    )
}

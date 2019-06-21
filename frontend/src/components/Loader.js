import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import { keyframes } from 'emotion';

const fadeAndGrow = keyframes`
	0% {
		opacity: 0;
		transform: scale(0.1);
	}
	70% {
		opacity: 0.8;
		transform: scale(1.1);
	}
	100% {
		opacity: 1;
		transform: scale(1);
	}
`;

const fadeIn = keyframes`
	from 0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

function Loader(props) {
	const Container = styled('div')`
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
		background: rgba(255, 255, 255, 0.7);
	`;

	const Ball = styled('div')`
		background-color: ${props.theme.colors.mediumPink};
		width: 20px;
		height: 20px;
		border-radius: 5px;
		margin: 0px 5px;
		opacity: 0;
		transform: scale(0);
		animation: ${fadeAndGrow} 1.5s ease-in-out infinite;
		&:nth-child(1) {
			animation-delay: 0.1s;
		}
		&:nth-child(2) {
			animation-delay: 0.3s;
		}
		&:nth-child(3) {
			animation-delay: 0.6s;
		}
	`;

	return (
		<Container>
			<Ball />
			<Ball />
			<Ball />
		</Container>
	);
}

export default withTheme(Loader);

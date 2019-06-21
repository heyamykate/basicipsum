import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

function Header(props) {
	const Hero = styled('div')`
		width: 100%;
		height: 300px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: ${props.theme.colors.lightestPink};
		& h1 {
			font-family: ${props.theme.fonts.cursive};
			font-size: 50px;
		}
		& p {
			font-family: ${props.theme.fonts.sansSerif};
		}
	`;

	return (
		<Hero>
			<h1>Hey Betch.</h1>
			<p>Placeholder text just as basic as you.</p>
		</Hero>
	);
}

export default withTheme(Header);

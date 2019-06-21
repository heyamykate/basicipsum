import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

function Footer(props) {
	const Footer = styled('div')`
		flex-shrink: 0;
		padding: 12px 0px;
		background-color: ${props.theme.colors.lightestPink};
		text-align: center;
		font-family: ${props.theme.fonts.sansSerif};
		& a {
			color: black;
			text-decoration: none;
			font-family: ${props.theme.fonts.cursive};
			font-size: 24px;
			padding: 5px;
			&:hover {
				text-decoration: underline;
			}
		}
	`;
	return (
		<Footer>
			Made with <span alt="heart">&hearts;</span> by <a href="http://amykateandrews.com">amy-kate</a>
		</Footer>
	);
}

export default withTheme(Footer);

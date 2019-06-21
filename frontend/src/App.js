import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import Form from './components/Form';
import Header from './components/Header';
import Footer from './components/Footer';

const theme = {
	colors: {
		darkPink: '#b86b77',
		mediumPink: '#eabfb9',
		lightPink: '#f6cfca',
		lightestPink: '#ffe8e5'
	},
	fonts: {
		sansSerif: "'Open Sans Condensed', sans- serif",
		cursive: "'Sacramento', cursive"
	}
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="content">
				<Header />
				<Form />
			</div>
			<Footer />
		</ThemeProvider>
	);
}

export default App;

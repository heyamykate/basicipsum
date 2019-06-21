import React, { useState } from 'react';
import Loader from './Loader';
import Ipsum from './Ipsum';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
/** @jsx jsx */
import { jsx } from '@emotion/core';

const Container = styled('div')`
	width: 100%;
	flex: 1 1 auto;
	text-align: center;
	overflow-y: scroll;
`;
const Text = styled('div')`
	width: 90%;
	max-width: 600px;
	margin: 20px auto;
`;
const InputWrapper = styled('div')`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const FormWrapper = styled('div')`
	width: 90%;
	max-width: 400px;
	margin: 20px auto;
	label {
		margin: 10px 0px;
	}
	input[type='number'] {
		border-radius: 20px;
		padding: 15px 20px;
		text-align: center;
	}
	input[type='submit'] {
		background: transparent;
		padding: 12px 38px;
		display: inline-block;
		border-radius: 10px;
		text-align: center;
		text-transform: uppercase;
		letter-spacing: 1px;
		cursor: pointer;
		margin-top: 30px;
		transition: all 0.2s ease;
	}
	input[type='submit']:hover,
	input[type='submit']:focus {
		border-radius: 2px;
		background: #f6cfca;
		transform: translateY(-1px);
		box-shadow: rgba(0, 0, 0, 0.2) -1px 6px 8px;
	}
`;

function Form(props) {
	const [paragraphCount, setParagraphCount] = useState(1);
	const [ipsum, setIpsum] = useState('');
	const [loading, setLoading] = useState(false);

	const handleChange = event => {
		event.preventDefault();
		setParagraphCount(event.target.value);
	};

	const handleSubmit = async event => {
		console.log('handleSubmit');
		event.preventDefault();
		setLoading(true);
		await fetch(`/api/ipsum?count=${paragraphCount}`)
			.then(res => res.json())
			.then(response => {
				setTimeout(() => {
					setLoading(false);
					setIpsum(response);
				}, 1500);
			})
			.catch(error => console.error('Error: ', error));
	};

	return (
		<Container
			css={theme => ({
				backgroundColor: theme.colors.lightPink,
				fontFamily: theme.fonts.sansSerif
			})}>
			<Text
				css={theme => ({
					fontFamily: theme.fonts.sansSerif
				})}>
				<p>Let's face it - waiting for copy can get pretty tedious, and normal lorem ipsum is boring AF.</p>
				<p>Instead of using some boring Latin, take a sip of that pumpkin spice latte and use basic ipsum instead.</p>
			</Text>
			<FormWrapper>
				<form onSubmit={handleSubmit}>
					<InputWrapper>
						<label>How many paragraphs?</label>
						<input
							css={theme => ({
								border: `1px solid ${theme.colors.darkPink}`
							})}
							type="number"
							min="1"
							value={paragraphCount}
							onChange={handleChange}
						/>
						<input
							type="submit"
							value="hit me"
							aria-label="Submit"
							css={theme => ({
								border: `2px solid ${theme.colors.darkPink}`
							})}
						/>
					</InputWrapper>
				</form>
			</FormWrapper>
			<div>{loading ? <Loader loading={loading} /> : <Ipsum ipsum={ipsum} />}</div>
		</Container>
	);
}

export default withTheme(Form);

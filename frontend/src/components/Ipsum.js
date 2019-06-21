import React from 'react';

function Ipsum(props) {
	const createMarkup = input => {
		return { __html: input };
	};
	return <div dangerouslySetInnerHTML={createMarkup(props.ipsum)} />;
}

export default Ipsum;

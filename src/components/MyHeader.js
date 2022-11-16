import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
	display: flex;
	align-items: center;

	div {
		display: flex;
	}

	.head_left {
		width: 25%;
		justify-content: start;
	}

	.text {
		width: 50%;
		justify-content: center;
	}

	.head_right {
		width: 25%;
		justify-content: end;
	}
`;

const MyHeader = ({ headText, leftChild, rightChild }) => {
	return (
		<Header>
			<div className='head_left'>{leftChild}</div>
			<div className='text'>{headText}</div>
			<div className='head_right'>{rightChild}</div>
		</Header>
	);
};

export default MyHeader;

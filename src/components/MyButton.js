import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	cursor: pointer;
	border: none;
	border-radius: 5px;
	padding: 10px 20px;

	font-size: 18px;
	white-space: nowrap;

	.btn_default {
		background-color: #ececec;
		color: black;
	}

	.btn_positive {
		background-color: #64c964;
		color: white;
	}

	.btn_negative {
		background-color: #fd565f;
		color: white;
	}
`;

const MyButton = ({ text, type, onClick }) => {
	const btnType = ['positive', 'negative'].includes(type) ? type : 'default';

	return (
		<Button className={`btn_${btnType}`} onClick={onClick}>
			{text}
		</Button>
	);
};

MyButton.defaultProps = {
	type: 'default',
};

export default MyButton;

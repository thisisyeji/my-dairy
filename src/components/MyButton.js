import React from 'react';

const MyButton = ({ text, type, onClick }) => {
	const btnType = ['positive', 'negative'].includes(type) ? type : 'default';

	return (
		<button className={`btn_${btnType}`} onClick={onClick}>
			{text}
		</button>
	);
};

MyButton.defaultProps = {
	type: 'default',
};

export default MyButton;

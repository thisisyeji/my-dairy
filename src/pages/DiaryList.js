import React, { useState } from 'react';
import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';

const DiaryList = () => {
	const [curDate, setCurDate] = useState(new Date());
	const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;
	return (
		<div>
			<MyHeader
				leftChild={<MyButton text={'<'} />}
				headText={headText}
				rightChild={<MyButton text={'>'} />}
			/>
		</div>
	);
};

export default DiaryList;

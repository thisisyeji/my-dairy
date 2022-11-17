import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from './MyButton';
import MyHeader from './MyHeader';
import styled from 'styled-components';
import { BiImageAdd } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Content = styled.div`
	section {
		margin-bottom: 30px;

		display: flex;
		flex-wrap: wrap;

		h3 {
			width: 100%;
			font-size: 24px;
			margin-bottom: 20px;
		}

		input,
		textarea {
			width: 100%;
			font-size: 18px;
			border: none;
			border-radius: 5px;
			background: #efefef;
			padding: 20px;
			margin-bottom: 20px;
			resize: none;
		}

		#content {
			min-height: 200px;
		}

		label {
			width: 100%;
			font-size: 28px;
			padding: 5px;
			margin-right: 40px;
			text-align: right;
		}

		#file {
			width: 1px;
			height: 1px;
			background: transparent;
			color: transparent;

			position: absolute;
			top: -9999px;
			left: -9999px;
		}
	}

	.btns {
		display: flex;
		justify-content: space-between;
	}
`;

const Attach = styled.div`
	width: 100%;
	margin-bottom: 20px;

	display: flex;
	justify-content: center;
	align-items: start;

	position: relative;

	img {
		width: 90%;
	}

	button {
		border: none;
		background: none;
		position: absolute;
		bottom: -62px;
		right: 0;
		font-size: 28px;
	}
`;

const getDate = (date) => {
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();

	if (month < 10) {
		month = `0${month}`;
	}
	if (day < 10) {
		day = `0${day}`;
	}
	return `${year}-${month}-${day}`;
};

const DiaryEditor = () => {
	const navigate = useNavigate();
	const [date, setDate] = useState(getDate(new Date()));
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [file, setFile] = useState('');
	const fileRef = useRef();

	const onChange = (e) => {
		const {
			target: { value },
		} = e;
		setDate(value);
		setTitle(value);
		setContent(value);
	};

	const onFileChange = (e) => {
		const {
			target: { files },
		} = e;
		const theFile = files[0];
		const reader = new FileReader();
		reader.onloadend = (finishedEvent) => {
			const {
				currentTarget: { result },
			} = finishedEvent;
			setFile(result);
		};
		reader.readAsDataURL(theFile);
	};

	const onFileClear = (e) => {
		fileRef.current.value = '';
		setFile('');
	};

	return (
		<div>
			<MyHeader
				leftChild={<MyButton text={'< 뒤로'} onClick={() => navigate(-1)} />}
				headText={'새 일기 쓰기'}
			/>

			<Content>
				<section className='date'>
					<h3>오늘의 날짜</h3>
					<input type='date' name='date' value={date} onChange={onChange} />
				</section>

				<section className='content'>
					<h3>오늘의 일기</h3>
					<input
						type='text'
						name='title'
						id='title'
						value={title}
						onChange={onChange}
						placeholder='제목을 입력하세요.'
						required
					/>

					{file && (
						<Attach>
							<img src={file} alt='attachment' />
							<button onClick={onFileClear}>
								<RiDeleteBin6Line />
							</button>
						</Attach>
					)}

					<label htmlFor='file'>
						<BiImageAdd />
					</label>
					<input
						type='file'
						name='file'
						id='file'
						accept='image/*'
						onChange={onFileChange}
						ref={fileRef}
					/>
					<textarea
						name='content'
						id='content'
						value={content}
						onChange={onChange}
						placeholder='내용을 입력하세요.'
						required
					/>
				</section>

				<div className='btns'>
					<MyButton text={'취소'} onClick={() => navigate(-1)} />
					<MyButton text={'작성'} />
				</div>
			</Content>
		</div>
	);
};

export default DiaryEditor;

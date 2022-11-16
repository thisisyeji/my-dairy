import React, { useState } from 'react';
import { authService } from '../fbase';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';

const AuthForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');
	const [newAccount, setNewAccount] = useState(false);
	const [error, setError] = useState('');

	const authError = {
		'auth/weak-password': '비밀번호를 6글자 이상 입력하세요.',
		'auth/email-already-in-use': '이미 가입된 이메일입니다.',
		'auth/invalid-email': '유효하지 않은 이메일입니다.',
		'auth/wrong-password': '잘못된 비밀번호 입니다.',
		'auth/user-not-found': '해당 계정을 찾을 수 없습니다.',
	};

	const onChange = (e) => {
		const {
			target: { name, value },
		} = e;
		if (name === 'email') {
			setEmail(value.trim());
		} else if (name === 'password') {
			setPassword(value.trim());
		} else if (name === 'password2') {
			setPassword2(value.trim());
		}
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			let data;
			if (newAccount) {
				if (password !== password2) {
					setError('비밀번호를 동일하게 입력하세요.');
				} else {
					data = await createUserWithEmailAndPassword(
						authService,
						email,
						password
					);
				}
			} else {
				data = await signInWithEmailAndPassword(authService, email, password);
			}
		} catch (e) {
			const error = e.code;
			if (error) {
				const errorValue = authError[error];
				setError(errorValue);
			}
		}
	};

	const onToggle = () => {
		setNewAccount((prev) => !prev);
		setEmail('');
		setPassword('');
		setPassword2('');
		setError('');
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<input
					type='email'
					name='email'
					value={email}
					onChange={onChange}
					placeholder='이메일을 입력하세요'
					required
				/>
				<input
					type='password'
					name='password'
					value={password}
					onChange={onChange}
					placeholder='비밀번호를 입력하세요'
					required
				/>

				{newAccount && (
					<input
						type='password'
						name='password2'
						value={password2}
						onChange={onChange}
						placeholder='비밀번호를 재입력하세요'
						required
					/>
				)}
				<input type='submit' value={newAccount ? '가입하기' : '로그인'} />
			</form>
			<p>{error}</p>

			<div className='toggle'>
				<span>{newAccount ? '이미 가입하셨나요?' : '계정이 없으신가요?'}</span>
				<span onClick={onToggle}>{newAccount ? '로그인하기' : '가입하기'}</span>
			</div>
		</>
	);
};

export default AuthForm;

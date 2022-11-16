import React from 'react';
import AuthForm from '../components/AuthForm';
import MyButton from '../components/MyButton';
import { authService } from '../fbase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const Auth = () => {
	const onGoogle = () => {
		const provider = new GoogleAuthProvider();
		const data = signInWithPopup(authService, provider);
	};
	return (
		<>
			<AuthForm />
			<MyButton text={'Google로 계속하기'} onClick={onGoogle} />
		</>
	);
};

export default Auth;

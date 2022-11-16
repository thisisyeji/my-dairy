import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import MyButton from '../components/MyButton';

const Auth = () => {
	return (
		<>
			<AuthForm />
			<MyButton text={'Google로 계속하기'} />
		</>
	);
};

export default Auth;

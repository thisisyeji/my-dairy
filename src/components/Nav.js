import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { authService } from '../fbase';
import { signOut } from 'firebase/auth';
import MyButton from './MyButton';

const activeStyle = {
	color: 'red',
};
const deactiveStyle = {
	color: 'black',
};

const Nav = () => {
	const navigate = useNavigate();

	const onLogOut = () => {
		signOut(authService);
		navigate('/');
	};

	return (
		<nav>
			<ul>
				<li>
					<NavLink
						to='/'
						style={({ isActive }) => {
							return isActive ? activeStyle : deactiveStyle;
						}}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/diarylist'
						style={({ isActive }) => {
							return isActive ? activeStyle : deactiveStyle;
						}}>
						Diary
					</NavLink>
				</li>
			</ul>

			<MyButton text={'로그아웃'} onClick={onLogOut} />
		</nav>
	);
};

export default Nav;

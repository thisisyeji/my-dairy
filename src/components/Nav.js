import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { authService } from '../fbase';
import { signOut } from 'firebase/auth';
import MyButton from './MyButton';
import styled from 'styled-components';
import { AiFillHome } from 'react-icons/ai';
import { GoBook } from 'react-icons/go';

const activeStyle = {
	color: 'white',
	border: '1px solid white',
	background: 'lightblue',
};
const deactiveStyle = {
	color: 'black',
};

const NavWrapper = styled.nav`
	width: 100%;
	position: fixed;
	top: 0;

	display: flex;
	justify-content: space-between;
	align-items: center;

	.content {
		width: 650px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px;

		ul {
			display: flex;
			gap: 20px;
			li {
				a {
					display: flex;
					justify-content: center;
					align-items: center;

					border: 1px solid transparent;
					border-radius: 50%;
					padding: 10px;

					svg {
						font-size: 26px;
					}
				}
			}
		}
	}
`;

const Nav = () => {
	const navigate = useNavigate();

	const onLogOut = () => {
		signOut(authService);
		navigate('/');
	};

	return (
		<NavWrapper>
			<div className='content'>
				<ul>
					<li>
						<NavLink
							to='/'
							style={({ isActive }) => {
								return isActive ? activeStyle : deactiveStyle;
							}}>
							<AiFillHome />
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/diarylist'
							style={({ isActive }) => {
								return isActive ? activeStyle : deactiveStyle;
							}}>
							<GoBook />
						</NavLink>
					</li>
				</ul>

				<MyButton text={'로그아웃'} onClick={onLogOut} />
			</div>
		</NavWrapper>
	);
};

export default Nav;

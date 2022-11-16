import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = {
	color: 'red',
};
const deactiveStyle = {
	color: 'black',
};

const Nav = () => {
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
		</nav>
	);
};

export default Nav;

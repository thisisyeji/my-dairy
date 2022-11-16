import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Edit from './pages/Edit';
import Auth from './pages/Auth';
import Diary from './pages/Diary';
import Home from './pages/Home';
import New from './pages/New';
import DiaryList from './pages/DiaryList';
import Nav from './components/Nav';

import { authService } from './fbase';
import { onAuthStateChanged } from 'firebase/auth';

const GlobalStyle = createGlobalStyle`
	html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
* {
box-sizing: border-box;
font-family: 'Josefin Sans', sans-serif;
}

body {
  line-height: 1;
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content:center;
  align-items:center;
}
menu, ol, ul, li {
  list-style: none;
	text-decoration: none;

}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`;

const Wrapper = styled.div`
	width: 650px;
	height: 70vh;
	border: 1px solid #000;
`;

function App() {
	const [isLoggedin, setIsLoggedin] = useState(false);
	const [init, setInit] = useState(false);

	useEffect(() => {
		onAuthStateChanged(authService, (user) => {
			if (user) {
				setIsLoggedin(true);
			} else {
				setIsLoggedin(false);
			}
			setInit(true);
		});
	}, []);

	return (
		<BrowserRouter>
			<GlobalStyle />
			<div className='App'>
				{isLoggedin ? (
					<>
						<Nav />
						<Wrapper>
							<Routes>
								<Route path='/home' element={<Home />} />
								<Route path='/diarylist' element={<DiaryList />} />
								<Route path='/new' element={<New />} />
								<Route path='/edit/:id' element={<Edit />} />
								<Route path='/diary/:id' element={<Diary />} />
							</Routes>
						</Wrapper>
					</>
				) : (
					<Routes>
						<Route path='/' element={<Auth />} />
					</Routes>
				)}
			</div>
		</BrowserRouter>
	);
}

export default App;

import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Edit from './pages/Edit';
import Auth from './pages/Auth';
import Diary from './pages/Diary';
import Home from './pages/Home';
import New from './pages/New';
import DiaryList from './pages/DiaryList';
import Nav from './components/Nav';

import { authService } from './fbase';
import { onAuthStateChanged } from 'firebase/auth';

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
			<div className='App'>
				{isLoggedin ? (
					<>
						<Nav />
						<Routes>
							<Route path='/home' element={<Home />} />
							<Route path='/diarylist' element={<DiaryList />} />
							<Route path='/new' element={<New />} />
							<Route path='/edit/:id' element={<Edit />} />
							<Route path='/diary/:id' element={<Diary />} />
						</Routes>
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

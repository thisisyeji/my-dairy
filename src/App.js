import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Edit from './pages/Edit';
import Auth from './pages/Auth';
import Diary from './pages/Diary';
import Home from './pages/Home';
import New from './pages/New';
import Nav from './components/Nav';
import DiaryList from './pages/DiaryList';

function App() {
	const [isLoggedin, setIsLoggedin] = useState(false);
	return (
		<BrowserRouter>
			<div className='App'>
				<Routes>
					{isLoggedin ? (
						<>
							<Nav />
							<Route path='/' element={<Home />} />
							<Route path='/diarylist' element={<DiaryList />} />
							<Route path='/new' element={<New />} />
							<Route path='/edit/:id' element={<Edit />} />
							<Route path='/diary/:id' element={<Diary />} />
						</>
					) : (
						<Route path='/' element={<Auth />} />
					)}
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;

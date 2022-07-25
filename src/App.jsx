import { Routes, Route } from 'react-router-dom';

import { useContext } from 'react';
import { UserContext } from './context/UserProvider';

import Home from './routes/Home';
import Waitress from './routes/Waitress';
import WaitressNight from './routes/WaitressNight';
import Chef from './routes/Chef';
import Panic from './routes/panic';
import Tables from './routes/tables';
import Logout from './routes/logout';

import Navbar from './components/Navbar';
import ProtectedRoutes from './components/RequireAuth';
// import Menu from './components/waitress/Menu';

const App = () => {
	const { user } = useContext(UserContext);
	if (user === false) {
		return <p>Loading...</p>;
	}
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route
					path='/chef'
					element={
						<ProtectedRoutes>
							<Navbar />
							<Chef />
						</ProtectedRoutes>
					}
				/>
				<Route
					path='/waitress'
					element={
						<ProtectedRoutes>
							<Navbar />
							<Waitress />
						</ProtectedRoutes>
					}
				/>
				<Route
					path='/waitress-night'
					element={
						<ProtectedRoutes>
							<Navbar />
							<WaitressNight />
						</ProtectedRoutes>
					}
				/>
				<Route
					path='/panic'
					element={
						<ProtectedRoutes>
							<Panic />
						</ProtectedRoutes>
					}
				/>
				<Route
					path='/tables'
					element={
						<ProtectedRoutes>
							<Navbar />
							<Tables />
						</ProtectedRoutes>
					}
				/>
				<Route
					path='/logout'
					element={
						<ProtectedRoutes>
							<Logout />
						</ProtectedRoutes>
					}
				/>
			</Routes>
		</>
	);
};

export default App;

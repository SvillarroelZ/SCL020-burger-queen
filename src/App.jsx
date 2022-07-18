import {Routes, Route} from 'react-router-dom'

import { useContext } from 'react';
import { UserContext } from './context/UserProvider';

import Home from './routes/Home'
import Waitress from './routes/Waitress';
import WaitressNight from './routes/WaitressNight';
import Chef from './routes/Chef';
import Panic from './routes/panic';
import Tables from './routes/tables';
import Logout from './routes/logout';

import Navbar from './components/Navbar';
import RequireAuth from './components/RequireAuth';

const App = () => {
  const {user} = useContext(UserContext);
  if(user === false){
    return <p>Loading...</p>
  }
  return (
    <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/chef' element={
            <RequireAuth>
              <Chef />
            </RequireAuth>
          }/>
          <Route path='/waitress' element={
            <RequireAuth>
              <Waitress />
            </RequireAuth>
          }/>
          <Route path='/waitress-night' element={
            <RequireAuth>
              <WaitressNight />
            </RequireAuth>
          }/>
          <Route path='/panic' element={
            <RequireAuth>
              <Panic />
            </RequireAuth>
          }/>
          <Route path='/tables' element={
            <RequireAuth>
              <Tables />
            </RequireAuth>  
          }/>
          <Route path='/logout' element={
          <RequireAuth>
            <Logout />
          </RequireAuth>
          }/>
        </Routes>
    </>
  );
};

export default App;

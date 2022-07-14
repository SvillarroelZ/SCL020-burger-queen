import {Routes, Route} from 'react-router-dom'

import Home from './routes/Home'
import Waitress from './routes/waitress';
import WaitressNight from './routes/WaitressNight';
import Chef from './routes/Chef';
import Panic from './routes/panic';
import Tables from './routes/tables';
import Logout from './routes/logout';

import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
        <Navbar />
        <h1>APP</h1>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/chef' element={<Chef />}></Route>
          <Route path='/waitress' element={<Waitress />}></Route>
          <Route path='/waitress-night' element={<WaitressNight />}></Route>
          <Route path='/panic' element={<Panic />}></Route>
          <Route path='/tables' element={<Tables />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
        </Routes>
    </>
  );
};

export default App;

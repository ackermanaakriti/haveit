import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Homepage from './Pages/Homepage';
import Aboutus from './Pages/Aboutus';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/aboutus' element={<Aboutus/>}/>
   </Routes>
   </>
  );
}

export default App;

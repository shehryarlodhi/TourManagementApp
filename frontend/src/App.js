
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/TourManagement/Home'
import Signup from './components/Signup';

function App() {
  return (
  <>
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}  />
          <Route path="/signup" element={<Signup/>}  />
          <Route path="/customer" element={<Signup/>}  />
        </Routes>
      </BrowserRouter>


      </div>

  </>
  );
}

export default App;

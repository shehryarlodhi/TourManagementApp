
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/TourManagement/Home'
import Signup from './components/Signup';
import AddBooking from './components/Bookings/booking';
import ViewBooking from './components/Bookings/Viewbookings';
import CancelBooking from './components/Bookings/CancelBooking';

function App() {
  return (
  <>
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}  />
          <Route path="/signup" element={<Signup/>}  />
          <Route path="/homepage" element={<Home/>}  />
          <Route path="/customer" element={<Signup/>}  />
          <Route path="/booking/:id" element={<AddBooking/>}  />
          <Route path="/viewbookings" element={<ViewBooking/>}  />
          <Route path="/bookings" element={<CancelBooking/>}  />
        </Routes>
      </BrowserRouter>


      </div>

  </>
  );
}

export default App;

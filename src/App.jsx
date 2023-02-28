import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Page/Landing Page/LandingPage';
import Login from './Page/Auth/Login';
import Register from './Page/Auth/Register';
import Otp from './Page/Auth/Otp';
import OtpForgotPassword from './Page/Auth/OtpForgotPassword';
import ResetPassword from './Page/Auth/ResetPassword';
import ForgotPassword from './Page/Auth/ForgotEmail';
import Paket from './Page/Menu/Paket';
import DetailPacket from './Page/Detail Paket/DetailPacket';
import About from './Page/About';

function App() {
  return (
    <div className="App" id='font-custom'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/otp/:email' element={<Otp />} />
          <Route path='/otp-forgot-password' element={<OtpForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/list-product' element={<Paket />} />
          <Route path='/detail-paket' element={<DetailPacket />} />
          <Route path='/about-us' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

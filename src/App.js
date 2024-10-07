import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './Component/common/Loading';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Walkthrough = lazy(() => import('./Component/pages/Connecter/Walkthrough'));
const Login = lazy(() => import('./Component/pages/Connecter/Login'));
const ProfileType = lazy(() => import('./Component/pages/inscription/ProfileType'));
const InfoCompte = lazy(() => import('./Component/pages/inscription/InfoCompte'));
const CodeOtp = lazy(() => import('./Component/pages/inscription/CodeOtp'));
const VerifIdentite = lazy(() => import('./Component/pages/inscription/VerifIdentite'));
const InfoSupplementaires = lazy(() => import('./Component/pages/inscription/InfoSupplementaires'));
const Services = lazy(() => import('./Component/pages/inscription/Services'));
const ForgetPass = lazy(() => import('./Component/pages/forgetPassword/ForgetPass'));
const ConfirmOTP = lazy(() => import('./Component/pages/forgetPassword/ConfirmOTP'));
const NewPass = lazy(() => import('./Component/pages/forgetPassword/NewPass'));
const Patienter = lazy(() => import('./Component/pages/inscription/Patienter'));
const Camera = lazy(() => import('./Component/pages/inscription/Camera'));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Walkthrough />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile-type" element={<ProfileType />} />
            <Route path="/info-compte" element={<InfoCompte/>} />
            <Route path="/OTP-code" element={<CodeOtp/>} />
            <Route path="/verif-identite" element={<VerifIdentite/>} />
            <Route path="/info-supplementaires" element={<InfoSupplementaires/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/forgot-pass" element={<ForgetPass/>} />
            <Route path="/confirm-OTP" element={<ConfirmOTP/>} />
            <Route path="/new-pass" element={<NewPass/>} />
            <Route path="/patienter" element={<Patienter/>} />
            <Route path="/camera" element={<Camera/>} />

          </Routes>
        </Suspense>
      </Router>
      <ToastContainer
        icon={false}
        // position={toast.POSITION.BOTTOM_LEFT}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;

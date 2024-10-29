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
const PhotoKpis = lazy(() => import('./Component/pages/inscription/PhotoKpis'));
const PanneList = lazy(() => import('./Component/pages/panne/PanneList'));
const DeclarePanne = lazy(() => import('./Component/pages/panne/DeclarePanne'));
const Confirmation = lazy(() => import('./Component/pages/panne/Confirmation'));
const Paiement = lazy(() => import('./Component/pages/paiement'));
const DepanneursDispo = lazy(() => import('./Component/pages/choisirDepanneur/DepanneursDispo'));
const DepanneursAcceptée = lazy(() => import('./Component/pages/choisirDepanneur/DepanneursAcceptée'));
const DetailDepanneur = lazy(() => import('./Component/pages/choisirDepanneur/DetailDepanneur'));
const MenuAuto = lazy(() => import('./Component/pages/automobilisteProfile/ProfileAuto'));
const EditProfile = lazy(() => import('./Component/pages/automobilisteProfile/EditProfile'));
const Pannes = lazy(() => import('./Component/pages/automobilisteProfile/Pannes'));
const Demandes = lazy(() => import('./Component/pages/automobilisteProfile/Demandes'));
const Intervention = lazy(() => import('./Component/pages/automobilisteProfile/Intervention'));
const AssistanceCenter = lazy(() => import('./Component/pages/automobilisteProfile/AssistanceCenter'));
const ServiceClient = lazy(() => import('./Component/pages/automobilisteProfile/ServiceClient'));
const AddRIB = lazy(() => import('./Component/pages/paiement/AddRIB'));
const ProfileDepanneur = lazy(() => import('./Component/pages/depanneurProfile/ProfileDepanneur'));
const InscriptionParticulier = lazy(() => import('./Component/pages/depanneurProfile/InscriptionParticulier'));
const Home = lazy(() => import('./Component/pages/localisation/Home'));

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
            <Route path="/photo-kpis" element={<PhotoKpis/>} />
            <Route path="/panne-list" element={<PanneList/>} />
            <Route path="/declarer" element={<DeclarePanne/>} />
            <Route path="/confirmation" element={<Confirmation/>} />
            <Route path="/paiement" element={<Paiement/>} />
            <Route path="/depanneur-dispo" element={<DepanneursDispo/>} />
            <Route path="/depanneur-accepter" element={<DepanneursAcceptée/>} />
            <Route path="/detail-depanneur" element={<DetailDepanneur/>} />
            <Route path="/profil-auto" element={<MenuAuto/>} />
            <Route path="/edit-profil" element={<EditProfile/>} />
            <Route path="/panne" element={<Pannes/>} />
            <Route path="/demandes" element={<Demandes/>} />
            <Route path="/intervention" element={<Intervention/>} />
            <Route path="/centre-assistance" element={<AssistanceCenter/>} />
            <Route path="/service-client" element={<ServiceClient/>} />
            <Route path="/inscrit-particulier" element={<InscriptionParticulier/>} />
            <Route path="/add-rib" element={<AddRIB/>} />
            <Route path="/profile-depanneur" element={<ProfileDepanneur/>} />
            <Route path="/home" element={<Home/>} />

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

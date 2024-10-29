import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import acceuilIcon from '../../assets/HomeICON.svg'
import profileIcon from '../../assets/ProfileICON.svg'
import profileBIcon from '../../assets/ProfileB-ICON.svg'
import acceuilBIcon from '../../assets/HomeBICON.svg'
import profilebgWIcon from '../../assets/ProfileWhite.svg'
import acceuilwIcon from '../../assets/HomeWhite.svg'
import profileWIcon from '../../assets/Profileactive.svg'
import acceuilbgwIcon from '../../assets/Homeactive.svg'
import logo from '../../assets/Logo.svg'

function MobileMenu({ bgcolor, circle, autoProfile, bottomStyle }) {
    const lastSegment = window.location.pathname.split('/').filter(Boolean).pop();
    console.log("lastSegment", lastSegment)
    const [active, setActive] = useState("home");
    const getIconAcceuil = () => {
        if (autoProfile) {
            return active === "home" ? acceuilBIcon : acceuilIcon;
        } else {
            return active === "home" ? acceuilbgwIcon : acceuilwIcon;
        }
    };

    const getIconProfile = () => {

        if (autoProfile) {
            return active === "profile" ? profileBIcon : profileIcon;
        } else {
            return active === "profile" ? profilebgWIcon : profileWIcon;
        }
    };
    useEffect(() => {
        // Check lastSegment and set active based on it
        if (lastSegment === "profil-auto" || lastSegment === "profile-depanneur") {
          setActive("profile");
        } else {
          setActive("home");
        }
      }, [lastSegment]);
    
      console.log("Active tab:", active);
    return (
        <div className={`navbar ${bottomStyle}`}>
            <div className='nav-container'>
                <Link to={'/home'}
                    className={`nav-item ${active === "home" ? "active" : ""} flex-Column align-items-center gap-6`}
                    onClick={() => setActive("home")}
                >
                    <img src={getIconAcceuil()} alt='' />
                    <span className={`paraSmallSemi
                         ${autoProfile
                            ? (active === "home" ? "primary-blue-color" : "grey-color-500")
                            : "white-color"}`}>Accueil</span>
                </Link>

                <Link to={'/panne-list'}
                    className={`nav-item ${active === "history" ? "active" : ""} flex-Column align-items-center gap-6`}
                    onClick={() => setActive("history")}
                >
                    <img src={logo} alt='' style={{ marginBottom: '35px' }} />
                </Link>

                <Link to={`${autoProfile ? '/profil-auto' : '/profile-depanneur'}`}
                    className={`nav-item ${active === "profile" ? "active" : ""} flex-Column align-items-center gap-6`}
                    onClick={() => setActive("profile")}
                >
                    <img src={getIconProfile()} alt='' />
                    <span className={`paraSmallSemi 
                         ${autoProfile
                            ? (active === "profile" ? "primary-blue-color" : "grey-color-500")
                            : "white-color"}`}>Profile</span>
                </Link>
            </div>
            <div className={`effect ${bgcolor}`}>
                <div className={`circle ${circle}`}></div>
            </div>
        </div>
    )
}

export default MobileMenu
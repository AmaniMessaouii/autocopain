import React, { useState } from 'react'
import logo from "../../../assets/Logo.svg"
import avatar from "../../../assets/photoAvatar.svg"
import profilelogo from '../../../assets/depanprofile.svg'
import MobileMenu from '../../common/MobileMenu'
import DeconnectPopup from '../../common/DeconnectPopup'
import VerificationPopup from '../../common/VerificationPopup'
import edit from '../../../assets/EditSquare.svg'
import stars from '../../../assets/stars.svg'
import Menu from '../../common/Menu'
function ProfileDepanneur() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen0, setIsOpen0] = useState(false);
    const openModal = () => {
        setIsOpen0(true);
    };
    return (
        <div className='Container' style={{ padding: 0 }}>
            <div>
                <div className='bg-blue padding-container'  style={{ paddingBottom: '24px' }}>
                    <div className='flex-row align-items-center arrow-top gap-16' style={{ marginBottom: "30px" }}>
                        <img src={logo} alt="arrow" />
                        <h4 className='white-color title-nowrap'>Profil</h4>
                    </div>
                    <div className='flex-Column align-items-center gap-12 '>
                        <div className='position-relative'>
                            <img src={avatar} alt='' />
                            <img src={edit} alt='' className='position-absolute edit-position' />
                        </div>
                        <div className='flex-row align-items-center gap-8'>
                            <img src={stars} alt="stars" />
                            <span className='paraMediumM white-color'>4.8</span>
                        </div>
                        <h4 className='white-color'>Wajdi Madani</h4>
                        <span className='paraMediumR white-color'>+33 06 00 55 00 88</span>
                    </div>
                </div>
                <div className='flex-Column gap-20 padding-bottom'>
                    <div className='card-depanneur bg-blue flex-row align-items-center justify-content-between gap-20' onClick={openModal}>
                        <span className='white-color paraLargeB title-max-w'>Basculez en profil automobiliste</span>
                        <img src={profilelogo} alt='' />
                    </div>
                    <Menu setIsOpen={setIsOpen} />
                </div>
            </div>
            <MobileMenu bgcolor='effectBlue' circle="circleblue" autoProfile={false} bottomStyle='navbar-bottom0'/>
            <VerificationPopup
                isOpen={isOpen0}
                setIsOpen={setIsOpen0}
                title='Complétez Votre Profil Dépanneur'
                description="Pour commencer à recevoir des demandes d'assistance, veuillez compléter votre profil en fournissant les informations nécessaires."
                valid={true}
                bottomType='button'
                buttonContent='Compléter'
            />
            <DeconnectPopup isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}

export default ProfileDepanneur
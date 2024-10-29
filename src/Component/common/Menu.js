import React from 'react'
import arrow from '../../assets/Arrow - Right 2.svg'
import profile from '../../assets/Profile0.svg'
import pannes from '../../assets/Document0.svg'
import notification from '../../assets/Notification0.svg'
import warring from '../../assets/Info-Square0.svg'
import key from '../../assets/Lock0.svg'
import amis from '../../assets/Users0.svg'
import logout from '../../assets/Logout.svg'
function Menu({setIsOpen}) {

    const openPopup = () => {
        setIsOpen(true);
      };
  return (
    <div className='flex-Column gap-20'>
    <div className='flex-row align-items-center justify-content-between gap-12'>
        <div className='flex-row align-items-center gap-16'>
            <img src={profile} alt='' />
            <span className='paraXlargeSemi primary-dark-color'>Gérer le compte autocopain</span>
        </div>
        <img src={arrow} alt='' />
    </div>
    <div className='flex-row align-items-center justify-content-between gap-12'>
        <div className='flex-row align-items-center gap-16'>
            <img src={pannes} alt='' />
            <span className='paraXlargeSemi primary-dark-color'>Mes pannes</span>
        </div>
        <img src={arrow} alt='' />
    </div>
    <div className='flex-row align-items-center justify-content-between gap-12'>
        <div className='flex-row align-items-center gap-16'>
            <img src={notification} alt='' />
            <span className='paraXlargeSemi primary-dark-color'>Notification</span>
        </div>
        <img src={arrow} alt='' />
    </div>
    <div className='flex-row align-items-center justify-content-between gap-12'>
        <div className='flex-row align-items-center gap-16'>
            <img src={warring} alt='' />
            <span className='paraXlargeSemi primary-dark-color'>Centre d’assistance</span>
        </div>
        <img src={arrow} alt='' />
    </div>
    <div className='flex-row align-items-center justify-content-between gap-12'>
        <div className='flex-row align-items-center gap-16'>
            <img src={key} alt='' />
            <span className='paraXlargeSemi primary-dark-color'>Politique de Confidentialité</span>
        </div>
        <img src={arrow} alt='' />
    </div>
    <div className='flex-row align-items-center justify-content-between gap-12'>
        <div className='flex-row align-items-center gap-16'>
            <img src={amis} alt='' />
            <span className='paraXlargeSemi primary-dark-color'>Inviter tes amis</span>
        </div>
        <img src={arrow} alt='' />
    </div>
        <div className='flex-row align-items-center gap-16' onClick={openPopup}>
            <img src={logout} alt='' />
            <span className='paraXlargeSemi red-color'>Se déconnecter</span>
        </div>
</div>
  )
}

export default Menu
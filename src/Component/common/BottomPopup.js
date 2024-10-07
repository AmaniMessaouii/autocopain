import React from 'react'
// import devider from '../../assets/devider.svg'
import cameraIcon from '../../assets/Camerawhite.svg'
import BibliothèqueIcon from '../../assets/ImageWhite.svg'

function BottomPopup({ isOpen, setIsOpen }) {
    const closePopup = () => {
        setIsOpen(false);
    };
    return (
        <div>
            {isOpen && (
                <div className="popup-overlay-bottom">

                    <div className="popup-bottom flex-Column gap-24 align-items-center">
                        <div className='devider-image' onClick={closePopup}></div>
                        <button className="button-primary w-100 flex-row justify-content-center align-items-center gap-16" style={{ borderRadius: '16px' }}>
                            <img src={cameraIcon} alt="" />
                            Appareil photo</button>
                        <button className="button-primary w-100 flex-row justify-content-center align-items-center gap-16" style={{ borderRadius: '16px' }}>
                            <img src={BibliothèqueIcon} alt="" />
                            Bibliothèque</button>

                        <button className="button-primary w-100" onClick={closePopup}>Annuler</button>

                    </div>
                </div>
            )}
        </div>
    )
}

export default BottomPopup
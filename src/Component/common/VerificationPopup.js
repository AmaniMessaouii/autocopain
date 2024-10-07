import React from 'react'
import reussiImg from '../../assets/reussi.svg'
import merciImg from '../../assets/succes.svg'
import loader from '../../assets/loader.svg'

function VerificationPopup({ isOpen, setIsOpen, title, description , valid }) {
   
    const closePopup = (e) => {
        e.preventDefault();
        setIsOpen(false);
    };
    return (
        <div className="app-container">
            {isOpen && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup flex-Column align-items-center gap-32">
                        <img src={valid ? merciImg : reussiImg} alt='' className='top-photo-popup' />
                        <div className='flex-Column gap-16'>
                            <h4 className="primary-blue-color">{title}</h4>
                            <span className="paraLargeR grey-color-900">
                                {description}</span>
                        </div>
                        <img src={loader} alt='loader' className='loader-popup' />
                    </div>
                </div>
            )}
        </div>
    );
};

export default VerificationPopup
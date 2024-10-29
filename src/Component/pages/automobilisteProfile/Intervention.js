import React, { useState } from 'react'
import arrow from "../../../assets/Arrow - Left.svg"
import camera from '../../../assets/Camerawhite.svg'
import VerificationPopup from '../../common/VerificationPopup'
function Intervention() {
    const [isOpen, setIsOpen] = useState(false);
    const openPopup = () => {
        setIsOpen(true);
    };
    return (
        <div className='Container' style={{ padding: 0 }}>
            <div className='padding-container'>
                <div className='flex-row align-items-center arrow-top gap-16' style={{ marginBottom: "30px" }}>
                    <img src={arrow} alt="arrow" />
                    <h4 className='grey-color-900 title-nowrap'>Roue crevée</h4>
                </div>
                <div className='flex-Column gap-30'>
                <div className='flex-Column align-items-center justify-content-center camera-upload gap-16'>
                    <div className='frame-bg-camera flex-Column align-items-center justify-content-center'>
                        <img src={camera} alt='' />
                    </div>
                    <h6 className='primary-blue-color text-max-w'>Ajouter une photo de l’intervention</h6>
                </div>
                <div className='flex-Column gap-12'>
                    <h6 className='primary-dark-color'>Commentaire</h6>
                    <textarea placeholder='Ajouter un commentaire' className="comment-box paraMediumR" />
                </div>
                </div>
            </div>
            <VerificationPopup
             isOpen={isOpen}
             setIsOpen={setIsOpen}
             title='Intervention terminée !'
             description="Votre intervention est maintenant terminée. Nous espérons que vous êtes satisfait du service reçu."
             valid={true}
             bottomType='vide'
             />
            <div className='flex-Column'>
                <div className="horizontal-divider"></div>
                <div className='padding-bottom'>
                    <button type="submit" className="button-primary w-100" onClick={openPopup}>Envoyer</button>
                </div>
            </div>


        </div>
    )
}

export default Intervention
import React from 'react'

function DeconnectPopup({ isOpen, setIsOpen }) {
    const closePopup = () => {
        setIsOpen(false);
    };
    return (
        <div>
            {isOpen && (
                <div className="popup-overlay-bottom">
                    <div className="popup-bottom flex-Column gap-24 align-items-center">
                        <div className='devider-image' onClick={closePopup} style={{ margin: 0 }}></div>
                         <h4 className='red-color'>Se déconnecter</h4>
                         <div className="horizontal-divider"></div>
                          <h5 className='grey-color-800 title-max-w text-center'>Êtes-vous sûr de vouloir vous
                          déconnecter ?</h5>
                        <div className='flex-row align-items-center gap-12 w-100' style={{ marginTop: '24px' }}>
                            <button type="submit" className="button-secondary button-primary w-100">
                                Annuler
                            </button>
                            <button type="submit" className="button-primary w-100" >
                                Déconnexion
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}

export default DeconnectPopup
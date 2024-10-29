import React from 'react'
import arrow from "../../../assets/Arrow - Left.svg"
import workIcon from "../../../assets/Work.svg"
import arrowIcon from "../../../assets/ArrowRight.svg"
import cameraIcon from "../../../assets/Camera.svg"
import { useNavigate } from 'react-router-dom'
function InscriptionParticulier() {
    const navigate = useNavigate();

    const typeServices = () => {
        navigate('/services');

    };
    return (
        <div className='Container'>
            <div>
                <div className='flex-row align-items-center arrow-top gap-16'
                    style={{ marginBottom: "30px" }}>
                    <img src={arrow} alt="arrow" />
                    <h4 className='grey-color-900'>S’inscrire</h4>
                </div>
                <div className='flex-Column gap-30'>
                    <h4 className='primary-dark-color text-center'>Informations supplémentaires</h4>
                    <form className='flex-Column gap-30'>
                        <div className='flex-Column gap-24'>
                        <h6 className='primary-dark-color'>Pièce d’identité Recto/verso</h6>
                            <div className='input-group w-100 flex-row align-items-center'>
                                <input
                                    type="text"
                                    name="assurance"
                                    placeholder="Pièce d’identité Recto/verso"
                                    className="input-field"
                                />
                                <div className="input-icon-right">
                                    <img src={cameraIcon} alt="camera Icon" className='icon-input' />
                                </div>
                            </div>
                        </div>
                        <div className='double-icon-input flex-Column gap-24'>
                        <h6 className='primary-dark-color'>Les services</h6>
                            <div className='input-group w-100 flex-row align-items-center'>
                                <div className="input-icon-left">
                                    <img src={workIcon} alt="work Icon" className='icon-input' />
                                </div>
                                <input
                                    type='text'
                                    name="service"
                                    placeholder="Type de service(s) offert(s)"
                                    className="input-field"
                                />
                                <div className="input-icon-right">
                                    <img src={arrowIcon} alt="work Icon" className='icon-input' onClick={typeServices} />
                                </div>
                            </div>
                        </div>
                        <div className='flex-Column gap-24'>
                        <h6 className='primary-dark-color'>Info sur véhicule</h6>

                            <div className='input-group w-100 flex-row align-items-center'>
                                <input
                                    type="text"
                                    name="NIV"
                                    placeholder="Numéro d’immatriculation du véhicule"
                                    className="input-field"
                                />
                            </div>
                        </div>
                        <div className='flex-Column'>
                            <div className='input-group w-100 flex-row align-items-center'>
                                <input
                                    type="text"
                                    name="assurance"
                                    placeholder="Assurance"
                                    className="input-field"

                                />
                                <div className="input-icon-right">
                                    <img src={cameraIcon} alt="camera Icon" className='icon-input' />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <button type="submit" className="button-primary w-100">Continuer </button> 
        </div>
    )
}

export default InscriptionParticulier
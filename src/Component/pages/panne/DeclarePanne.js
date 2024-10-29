import React from 'react'
import adressIcon from '../../../assets/adressicon.svg'
import arrow from "../../../assets/Arrow - Left.svg"
import roue from "../../../assets/roue.svg";

function DeclarePanne() {
    return (
        <div className='Container'>
            <div>
                <div className='flex-row align-items-center arrow-top gap-16' style={{ marginBottom: "30px" }}>
                    <img src={arrow} alt="arrow" />
                    <h4 className='grey-color-900 title-nowrap'>Signaler votre type de panne</h4>
                </div>

                <div className='flex-Column gap-24'>
                    <div className='flex-Column gap-12 align-items-center justify-content-center'>
                    <img src={roue} alt="" />
                    <span className='paraLargeB primary-dark-color'>Roue crevee</span>
                    </div>
                    <div className='flex-Column gap-24'>
                        <div className='input-group w-100 flex-row align-items-center'>

                            <input
                                type="text"
                                name="position"
                                placeholder="Votre position"
                                className="input-field"
                            // onChange={handleChange}
                            // value={value.position}
                            />
                            <div className="input-icon-right">
                                <img src={adressIcon} alt="profile" className='icon-input' />
                            </div>
                        </div>
                        <div className='input-group w-100 flex-row align-items-center'>
                            <input
                                type="text"
                                name="num"
                                placeholder="Numéro d’immatriculation"
                                className="input-field"
                            // onChange={handleChange}
                            // value={value.num}
                            />
                        </div>
                        <div className='card-panne flex-Column gap-24'>
                            <div className='flex-row align-items-center justify-content-between '>
                                <span className='paraLargeM grey-color-700'>Prix de dépannage</span>
                                <span className='paraXlargeB grey-color-900'>30€</span>
                            </div>
                            <div className='flex-row align-items-center justify-content-between'>
                                <span className='paraLargeM grey-color-700'>Paiement</span>
                                <span className='paraXlargeB grey-color-900'>Carte bancaire</span>
                            </div>
                        </div>
                    </div>

                </div>



            </div>

            <button type="submit" className="button-primary w-100" >
                Déclarer
            </button>
        </div>
    )
}

export default DeclarePanne
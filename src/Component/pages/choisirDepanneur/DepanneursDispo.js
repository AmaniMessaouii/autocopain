import React from 'react'
import arrow from "../../../assets/Arrow - Left.svg"
import timeIcon from '../../../assets/timeIcon.svg'
import positionIcon from '../../../assets/positionIcon.svg'
import priceIcon from '../../../assets/priceIcon.svg'
import stars from '../../../assets/stars.svg'
import { userData } from "../../constants"

function DepanneursDispo() {

    return (
        <div className='Container'>
            <div>
                <div className='flex-row align-items-center arrow-top gap-16' style={{ marginBottom: "30px" }}>
                    <img src={arrow} alt="arrow" />
                    <h4 className='grey-color-900 title-nowrap'>Nos dépanneurs disponibles</h4>
                </div>
                <div className='flex-Column gap-24'>
                {userData.map((item, index) => (
                        <div key={index} className='flex-Column gap-24 card-depanneur'>
                            <div className='flex-Column gap-16'>
                                <div className='flex-row align-items-center justify-content-between'>
                                    <div className='flex-row align-items-center gap-20'>
                                        <div className='position-relative'>
                                            <img src={item.avatar} alt="avatar" />
                                            <img src={item.avatarsub} alt="" className='position-absolute position-avatar' />
                                        </div>
                                        <div className='flex-Column gap-6'>
                                            <span className='paraXlargeB primary-dark-color'>{item.name}</span>
                                            <span className='paraMediumSemi grey-color-700'>{item.date}</span>
                                        </div>
                                    </div>
                                    <div className='flex-row align-items-center gap-8'>
                                        <img src={stars} alt="stars" />
                                        <span className='paraMediumM grey-color-700'>{item.stars}</span>

                                    </div>
                                </div>
                                <div className="horizontal-divider"></div>
                                <div className='flex-row align-items-center justify-content-between gap-32'>
                                    <div className='flex-row align-items-center gap-8'>
                                        <img src={positionIcon} alt='' />
                                        <span className='paraLargeSemi grey-color-900'>{item.position}</span>
                                    </div>
                                    <div className='flex-row align-items-center gap-8'>
                                        <img src={timeIcon} alt='' />
                                        <span className='paraLargeSemi grey-color-900'>{item.time}</span>
                                    </div>
                                    <div className='flex-row align-items-center gap-8'>
                                        <img src={priceIcon} alt='' />
                                        <span className='paraLargeSemi grey-color-900'>{item.price}</span>
                                    </div>
                                </div>
                                <div className='flex-row align-items-center gap-12'>
                                    <button type="submit" className="button-secondary button-primary w-100">
                                        Décliner
                                    </button>
                                    <button type="submit" className="button-primary w-100" >
                                        Payer
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
          

            </div>
        </div>
    )
}

export default DepanneursDispo